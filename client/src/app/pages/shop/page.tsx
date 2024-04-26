'use client'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState, Suspense } from 'react';
import Map, { Marker, Popup } from 'react-map-gl';
import Navbar from '@/src/app/components/Navbar';
import SearchBar from '@/src/app/components/SearchBar';
import Footer from '@/src/app/components/Footer';
import PriceFilterDropdown from './ui/priceDropdown';
import ItemCard from '@/src/app/components/ShopCard';
import {Pagination} from '@nextui-org/react';
import { locations } from '@/src/database/locations';
import Image from 'next/image';
import HawaiImage from '@/public/popup/ea.jpg'

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
  }, [searchParams, continent]);

  const continentCoordinates = {
    'Africa': { latitude: 0, longitude: 17, zoom: 3 },
    'Asia': { latitude: 35, longitude: 90, zoom: 2.6 },
    'Europe': { latitude: 54, longitude: 15, zoom: 3.6 },
    'North America': { latitude: 40, longitude: -90, zoom: 3.2 },
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
        <div className='w-full'>
          <Map
            onClick={handleMapClick}
            {...viewport}
            mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
            style={{ height: 1200 }}
            mapStyle="mapbox://styles/mapbox/outdoors-v12"
            dragRotate={false}
            dragPan={false}
            touchPitch={false}
            boxZoom={false}
            doubleClickZoom={false}
            scrollZoom={false}
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
                      anchor='top'
                    >
                      <div className="popup-3d bg-slate-50 w-[325px] h-[270px] absolute z-50 mt-2 z-100 text-black font-bold text-base rounded-t-2xl rounded-b-2xl">
                        <div className='w-full'>
                          <Image src={HawaiImage} alt={`image of ${location?.name}`} className='rounded-t-2xl max-h-[210px]'/>
                        </div>
                        <div className='flex flex-col px-4 py-2 gap-2'>
                          <div className='flex justify-between items-center'>
                            <div className='text-xl'>{location?.name}</div>
                            <div className="bg-green-400 z-10 text-black p-1 px-2 font-bold text-base rounded-2xl transform hover:scale-110 transition-transform duration-500 ease-in-out cursor-pointer">
                              Check Out
                            </div>
                          </div>
                          <div className='flex gap-1'>
                            <p className='text-black font-bold text-base'>$396</p>
                            <p className='text-gray-500 font-semibold'> · JUN 24-29</p>
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
    </section>
  );
}

export default ShopSuspense;