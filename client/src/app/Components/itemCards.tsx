import Image from "next/image";
import EmptyHeartIcon from '@/public/assets/card/empty-heart.webp'
import RedHeartIcon from '@/public/assets/card/red-heart.webp'
import CartIcon from '@/public/assets/card/cart.webp'
import jaguar from '@/public/assets/jaguar.jpg'
import CalendarIcon from '@/public/assets/search_bar/calendar.webp'

function ItemCard() {
  return ( 
    <div className="shadow-md cursor-pointer transition-transform transform hover:scale-105">
      <div className="relative flex flex-col">
        <Image className="rounded-t" src={jaguar} alt="missing image" />
        <Image
          className="absolute top-0 right-0 m-2 cursor-pointer transition-transform transform hover:scale-110"
          src={EmptyHeartIcon}
          alt="empty heart icon"
          width={30}
          height={30}
        />
        <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-60 pl-4 py-1">
          <p className="m-0 text-white font-semibold text-2xl">Location</p>
          <p className="text-white">Country</p>
        </div>
      </div>
      <div className="border-2 border-gray-500 px-3 pb-2 py-1">
        <p className="text-red-600 mb-2 text-xl font-medium">$1000</p>
        <div className="flex w-full justify-between">
          <div className="flex gap-1 text-lg">
            <p className="text-lime-600 font-medium">7</p>
            <p className="text-gray-500 font-medium">days</p>
          </div>
          <Image className="cursor-pointer group transition-transform transform hover:scale-110" src={CartIcon} alt="cart icon" width={30} height={30} />
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

export default ItemCard;