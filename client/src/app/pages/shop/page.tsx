'use client'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState, Suspense} from 'react';
import Map, { Marker, Popup } from 'react-map-gl';
import Image from 'next/image';
import { useQuery } from '@tanstack/react-query'
import axios from 'axios';
import { type ContinentTypes, type Country, type Destination} from '@/types';

import Navbar from '@/src/app/components/Navbar';
import SearchBar from '@/src/app/components/SearchBar';
import Footer from '@/src/app/components/Footer';
import PriceFilterDropdown from './ui/priceDropdown';
import {Pagination} from '@nextui-org/react';
import HawaiImage from '@/public/popup/ea.webp'
import Loading from '@/src/app/loading';
import ErrorPopup from '../../components/ui/error';
import ShopCard from '@/src/app/components/ShopCard';

type Coordinates = {
  latitude: number;
  longitude: number;
  zoom: number;
}

type Continent = 'Africa' | 'Asia' | 'Europe' | 'North America' | 'South America' | 'Oceania';

function ShopSuspense() {
  return (
    <Suspense fallback={<Loading />}>
      <Shop />
    </Suspense>
  );
}

function Shop() {
  const searchParams = useSearchParams();
  const [continent, setContinent] = useState('');
  const [viewport, setViewport] = useState<Coordinates>({
    longitude: 0,
    latitude: 0,
    zoom: 1,
  });
  const [popupOpen, setPopupOpen] = useState<Record<number, boolean>>({});
  const { isError, data, isPending } = useQuery({ 
    queryKey: ['continents', continent], 
    queryFn: fetchContinents,
    retry: 3,
    retryDelay: 1000,
  })
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  async function fetchContinents() {
    try {
      const response = await axios.get(`http://localhost:8000/api/data/locations/${continent}`);
  
      if (response.status !== 200) {
        throw new Error('API request failed');
      }

      return response.data as ContinentTypes;
    } catch (error) {
      throw error; // Re-throw for handling in useQuery
    }
  }

  useEffect(() => {
    // let maxPrice = searchParams.get("maxPrice");
    // let dateRange = searchParams.get("dateRange");
    const continentFromParams = searchParams.get('continent') as Continent;
    if (continentFromParams) {
      setContinent(continentFromParams);

      // Update the viewport based on the current continent
      const { latitude, longitude, zoom } = continentCoordinates[continentFromParams] || {};
      setViewport((prevViewport) => ({
        ...prevViewport,
        latitude: latitude || 0,
        longitude: longitude || 0,
        zoom: zoom || 1
      }));
    }
  }, [searchParams, continent]);

  const continentCoordinates = {
    'Africa': { latitude: 0, longitude: 23, zoom: 2.8 },
    'Asia': { latitude: 35, longitude: 90, zoom: 2 },
    'Europe': { latitude: 54, longitude: 17, zoom: 3.2 },
    'North America': { latitude: 40, longitude: -97, zoom: 3.1 },
    'South America':{ latitude: -10, longitude: -56, zoom: 3.1 },
    'Oceania': { latitude: -24, longitude: 150, zoom: 2.8 },
  };

  const handleMapClick = () => {
    if (data && data.length > 0 && data[0]?.countries) {
      const popupState = data[0].countries.reduce((acc: Record<number, boolean>, country: Country) => {
        country.destinations.forEach((destination) => {
          acc[destination.id] = false;
        });
        return acc;
      }, {});
  
      setPopupOpen(popupState);
    }
  };

  const paginatedItems = data && data.length > 0
    ? data[0]?.countries.flatMap((country) => country.destinations).slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
    : [];

    <div className='flex items-center justify-center w-full h-full fixed top-0 left-0 z-50'><ErrorPopup /></div>
    
  return (
    <>
    {isPending ? (
      <div>Loading....</div>
    ) : isError ? (
      <div className='flex items-center justify-center w-full h-full fixed top-0 left-0 z-50'><ErrorPopup /></div>
    ) : (
      <div className="h-auto w-full dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black)]"></div>
        <div className="flex justify-center">
          <Navbar />
          <div className="transform w-3/6 z-50 mt-40 mb-20">
            <SearchBar />
          </div>
        </div>
          <div className="max-w-[95%] m-auto mb-20 flex gap-4">
            <div className="max-w-[50%] w-full flex flex-col justify-start">
              <div className="flex justify-between w-full">
                <h1 className="font-extrabold text-5xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-400 z-10">{continent}</h1>
                <PriceFilterDropdown />
              </div>
              <div className='flex flex-col items-center z-20'>
                <div className="grid grid-cols-2 gap-4 mt-5">
                  {paginatedItems?.map((destination: Destination) => (
                    <ShopCard key={destination.id} destination={destination} />
                  ))}
                </div>
                <Pagination
                  showControls
                  total={Math.ceil((data?.[0]?.countries.flatMap((country) => country.destinations).length ?? 0) / itemsPerPage)}
                  initialPage={1}
                  page={currentPage}
                  onChange={(page) => setCurrentPage(page)}
                  className='mt-10'
                  color='success'
                  variant='faded'
                  size='lg'
                  showShadow
                />
              </div>
            </div>
            {/** Mapbox here */}
            <div className='w-full'>
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
                {continent && data && data.length > 0 && data[0]?.countries.map((country: Country) => {
                  return country.destinations.map((destination) => {
                    if (destination.latitude !== undefined && destination.longitude !== undefined) {
                      return (
                        <Marker
                          key={destination.id}
                          latitude={destination.latitude}
                          longitude={destination.longitude}
                          onClick={(e) => {
                            e.originalEvent.stopPropagation();
                            setPopupOpen({ [destination.id]: true });
                          }}
                        >
                          <div className='relative flex flex-col'>
                            <div className="bg-white popup-3d text-black p-1 px-2 font-bold text-base rounded-2xl transform hover:scale-125 transition-transform duration-500 ease-in-out cursor-pointer">
                              ${destination.price}
                            </div>
                            {popupOpen[destination.id] && (
                              <Popup
                                key={destination.id}
                                latitude={destination.latitude}
                                longitude={destination.longitude}
                                closeOnClick={false}
                                closeButton={false}
                                anchor='right'
                                offset={90}
                              >
                                <div className="popup-3d bg-slate-50 w-[305px] h-[240px] absolute z-50 mt-2 text-black font-bold text-base rounded-t-2xl rounded-b-2xl">
                                  <div className='w-full'>
                                    <Image src={HawaiImage} alt={`image of ${destination.countryName}`} className='rounded-t-2xl h-[160px]' width={305} height={160} 
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
                                  </div>
                                  <div className='flex flex-col px-4 py-2 gap-2'>
                                    <div className='flex justify-between items-center'>
                                      <div className='text-xl'>{destination.countryName}</div>
                                      <div className="bg-green-400 z-10 text-black p-1 px-2 font-semibold text-sm rounded-2xl transform hover:scale-110 transition-transform duration-500 ease-in-out cursor-pointer">
                                        Check Out
                                      </div>
                                    </div>
                                    <div className='flex gap-1'>
                                      <p className='text-gray-500 font-semibold'>{destination.city}</p>
                                      <p className='text-gray-500 font-semibold'> · {destination.dateRange}</p>
                                    </div>
                                  </div>
                                </div>
                              </Popup>
                            )}
                          </div>
                        </Marker>
                      );
                    }
                  });
                })}
              </Map>
            </div>
          </div>
        <Footer />
      </div>
    )}
    </>
  );
}

export default ShopSuspense;