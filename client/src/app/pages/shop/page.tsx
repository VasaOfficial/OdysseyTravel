'use client'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState, Suspense } from 'react'
import Map, { Marker, Popup } from 'react-map-gl'
import Image from 'next/image'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { type ContinentTypes, type Country, type Destination } from '@/types'

import Navbar from '@/src/app/components/Navbar'
import SearchBar from '@/src/app/components/SearchBar'
import Footer from '@/src/app/components/Footer'
import PriceFilterDropdown from './ui/priceDropdown'
import { Pagination } from '@nextui-org/react'
import HawaiImage from '@/public/popup/ea.webp'
import Loading from '@/src/app/loading'
import ErrorPopup from '../../components/ui/error'
import ShopCard from '@/src/app/components/ShopCard'

type Coordinates = {
  latitude: number
  longitude: number
  zoom: number
}

type Continent = 'Africa' | 'Asia' | 'Europe' | 'North America' | 'South America' | 'Oceania'

function ShopSuspense() {
  return (
    <Suspense fallback={<Loading />}>
      <Shop />
    </Suspense>
  )
}

function Shop() {
  const searchParams = useSearchParams()
  const [continent, setContinent] = useState('')
  const [viewport, setViewport] = useState<Coordinates>({
    longitude: 0,
    latitude: 0,
    zoom: 1,
  })
  const [popupOpen, setPopupOpen] = useState<Record<number, boolean>>({})
  const { isError, data, isPending } = useQuery({
    queryKey: ['continents', continent],
    queryFn: fetchContinents,
    retry: 3,
    retryDelay: 1000,
  })
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 6

  async function fetchContinents() {
    try {
      const response = await axios.get(`http://localhost:8001/api/data/locations/${continent}`)

      if (response.status !== 200) {
        throw new Error('API request failed')
      }

      return response.data as ContinentTypes
    } catch (error) {
      throw error // Re-throw for handling in useQuery
    }
  }

  useEffect(() => {
    // let maxPrice = searchParams.get("maxPrice");
    // let dateRange = searchParams.get("dateRange");
    const continentFromParams = searchParams.get('continent') as Continent
    if (continentFromParams) {
      setContinent(continentFromParams)

      // Update the viewport based on the current continent
      const { latitude, longitude, zoom } = continentCoordinates[continentFromParams] || {}
      setViewport((prevViewport) => ({
        ...prevViewport,
        latitude: latitude || 0,
        longitude: longitude || 0,
        zoom: zoom || 1,
      }))
    }
  }, [searchParams, continent])

  const continentCoordinates = {
    Africa: { latitude: 0, longitude: 23, zoom: 2.8 },
    Asia: { latitude: 35, longitude: 90, zoom: 2 },
    Europe: { latitude: 54, longitude: 17, zoom: 3.2 },
    'North America': { latitude: 40, longitude: -97, zoom: 3.1 },
    'South America': { latitude: -10, longitude: -56, zoom: 3.1 },
    Oceania: { latitude: -24, longitude: 150, zoom: 2.8 },
  }

  const handleMapClick = () => {
    if (data && data.length > 0 && data[0]?.countries) {
      const popupState = data[0].countries.reduce(
        (acc: Record<number, boolean>, country: Country) => {
          country.destinations.forEach((destination) => {
            acc[destination.id] = false
          })
          return acc
        },
        {},
      )

      setPopupOpen(popupState)
    }
  }

  const paginatedItems =
    data && data.length > 0
      ? data[0]?.countries
          .flatMap((country) => country.destinations)
          .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
      : []

  ;<div className="fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center">
    <ErrorPopup />
  </div>

  return (
    <>
      {isPending ? (
        <div>Loading....</div>
      ) : isError ? (
        <div className="fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center">
          <ErrorPopup />
        </div>
      ) : (
        <>
          <div className="flex justify-center">
            <Navbar />
            <div className="z-50 mb-20 mt-40 w-3/6 transform">
              <SearchBar />
            </div>
          </div>
          <div className="m-auto mb-20 flex max-w-[95%] gap-4">
            <div className="flex w-full max-w-[50%] flex-col justify-start">
              <div className="flex w-full justify-between">
                <h1 className="z-10 bg-gradient-to-b from-neutral-100 to-neutral-400 bg-clip-text text-5xl font-extrabold text-transparent">
                  {continent}
                </h1>
                <PriceFilterDropdown />
              </div>
              <div className="z-20 flex flex-col items-center">
                <div className="mt-5 grid grid-cols-2 gap-4">
                  {paginatedItems?.map((destination: Destination) => (
                    <ShopCard key={destination.id} destination={destination} />
                  ))}
                </div>
                <Pagination
                  showControls
                  total={Math.ceil(
                    (data?.[0]?.countries.flatMap((country) => country.destinations).length ?? 0) /
                      itemsPerPage,
                  )}
                  initialPage={1}
                  page={currentPage}
                  onChange={(page) => setCurrentPage(page)}
                  className="mt-10"
                  color="success"
                  variant="faded"
                  size="lg"
                  showShadow
                />
              </div>
            </div>
            {/** Mapbox here */}
            <div className="w-full">
              <Map
                onClick={handleMapClick}
                {...viewport}
                mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
                style={{ height: 1250 }}
                mapStyle="mapbox://styles/mapbox/outdoors-v12"
                dragRotate={false}
                dragPan={false}
                touchPitch={false}
                boxZoom={false}
                doubleClickZoom={false}
                scrollZoom={false}
                projection={{
                  name: 'mercator',
                }}
              >
                {/* Render markers for each location */}
                {continent &&
                  data &&
                  data.length > 0 &&
                  data[0]?.countries.map((country: Country) => {
                    return country.destinations.map((destination) => {
                      if (
                        destination.latitude !== undefined &&
                        destination.longitude !== undefined
                      ) {
                        return (
                          <Marker
                            key={destination.id}
                            latitude={destination.latitude}
                            longitude={destination.longitude}
                            onClick={(e) => {
                              e.originalEvent.stopPropagation()
                              setPopupOpen({ [destination.id]: true })
                            }}
                          >
                            <div className="relative flex flex-col">
                              <div className="popup-3d transform cursor-pointer rounded-2xl bg-white p-1 px-2 text-base font-bold text-black transition-transform duration-500 ease-in-out hover:scale-125">
                                ${destination.price}
                              </div>
                              {popupOpen[destination.id] && (
                                <Popup
                                  key={destination.id}
                                  latitude={destination.latitude}
                                  longitude={destination.longitude}
                                  closeOnClick={false}
                                  closeButton={false}
                                  anchor="right"
                                  offset={90}
                                >
                                  <div className="popup-3d absolute z-50 mt-2 h-[240px] w-[305px] rounded-b-2xl rounded-t-2xl bg-slate-50 text-base font-bold text-black">
                                    <div className="w-full">
                                      <Image
                                        src={HawaiImage}
                                        alt={`image of ${destination.countryName}`}
                                        className="h-[160px] rounded-t-2xl"
                                        width={305}
                                        height={160}
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                      />
                                    </div>
                                    <div className="flex flex-col gap-2 px-4 py-2">
                                      <div className="flex items-center justify-between">
                                        <div className="text-xl">{destination.countryName}</div>
                                        <div className="z-10 transform cursor-pointer rounded-2xl bg-green-400 p-1 px-2 text-sm font-semibold text-black transition-transform duration-500 ease-in-out hover:scale-110">
                                          Check Out
                                        </div>
                                      </div>
                                      <div className="flex gap-1">
                                        <p className="font-semibold text-gray-500">
                                          {destination.city}
                                        </p>
                                        <p className="font-semibold text-gray-500">
                                          {' '}
                                          · {destination.dateRange}
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </Popup>
                              )}
                            </div>
                          </Marker>
                        )
                      }
                    })
                  })}
              </Map>
            </div>
          </div>
          <Footer />
        </>
      )}
    </>
  )
}

export default ShopSuspense
