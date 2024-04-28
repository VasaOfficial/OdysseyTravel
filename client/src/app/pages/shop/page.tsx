'use client'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState, Suspense} from 'react';
import Map, { Marker, Popup } from 'react-map-gl';
import Navbar from '@/src/app/components/Navbar';
import SearchBar from '@/src/app/components/SearchBar';
import Footer from '@/src/app/components/Footer';
import PriceFilterDropdown from './ui/priceDropdown';
import ItemCard from '@/src/app/components/ShopCard';
import {Pagination} from '@nextui-org/react';
import { locations } from '@/src/database/locations';
import Image from 'next/image';
import HawaiImage from '@/public/popup/ea.webp'

type Coordinates = {
  latitude: number;
  longitude: number;
  zoom: number;
}

type Continent = 'Africa' | 'Asia' | 'Europe' | 'North America' | 'South America' | 'Oceania';

function ShopSuspense() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
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
    setPopupOpen({ ...Object.fromEntries(Object.keys(locations).map(locationName => [locationName, false])) });
  };

  return (
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
            <div className="flex gap-3 mt-5">
              <ItemCard />
              <ItemCard />
            </div>
            <div className="flex gap-3 mt-5">
              <ItemCard />
              <ItemCard />
            </div>
            <div className="flex gap-3 mt-5">
              <ItemCard />
              <ItemCard />
            </div>
            {/** Pagination Here */}
            <Pagination showControls total={3} initialPage={1} className='mt-10' color='success' variant='faded' size='lg' showShadow />
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
            {continent && locations[continent ] && Object.keys(locations[continent]!).map((locationId) => {
              const location = locations[continent]![locationId];

              if (location?.latitude !== undefined && location.longitude !== undefined) {
              return (
                <Marker
                  key={locationId}
                  latitude={location.latitude}
                  longitude={location.longitude}
                  onClick={(e) => {
                    e.originalEvent.stopPropagation();
                    setPopupOpen({ [locationId]: true });
                  }}
                >
                  <div className='relative flex flex-col'>
                    <div className="bg-white popup-3d text-black p-1 px-2 font-bold text-base rounded-2xl transform hover:scale-125 transition-transform duration-500 ease-in-out cursor-pointer">
                      $250
                    </div>
                    {popupOpen[locationId] && (
                      <Popup
                      key={locationId}
                      latitude={location.latitude}
                      longitude={location.longitude}
                      closeOnClick={false}
                      closeButton={false}
                      anchor='right'
                      offset={90}
                    >
                      <div className="popup-3d bg-slate-50 w-[305px] h-[240px] absolute z-50 mt-2 text-black font-bold text-base rounded-t-2xl rounded-b-2xl">
                        <div className='w-full'>
                          <Image src={HawaiImage} alt={`image of ${location.country}`} className='rounded-t-2xl h-[160px]' width={305} height={160} 
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
                        </div>
                        <div className='flex flex-col px-4 py-2 gap-2'>
                          <div className='flex justify-between items-center'>
                            <div className='text-xl'>{location.country}</div>
                            <div className="bg-green-400 z-10 text-black p-1 px-2 font-semibold text-sm rounded-2xl transform hover:scale-110 transition-transform duration-500 ease-in-out cursor-pointer">
                              Check Out
                            </div>
                          </div>
                          <div className='flex gap-1'>
                            <p className='text-black font-bold text-base'>$396</p>
                            <p className='text-gray-500 font-semibold'> · {location.city}</p>
                            <p className='text-gray-500 font-semibold'> · JUN 24 - 29</p>
                          </div>
                        </div>
                      </div>
                    </Popup>
                    )}
                  </div>
                </Marker>
              )};
            })}
          </Map>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ShopSuspense;