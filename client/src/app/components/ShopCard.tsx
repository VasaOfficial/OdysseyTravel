import '@/src/styles/favorites-heart.css'
import Image from 'next/image';
import Link from 'next/link';
import AddToFavoritesBtn from './ui/favorites-btn';
import EgyptIcon from '@/public/popup/ea.webp'
import { type Destination } from '@/types';
import { type FC } from 'react';

interface ShopCardProps {
  destination: Destination;
}

const ShopCard: FC<ShopCardProps> = ({ destination }) => {
  return ( 
    <Link href="#" className="block rounded-lg p-4 shadow-sm shadow-indigo-100 bg-slate-200">
      <div className="relative">
        <Image
          alt="////"
          src={EgyptIcon}
          className="rounded-md object-cover"
        />
        <AddToFavoritesBtn />
      </div>
      <div className="mt-2">
        <dl className='flex justify-between w-full'>
          <div className='flex flex-col'>
            <div>
              <dt className="sr-only">Price</dt>
              <dd className="text-sm text-gray-500">${destination.price}</dd>
            </div>
            <div>
              <dt className="sr-only">Address</dt>
              <dd className="font-medium">{destination.city}, {destination.countryName}</dd>
            </div>
          </div>
        </dl>
        <div className="mt-6 flex items-center gap-8 text-xs">
          <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
            <svg
              className="size-4 text-indigo-700"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
              />
            </svg>
            <div className="mt-1.5 sm:mt-0">
              <p className="text-gray-500">Parking</p>
              <p className="font-medium">2 spaces</p>
            </div>
          </div>
          <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
            <svg
              className="size-4 text-indigo-700"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
              />
            </svg>
            <div className="mt-1.5 sm:mt-0">
              <p className="text-gray-500">Bathroom</p>
              <p className="font-medium">2 rooms</p>
            </div>
          </div>
          <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
            <svg
              className="size-4 text-indigo-700"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
            <div className="mt-1.5 sm:mt-0">
              <p className="text-gray-500">Bedroom</p>
              <p className="font-medium">4 rooms</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ShopCard;