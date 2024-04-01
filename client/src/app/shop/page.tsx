'use client'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState, Suspense } from 'react';
import Map from 'react-map-gl';
import Navbar from '@/src/app/components/Navbar';
import SearchBar from '@/src/app/components/SearchBar';
import Footer from '@/src/app/components/Footer';
import PriceFilterDropdown from './ui/priceDropdown';
import ItemCard from '@/src/app/components/ShopCard';
import {Pagination} from '@nextui-org/react';

type Coordinates = {
  latitude: number;
  longitude: number;
  zoom: number;
}

type Continent = 'Africa' | 'Asia' | 'Europe' | 'North America' | 'South America' | 'Oceania';

function ShopSuspense() {
  return (
    <Suspense fallback={<div>Loading...</div>}> {/* HERE ADD LOADING SKELETON */}
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
  }, [searchParams]);

  const continentCoordinates = {
    'Africa': { latitude: 0, longitude: 17, zoom: 3.2 },
    'Asia': { latitude: 55, longitude: 90, zoom: 2.4 },
    'Europe': { latitude: 54, longitude: 15, zoom: 3.5 },
    'North America': { latitude: 54, longitude: -105, zoom: 2.8 },
    'South America':{ latitude: -14, longitude: -51, zoom: 3 },
    'Oceania': { latitude: -24, longitude: 145, zoom: 3.1 },
  };
  
  return (
    <section className="h-auto w-full bg-slate-100">
      <div className="left-0 top-0 w-full">
        <Navbar />
      </div>
      <div className="flex justify-center my-20">
        <div className="transform w-3/6 z-10">
          <SearchBar />
        </div>
      </div>
      <div className="max-w-[95%] m-auto mb-20 flex gap-4">
        <div className="max-w-[50%] flex flex-col justify-start">
          <div className="flex justify-between w-full">
            <h1 className="font-extrabold text-5xl">{continent}</h1>
            <PriceFilterDropdown />
          </div>
          <div className='flex flex-col items-center'>
            <div className="flex gap-3 mt-5">
              <ItemCard />
              <ItemCard />
              <ItemCard />
            </div>
            <div className="flex gap-3 mt-5">
              <ItemCard />
              <ItemCard />
              <ItemCard />
            </div>
            {/** Pagination Here */}
            <Pagination showControls total={3} initialPage={1} className='mt-10' color='success' variant='faded' size='lg' showShadow />
          </div>
        </div>
        {/** Mapbox here */}
        <div className='w-full map'>
          <Map
            {...viewport}
            mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
            style={{height: 1200}}
            mapStyle="mapbox://styles/mapbox/streets-v9"
          />
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default ShopSuspense;