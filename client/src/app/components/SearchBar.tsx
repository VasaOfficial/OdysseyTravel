'use client'
import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { useSearchStore } from '@/src/state/store'

import DateRangeComp from './DateRangeComp'
import Spinner from './ui/spinner'

import SearchIcon from '@/public/assets/search.webp'
import Africa from '@/public/assets/search_continents/Africa.webp'
import Asia from '@/public/assets/search_continents/Asia.webp'
import Europe from '@/public/assets/search_continents/Europe.webp'
import NorthAmerica from '@/public/assets/search_continents/NorthAmerica.webp'
import Oceania from '@/public/assets/search_continents/Oceania.webp'
import SouthAmerica from '@/public/assets/search_continents/SouthAmerica.webp'
import calendarIcon from '@/public/assets/search_bar/calendar.webp'
import priceIcon from '@/public/assets/search_bar/price-tag.webp'
import globeIcon from '@/public/assets/search_bar/globe.webp'

function SearchBar() {
  const [destination, setDestination] = useState(false)
  const [calendar, setCalendar] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)
  const calendarRef = useRef<HTMLDivElement>(null)
  const { selectedContinent, maxPrice, selectedDateRange, setContinent, setMaxPrice } =
    useSearchStore()
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const OpenDestinations = () => {
    setDestination(!destination)
  }

  const handleContinentSelect = (continent: string) => {
    setContinent(continent)
    setDestination(false)
  }

  const OpenCalendar = () => {
    setCalendar(!calendar)
    setDestination(false)
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (cardRef.current && !cardRef.current.contains(event.target as Node)) {
      setDestination(false)
    }

    if (calendarRef.current && !calendarRef.current.contains(event.target as Node)) {
      setCalendar(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleSearch = async () => {
    // Handle case when the user didn't select anything
    if (!selectedContinent || (!selectedContinent && !calendar && maxPrice <= 0)) return

    setLoading(true)

    try {
      // Get start and end dates from the selected date range
      const startDate = selectedDateRange[0]?.startDate
      const endDate = selectedDateRange[0]?.endDate

      const formattedStartDate = startDate?.toISOString().split('T')[0]
      const formattedEndDate = endDate?.toISOString().split('T')[0]

      // Construct the search query based on selected options
      const query = {
        continent: selectedContinent,
        dateRange: startDate && endDate ? `${formattedStartDate}:${formattedEndDate}` : null,
        maxPrice: maxPrice,
      }

      const createQueryString = (
        name: string,
        value: string | number | Date | null | undefined,
      ) => {
        const params = new URLSearchParams()

        // checking if the value is not null or undefined and maxPrice is not 0
        if (value !== null && value !== undefined && !(name === 'maxPrice' && value === 0)) {
          if (value instanceof Date) {
            params.set(name, value.toISOString())
          } else {
            params.set(name, value.toString())
          }
        }

        return params.toString()
      }

      router.push(
        '/pages/shop?' +
          createQueryString('continent', query.continent) +
          '&' +
          createQueryString('dateRange', query.dateRange) +
          '&' +
          createQueryString('maxPrice', query.maxPrice),
      )
    } catch (error) {
      alert('Error during search')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="relative z-[100]">
      <div className="flex w-full items-center">
        <div className="flex w-full items-center rounded-full border bg-white text-left text-gray-600 shadow-md">
          <div
            className="flex-1 cursor-pointer py-7 pl-8 hover:rounded-full hover:border-transparent hover:bg-gray-200"
            onClick={OpenDestinations}
          >
            <div className="flex gap-3">
              <Image src={globeIcon} alt="globe icon" height={25} width={25} />
              <p>{selectedContinent || 'Search Destination'}</p>
            </div>
          </div>
          <div className="border-r border-gray-600" />
          <div
            className="flex-1 cursor-pointer py-7 pl-8 hover:rounded-full hover:border-transparent hover:bg-gray-200"
            onClick={OpenCalendar}
          >
            <div className="flex gap-3">
              <Image src={calendarIcon} alt="calendar icon" height={25} width={25} />
              <p>Add dates</p>
            </div>
          </div>
          <div className="flex-1 py-7 pl-8">
            <div className="flex gap-3">
              <Image src={priceIcon} alt="price icon" height={25} width={25} />
              <input
                type="text"
                placeholder="Add max price"
                className="border-none outline-none focus:ring-0"
                maxLength={6}
                max={100000}
                value={maxPrice > 0 ? maxPrice.toString() : ''}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
              />
            </div>
          </div>
          {loading ? (
            <div className="mr-2 rounded-full ">
              <Spinner />
            </div>
          ) : (
            <div
              className="mr-2 transform cursor-pointer rounded-full bg-black p-3 transition-transform hover:scale-110"
              onClick={handleSearch}
            >
              <Image alt="search button" src={SearchIcon} height={40} width={40} />
            </div>
          )}
        </div>
        {destination && (
          <div
            ref={cardRef}
            className="absolute left-0 top-full z-[100] mt-2 flex flex-col gap-6 rounded border bg-white p-8 shadow-md"
          >
            <div className="flex gap-6">
              <div onClick={() => handleContinentSelect('Africa')}>
                <div className="relative h-28 w-28">
                  <Image
                    src={Africa}
                    quality={100}
                    alt="Africa"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="cursor-pointer rounded-lg border border-gray-400 hover:border-gray-900"
                  />
                </div>
                <p className="text-left font-medium text-black">Africa</p>
              </div>
              <div onClick={() => handleContinentSelect('Europe')}>
                <div className="relative h-28 w-28">
                  <Image
                    src={Europe}
                    quality={100}
                    alt="Europe"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="cursor-pointer rounded-lg border border-gray-400 hover:border-gray-900"
                  />
                </div>
                <p className="text-left font-medium text-black">Europe</p>
              </div>
              <div onClick={() => handleContinentSelect('Asia')}>
                <div className="relative h-28 w-28">
                  <Image
                    src={Asia}
                    quality={100}
                    alt="Asia"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="cursor-pointer rounded-lg border border-gray-400 hover:border-gray-900"
                  />
                </div>
                <p className="text-left font-medium text-black">Asia</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div onClick={() => handleContinentSelect('North America')}>
                <div className="relative h-28 w-28">
                  <Image
                    src={NorthAmerica}
                    quality={100}
                    alt="North America"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="cursor-pointer rounded-lg border border-gray-400 hover:border-gray-900"
                  />
                </div>
                <p className="text-left font-medium text-black">North America</p>
              </div>
              <div onClick={() => handleContinentSelect('South America')}>
                <div className="relative h-28 w-28">
                  <Image
                    src={SouthAmerica}
                    quality={100}
                    alt="South America"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="cursor-pointer rounded-lg border border-gray-400 hover:border-gray-900"
                  />
                </div>
                <p className="text-left font-medium text-black">South America</p>
              </div>
              <div onClick={() => handleContinentSelect('Oceania')}>
                <div className="relative h-28 w-28">
                  <Image
                    src={Oceania}
                    quality={100}
                    alt="Oceania"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="cursor-pointer rounded-lg border border-gray-400 hover:border-gray-900"
                  />
                </div>
                <p className="text-left font-medium text-black">Oceania</p>
              </div>
            </div>
          </div>
        )}
        {calendar && (
          <div ref={calendarRef} className="absolute left-60 top-full mt-2">
            <DateRangeComp />
          </div>
        )}
      </div>
    </div>
  )
}

export default SearchBar
