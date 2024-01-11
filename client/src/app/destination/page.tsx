import Navbar from "../components/Navbar";
import Image from "next/image";
import Hawaii from '@/public/assets/hawaii.jpg'
import RedHeartIcon from '@/public/assets/card/red-heart.webp'
import CartIcon from '@/public/assets/card/cart.webp'
import RouteIcon from '@/public/assets/destionation/route.webp'
import FoodIcon from '@/public/assets/destionation/food.webp'
import PlaneIcon from '@/public/assets/destionation/plane.webp'
import BedIcon from '@/public/assets/destionation/bed.webp'

function Location() {
  return ( 
    <section className="h-auto w-full bg-gray-100">
      <Navbar />
      <div className="max-w-[60%] flex flex-col items-center my-20 m-auto">
        <div className="relative flex flex-col">
          <Image src={Hawaii} alt="hawait image" width={1150} height={450} className="rounded"/>
          <div className="absolute bottom-0 left-0 pl-4 py-3">
            <p className="m-0 text-white font-semibold text-2xl">Location</p>
          </div>
        </div>
        <div className="flex w-full justify-between items-center mt-12">
          <div className="flex">
            <p className="text-red-600 font-bold text-4xl mr-5">$1000</p>
            <p className="text-green-500 font-bold text-4xl mr-2">7</p>
            <p className="text-gray-700 font-bold text-4xl">days</p>
          </div>
          <div className="flex gap-10">
            <Image src={CartIcon} alt="Cart icon" width={35} height={35} className="transition-transform transform hover:scale-110 cursor-pointer" />
            <div className="flex gap-3 justify-center p-3 bg-red-700 rounded-2xl text-white cursor-pointer">
              <div className="rounded-full bg-white p-1">
                <Image src={RedHeartIcon} alt="save to favorite" width={20} height={20}/>
              </div>
              <p>Remove from the favorites</p>
            </div>
          </div>
        </div>
        <div className="border-t-2 border-gray-400 w-full my-10" />
        <p className="font-semibold text-xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        <br />
        <br /> 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
        ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
        in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim 
        id est laborum.
        </p>
        <div className="border-t-2 border-gray-400 w-full my-10" />
        <div className="flex gap-7 text-center">
          <Image src={RouteIcon} alt="route icon" height={40} width={40} />
          <p className="font-bold text-3xl">New York - Paris - Dubai - Maldives</p>
        </div>
        <div className="border-t-2 border-gray-400 w-full my-10" />
        <div className="flex flex-col gap-7 justify-start text-3xl">
          <div className="flex flex-col gap-7 text-3xl">
            <dl className="flex flex-wrap">
              <div className="flex flex-col items-start mr-20 font-medium gap-4">
                <dt>Transport</dt>
                <dt>Accommodation</dt>
                <dt>Organizer</dt>
                <dt>Destination</dt>
              </div>
              <div className="flex flex-col gap-4 text-green-500">
                <dd>Plane, local transport</dd>
                <dd>Hotel</dd>
                <dd>Odyssey Travel</dd>
                <dd>Asia, Maldives</dd>
              </div>
            </dl>
          </div>
        </div>
        <div className="border-t-2 border-gray-400 w-full my-10" />
        <div>
          <h1>
            Travel Plan
          </h1>
        </div>
      </div>
    </section>
   );
}

export default Location;