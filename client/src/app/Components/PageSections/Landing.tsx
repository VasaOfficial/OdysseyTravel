"use client";

import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";

import MachuPicchu from "@/public/assets/machu-picchu.webp";
import SearchIcon from "@/public/assets/search.webp";
import Africa from "@/public/assets/search_continents/Africa.webp";
import Asia from "@/public/assets/search_continents/Asia.webp";
import Europe from "@/public/assets/search_continents/Europe.webp";
import NorthAmerica from "@/public/assets/search_continents/NorthAmerica.webp";
import Oceania from "@/public/assets/search_continents/Oceania.webp";
import SouthAmerica from "@/public/assets/search_continents/SouthAmerica.webp";

import Navbar from "../Navbar";
import DateRangeComp from "../DateRangeComp";

function Landing() {
  const [destination, setDestination] = useState(false);
  const [calendar, setCalendar] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const calendarRef = useRef<HTMLDivElement>(null);

  const OpenDestinations = () => {
    setDestination(!destination);
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
    <section className="relative h-screen w-full">
      <div className="relative h-full w-full">
        <div className="z-1 relative h-full w-full">
          <Image
            src={MachuPicchu}
            alt="machu picchu"
            className="h-screen brightness-75 filter"
            quality={100}
            priority={true}
          />
        </div>
        <div className="absolute left-0 top-0 z-20 w-full">
          <Navbar />
        </div>
        <div>
          <div className="absolute left-1/2 top-96 flex -translate-x-1/2 -translate-y-1/2 transform flex-col text-center text-white">
            <h1 className="mb-5 text-4xl font-bold">
              Buy Travel Packeges at the Best Price
            </h1>
            <p className="mb-10 text-lg">Explore best selling packeges</p>
            <div className="flex items-center rounded-full border bg-white text-left text-gray-600">
              <div
                className="flex-1 cursor-pointer py-7 pl-8 hover:rounded-full hover:border-transparent hover:bg-gray-200"
                onClick={OpenDestinations}
              >
                Search Destination
              </div>
              <div className="border-r border-gray-600" />
              <div className="flex cursor-pointer items-center py-2 hover:rounded-full hover:bg-gray-200" onClick={OpenCalendar}>
                <div className="mr-16 pl-8 pr-20">Add dates</div>
                <div className="mr-2 rounded-full bg-black p-3">
                  <Image
                    alt="search button"
                    src={SearchIcon}
                    height={40}
                    width={40}
                  />
                </div>
              </div>
            </div>
            {destination && (
              <div
                ref={cardRef}
                className="absolute top-full mt-2 flex flex-col gap-6 rounded border bg-white p-10 shadow-md"
              >
                <div className="flex gap-6">
                  <div>
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
                  <div>
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
                  <div>
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
                  <div>
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
                  <div>
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
                  <div>
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
            <div className="top-full right-10">
              {calendar && (
                <div ref={calendarRef}>
                  <DateRangeComp />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Landing;