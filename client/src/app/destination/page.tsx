import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import Hawaii from '@/public/assets/hawaii.jpg'
import CartIcon from '@/public/assets/card/cart.webp'
import RouteIcon from '@/public/assets/destination/route.webp'
import FoodIcon from '@/public/assets/destination/food.webp'
import PlaneIcon from '@/public/assets/destination/plane.webp'
import BedIcon from '@/public/assets/destination/bed.webp'

import AddToFavorites from "../components/ui/add-to-favorites";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

function Location() {
  return ( 
    <section className="h-auto w-full bg-gray-100">
      <nav>
        <Navbar />
      </nav>
      <div className="max-w-[70%] flex flex-col my-20 m-auto">
        <div className="relative flex flex-col">
          <Image src={Hawaii} alt="hawait image" width={1150} height={450} className="rounded"/>
          <div className="absolute bottom-0 left-0 pl-4 py-3">
            <p className="m-0 text-white font-semibold text-6xl">Location</p>
          </div>
        </div>
        <div className="flex w-full justify-between items-center mt-12">
          <div className="flex flex-col gap-5">
            <div className="flex">
              <p className="font-bold text-4xl mr-5">Price:</p>
              <p className="text-red-600 font-bold text-4xl">$1000</p>
            </div>
            <div className="flex">
              <p className="text-green-500 font-bold text-4xl mr-2">7</p>
              <p className="text-gray-700 font-bold text-4xl">days</p>
            </div>
          </div>
          <div className="flex gap-10">
            <Image src={CartIcon} alt="Cart icon" width={35} height={35} className="transition-transform transform hover:scale-110 cursor-pointer" />
            <AddToFavorites />
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
                <dd>Plane, Local transport</dd>
                <dd>Hotel</dd>
                <dd>Odyssey Travel</dd>
                <dd>Asia, Maldives</dd>
              </div>
            </dl>
          </div>
        </div>
        <div className="border-t-2 border-gray-400 w-full my-10" />
        <div className="flex flex-col justify-start">
          <h1 className="text-4xl font-semibold mb-10">
            Travel Plan
          </h1>
          <div className="flex flex-col justify-start gap-5">
            <Accordion className="border-2 border-black px-7 rounded-2xl" type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>Day 1</AccordionTrigger>
                <AccordionContent>
                  Description
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion className="border-2 border-black px-7 rounded-2xl" type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>Day 2</AccordionTrigger>
                <AccordionContent>
                  Description
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion className="border-2 border-black px-7 rounded-2xl" type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>Day 3</AccordionTrigger>
                <AccordionContent>
                  Description
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion className="border-2 border-black px-7 rounded-2xl" type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>Day 4</AccordionTrigger>
                <AccordionContent>
                  Description
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion className="border-2 border-black px-7 rounded-2xl" type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>Day 5</AccordionTrigger>
                <AccordionContent>
                  Description
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="border-t-2 border-gray-400 w-full my-20" />
          <div className="flex flex-col items-center w-full mb-10">
            <h1 className="text-4xl font-semibold mb-20">What's included</h1>
            <div className="flex gap-10 justify-center items-center">
              <div className="flex pr-10 gap-7 pt-1">
                <Image src={BedIcon} alt="bed icon" width={70} height={70} className="self-start mt-5" />
                <div className="flex flex-col text-xl font-medium">
                  <p className="text-2xl font-medium mb-2">Accommodation</p>
                  <p>- 7 days</p>
                </div>
              </div>
              <div className="border-r-2 border-gray-400 h-40"></div>
              <div className="flex pr-10 gap-7">
                <Image src={PlaneIcon} alt="bed icon" width={70} height={70} className="self-start mt-5"/>
                <div className="flex flex-col text-xl font-medium">
                  <p className="text-2xl font-medium mb-2">Transport</p>
                  <p>- Plane tickets to destination and back.</p>
                  <p>- Bus tickets for city travel.</p>
                </div>
              </div>
              <div className="border-r-2 border-gray-400 h-40"></div>
              <div className="flex gap-7">
                <Image src={FoodIcon} alt="bed icon" width={70} height={70} className="self-start mt-5"/>
                <div className="flex flex-col text-xl font-medium">
                  <p className="text-2xl font-medium mb-2">Food</p>
                  <p>- 7 x dinner</p>
                  <p>- 7 x breakfasts</p>
                  <p>- 6 x lunch</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
   );
}

export default Location;