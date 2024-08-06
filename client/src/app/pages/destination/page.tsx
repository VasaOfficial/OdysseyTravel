import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Image from 'next/image'
import Hawaii from '@/public/assets/destination/hawai.jpg'
import RouteIcon from '@/public/assets/destination/route.webp'
import FoodIcon from '@/public/assets/destination/food.webp'
import PlaneIcon from '@/public/assets/destination/plane.webp'
import BedIcon from '@/public/assets/destination/bed.webp'

import AddToFavorites from '../../components/ui/add-to-favorites'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

function Location() {
  return (
    <>
      <Navbar />
      <div className="m-auto flex max-w-[75%] flex-col">
        <div className="relative mt-40 flex flex-col">
          <Image src={Hawaii} alt="hawait image" className="w-full rounded" />
          <div className="absolute bottom-0 left-0 py-3 pl-4">
            <p className="m-0 text-6xl font-semibold text-white">Location</p>
          </div>
        </div>
        <div className="z-20 mt-12 flex w-full items-center justify-between">
          <div className="flex flex-col gap-5">
            <div className="flex">
              <p className="mr-5 text-4xl font-bold text-white">Price:</p>
              <p className="text-4xl font-bold text-red-600">$1000</p>
            </div>
            <div className="flex">
              <p className="mr-2 text-4xl font-bold text-green-500">7</p>
              <p className="text-4xl font-bold text-white">days</p>
            </div>
          </div>
          <div className="flex flex-col items-end gap-5">
            <p className="rounded border p-4 text-white">Book now</p>
            <AddToFavorites />
          </div>
        </div>
        <div className="my-10 w-full border-t-2 border-gray-400" />
        <p className="text-xl font-semibold text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
          <br />
          <br />
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div className="my-10 w-full border-t-2 border-gray-400" />
        <div className="flex gap-7 text-center">
          <Image src={RouteIcon} alt="route icon" height={40} width={40} />
          <p className="text-3xl font-bold text-white">
            Belgrade → Paris → Lyon → Bordeaux → French Riviera (Nice, Cannes, Monaco) → Belgrade
          </p>
        </div>
        <div className="my-10 w-full border-t-2 border-gray-400" />
        <div className="flex flex-col justify-start">
          <h1 className="mb-10 text-4xl font-semibold text-white">Travel Plan</h1>
          <div className="flex flex-col justify-start gap-5 text-white">
            <Accordion className="rounded-2xl border-2 border-black px-7" type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>Day 1</AccordionTrigger>
                <AccordionContent>Description</AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion className="rounded-2xl border-2 border-black px-7" type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>Day 2</AccordionTrigger>
                <AccordionContent>Description</AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion className="rounded-2xl border-2 border-black px-7" type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>Day 3</AccordionTrigger>
                <AccordionContent>Description</AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion className="rounded-2xl border-2 border-black px-7" type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>Day 4</AccordionTrigger>
                <AccordionContent>Description</AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion className="rounded-2xl border-2 border-black px-7" type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>Day 5</AccordionTrigger>
                <AccordionContent>Description</AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="my-20 w-full border-t-2 border-gray-400" />
          <div className="mb-10 flex w-full flex-col items-center text-white">
            <h1 className="mb-20 text-4xl font-semibold">What's included</h1>
            <div className="flex items-center justify-center gap-10">
              <div className="flex gap-7 pr-10 pt-1">
                <Image
                  src={BedIcon}
                  alt="bed icon"
                  width={70}
                  height={70}
                  className="mt-5 self-start"
                />
                <div className="flex flex-col text-xl font-medium">
                  <p className="mb-2 text-2xl font-medium">Accommodation</p>
                  <p>- 7 days</p>
                </div>
              </div>
              <div className="h-40 border-r-2 border-gray-400"></div>
              <div className="flex gap-7 pr-10">
                <Image
                  src={PlaneIcon}
                  alt="bed icon"
                  width={70}
                  height={70}
                  className="mt-5 self-start"
                />
                <div className="flex flex-col text-xl font-medium">
                  <p className="mb-2 text-2xl font-medium">Transport</p>
                  <p>- Plane tickets to destination and back.</p>
                  <p>- Bus tickets for city travel.</p>
                </div>
              </div>
              <div className="h-40 border-r-2 border-gray-400"></div>
              <div className="flex gap-7">
                <Image
                  src={FoodIcon}
                  alt="bed icon"
                  width={70}
                  height={70}
                  className="mt-5 self-start"
                />
                <div className="flex flex-col text-xl font-medium">
                  <p className="mb-2 text-2xl font-medium">Food</p>
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
    </>
  )
}

export default Location
