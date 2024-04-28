import '@/src/styles/favorites-heart.css'
import Image from 'next/image';
import Link from 'next/link';
import AddToFavoritesBtn from './ui/favorites-btn';
import CartBtn from './ui/cart-btn';
import EgyptIcon from '@/public/popup/ea.webp'

function ShopCard() {
  return ( 
    <Link href="#" className="block rounded-lg p-4 shadow-sm shadow-indigo-100 bg-slate-200">
      <Image
        alt=""
        src={EgyptIcon}
        className="rounded-md object-cover"
      />
      <div className="mt-2">
        <dl>
          <div>
            <dt className="sr-only">Price</dt>
            <dd className="text-sm text-gray-500">$240,000</dd>
          </div>
          <div>
            <dt className="sr-only">Address</dt>
            <dd className="font-medium">123 Wallaby Avenue, Park Road</dd>
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


{/**
<div className="card shadow-3d cursor-pointer">
      <div className="relative flex flex-col">
        <Image className="rounded-t" src={jaguar} alt="missing image" />
        <div className="favorites-btn-wrapper">
          <AddToFavoritesBtn />
        </div>
        <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-60 pl-4 py-1">
          <p className="m-0 text-white font-semibold text-2xl">Location</p>
          <p className="text-white">Country</p>
        </div>
      </div>
      <div className="border-2 px-3 pb-2 py-1">
        <div className="flex w-full justify-between items-center py-3">
          <div className='flex flex-col'>
            <p>Price</p>
            <p className="text-xl font-medium">1,500$</p>
          </div>
          <CartBtn />
        </div>
        <div className="border-t border-gray-400 my-3"></div>
        <div className="flex w-full justify-between">
          <Image src={CalendarIcon} alt="calendar icon" width={25} height={25} />
          <p className="font-medium">7.1.2024. - 21.1.2024 </p>
        </div>
      </div>
    </div>
*/}