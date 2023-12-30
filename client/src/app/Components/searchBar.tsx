'use client'
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { useSearchStore } from "@/src/state/store";

import DateRangeComp from "./DateRangeComp";

import SearchIcon from "@/public/assets/search.webp";
import Africa from "@/public/assets/search_continents/Africa.webp";
import Asia from "@/public/assets/search_continents/Asia.webp";
import Europe from "@/public/assets/search_continents/Europe.webp";
import NorthAmerica from "@/public/assets/search_continents/NorthAmerica.webp";
import Oceania from "@/public/assets/search_continents/Oceania.webp";
import SouthAmerica from "@/public/assets/search_continents/SouthAmerica.webp";
import calendarIcon from '@/public/assets/search_bar/calendar.webp'
import priceIcon from '@/public/assets/search_bar/price-tag.webp'
import globeIcon from '@/public/assets/search_bar/globe.webp'

function SearchBar() {
  const [destination, setDestination] = useState(false);
  const [calendar, setCalendar] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const calendarRef = useRef<HTMLDivElement>(null);
  const { selectedContinent, maxPrice, setContinent, setMaxPrice } = useSearchStore();

  const OpenDestinations = () => {
    setDestination(!destination);
  };

  const handleContinentSelect = (continent: string) => {
    setContinent(continent);
    setDestination(false);
    console.log('Continent', continent );
  };

  const OpenCalendar = () => {
    setCalendar(!calendar);
    setDestination(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (cardRef.current && !cardRef.current.contains(event.target as Node)) {
      setDestination(false);
    }

    if (calendarRef.current && !calendarRef.current.contains(event.target as Node)) {
      setCalendar(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return ( 
    <>
      <div className="flex items-center rounded-full border bg-white text-left text-gray-600">
        <div className="flex-1 cursor-pointer py-7 pl-8 hover:rounded-full hover:border-transparent hover:bg-gray-200"
        onClick={OpenDestinations}>
          <div className="flex gap-3">
            <Image src={globeIcon} alt="globe icon" height={25} width={25}/>
            <p>{selectedContinent || "Search Destination"}</p>
          </div>
        </div>
        <div className="border-r border-gray-600" />
        <div className="flex-1 cursor-pointer py-7 pl-8 hover:rounded-full hover:border-transparent hover:bg-gray-200" onClick={OpenCalendar}>
          <div className="flex gap-3">
            <Image src={calendarIcon} alt="calendar icon" height={25} width={25}/>
            <div>Add dates</div>
          </div>
        </div>
        <div className="flex-1 py-7 pl-8">
          <div className="flex gap-3">
            <Image src={priceIcon} alt="price icon" height={25} width={25}/>
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
        <div className="mr-2 rounded-full bg-black p-3 cursor-pointer">
          <Image
            alt="search button"
            src={SearchIcon}
            height={40}
            width={40}
          />
        </div>
      </div>
      {destination && (
      <div
        ref={cardRef}
        className="absolute top-full mt-2 flex flex-col gap-6 rounded border bg-white p-10 shadow-md"
      >
        <div className="flex gap-6">
          <div onClick={() => handleContinentSelect("Africa")}>
            <div className="relative h-28 w-28">
              <Image
                src={Africa}
                quality={100}
                alt="Africa"
                fill
                style={{objectFit:"cover"}}
                className="cursor-pointer rounded-lg border border-gray-400 hover:border-gray-900"
              />
            </div>
            <p className="text-black text-left font-medium">Africa</p>
          </div>
          <div onClick={() => handleContinentSelect("Europe")}>
            <div className="relative h-28 w-28">
              <Image
                src={Europe}
                quality={100}
                alt="Europe"
                fill
                style={{objectFit:"cover"}}
                className="cursor-pointer rounded-lg border border-gray-400 hover:border-gray-900"
              />
            </div>
            <p className="text-black text-left font-medium">Europe</p>
          </div>
          <div onClick={() => handleContinentSelect("Asia")}>
            <div className="relative h-28 w-28">
              <Image
                src={Asia}
                quality={100}
                alt="Asia"
                fill
                style={{objectFit:"cover"}}
                className="cursor-pointer rounded-lg border border-gray-400 hover:border-gray-900"
              />
            </div>
            <p className="text-black text-left font-medium">Asia</p>
          </div>
        </div>
        <div className="flex gap-6">
          <div onClick={() => handleContinentSelect("North America")}>
            <div className="relative h-28 w-28">
              <Image
                src={NorthAmerica}
                quality={100}
                alt="North America"
                fill
                style={{objectFit:"cover"}}
                className="cursor-pointer rounded-lg border border-gray-400 hover:border-gray-900"
              />
            </div>
            <p className="text-black text-left font-medium">North America</p>
          </div>
          <div onClick={() => handleContinentSelect("South America")}>
            <div className="relative h-28 w-28">
              <Image
                src={SouthAmerica}
                quality={100}
                alt="South America"
                fill
                style={{objectFit:"cover"}}
                className="cursor-pointer rounded-lg border border-gray-400 hover:border-gray-900"
              />
            </div>
            <p className="text-black text-left font-medium">South America</p>
          </div>
          <div onClick={() => handleContinentSelect("Oceania")}>
            <div className="relative h-28 w-28">
              <Image
                src={Oceania}
                quality={100}
                alt="Oceania"
                fill
                style={{objectFit:"cover"}}
                className="cursor-pointer rounded-lg border border-gray-400 hover:border-gray-900"
              />
            </div>
            <p className="text-black text-left font-medium">Oceania</p>
          </div>
        </div>
      </div>
    )}
    <div className="absolute top-full left-72">
      {calendar && (
        <div ref={calendarRef}>
          <DateRangeComp />
        </div>
      )}
    </div>
    </>
  );
}

export default SearchBar;