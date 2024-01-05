'use client'
import { useSearchParams } from 'next/navigation'
import { useEffect } from 'react';
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import Footer from "../LandingPage/Footer";
import PriceFilterDropdown from "./ui/priceDropdown";
import ItemCard from "../components/itemCards";

function Shop() {
  const searchParams = useSearchParams()

  useEffect(() => {
    const query = `${searchParams.toString()}`;
  }, [searchParams])

  return (
    <section className="h-auto w-full bg-gray-100">
      <div className="left-0 top-0 w-full">
        <Navbar />
      </div>
      <div className="flex justify-center my-20">
        <div className="transform w-3/6 z-10">
          <SearchBar />
        </div>
      </div>
      <div className="max-w-[90%] m-auto mb-20">
        <div className="max-w-[50%] flex flex-col justify-start">
          <div className="flex justify-between w-full">
            <h1 className="font-extrabold text-5xl">Africa</h1>
            <PriceFilterDropdown />
          </div>
          <div className="flex gap-3 mt-5">
            <ItemCard />
            <ItemCard />
            <ItemCard />
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default Shop;