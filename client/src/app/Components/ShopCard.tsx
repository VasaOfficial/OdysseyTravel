import '@/src/styles/favorites-btn.css'
import Image from "next/image";
import jaguar from '@/public/assets/jaguar.jpg'
import CalendarIcon from '@/public/assets/search_bar/calendar.webp'
import AddToFavoritesBtn from "./ui/favorites-btn";
import CartBtn from './ui/cart-btn';

function ShopCard() {
  return ( 
    <div className="card shadow-3d cursor-pointer hover-scale">
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
      <div className="border-2 border-gray-500 px-3 pb-2 py-1">
        <div className="flex w-full justify-between items-center py-3">
          <p className="text-red-600 text-xl font-medium">$1000</p>
          <CartBtn />
        </div>
        <div className="border-t border-gray-400 my-3"></div>
        <div className="flex w-full justify-between">
          <Image src={CalendarIcon} alt="calendar icon" width={25} height={25} />
          <p className="font-medium">7.1.2024. - 21.1.2024 </p>
        </div>
      </div>
    </div>
   );
}

export default ShopCard;