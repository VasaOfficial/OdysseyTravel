'use client'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState, Suspense } from 'react';
import Map, { Marker } from 'react-map-gl';
import Navbar from '@/src/app/components/Navbar';
import SearchBar from '@/src/app/components/SearchBar';
import Footer from '@/src/app/components/Footer';
import PriceFilterDropdown from './ui/priceDropdown';
import ItemCard from '@/src/app/components/ShopCard';
import {Pagination} from '@nextui-org/react';
import { locations } from '@/src/database/locations';

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
  const [popupOpen, setPopupOpen] = useState<Record<string, boolean>>({});

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
    'Africa': { latitude: 0, longitude: 17, zoom: 3 },
    'Asia': { latitude: 35, longitude: 90, zoom: 2.6 },
    'Europe': { latitude: 54, longitude: 15, zoom: 3.5 },
    'North America': { latitude: 50, longitude: -105, zoom: 3.2 },
    'South America':{ latitude: -10, longitude: -56, zoom: 3.1 },
    'Oceania': { latitude: -24, longitude: 145, zoom: 3.2 },
  };

  const handleMapClick = () => {
    setPopupOpen({ ...Object.fromEntries(Object.keys(locations).map(locationName => [locationName, false])) });
  };
  
  return (
    <section className="h-auto w-full bg-slate-100">
        <Navbar />
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
            onClick={handleMapClick}
            {...viewport}
            mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
            style={{ height: 1200 }}
            mapStyle="mapbox://styles/mapbox/outdoors-v12"
          >
            {/* Render markers for each location */}
            {Object.keys(locations).map((locationName) => (
            <Marker
              key={locationName}
              latitude={locations[locationName as keyof typeof locations].latitude}
              longitude={locations[locationName as keyof typeof locations].longitude}
              // onClick={(event) => handleMarkerClick(locations[locationName], event)}
              onClick={(e) => {
                // If we let the click event propagate to the map, it will immediately close the popup
                // with `closeOnClick: true`
                e.originalEvent.stopPropagation();
                setPopupOpen({ [locationName as keyof typeof locations]: true });
              }}
            >
              <div className='flex flex-col'>
                <div className="bg-white text-black p-1 px-2 font-bold text-base rounded-2xl transform hover:scale-125 transition-transform duration-500 ease-in-out cursor-pointer">
                  $250
                </div>
                {popupOpen[locationName] && (
                  <div key={locationName}>
                    <div className="bg-white text-black p-4 font-bold text-base rounded-2xl">
                      {locations[locationName as keyof typeof locations].name} 
                    </div>
                  </div>
                )}
              </div>
            </Marker>
          ))}
          </Map>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default ShopSuspense;