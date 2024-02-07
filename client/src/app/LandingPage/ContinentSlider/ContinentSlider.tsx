'use client'

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Controls from "./ui/Controls";
import SlideInfo from "./ui/SlideInfo";
import Slides from "./ui/Slides";
import BackgroundImage from "./ui/BackgroundImage";

export type Data = {
    img: string;
    title: string;
    description: string;
  };
  
  export type CurrentSlideData = {
    data: Data;
    index: number;
  };

function ContinentSlider() {
    const [data, setData] = useState<Data[]>(sliderData.slice(1));
    const [transitionData, setTransitionData] = useState<Data>(sliderData[0]!);
    const [currentSlideData, setCurrentSlideData] = useState<CurrentSlideData>({
      data: initData,
      index: 0,
    });
  
    return (
      <section
        className='relative min-h-screen select-none overflow-hidden text-white antialiased'>
        <AnimatePresence>
          <BackgroundImage
            transitionData={transitionData}
            currentSlideData={currentSlideData}
          />
          <div className="absolute z-20  h-full w-full">
            <div className=" flex h-full w-full grid-cols-10 flex-col md:grid">
              <div className=" col-span-4 mb-3 flex h-full flex-1 flex-col justify-end px-5 md:mb-0 md:justify-center md:px-10">
                <SlideInfo
                  transitionData={transitionData}
                  currentSlideData={currentSlideData}
                />
              </div>
              <div className=" col-span-6 flex h-full flex-1 flex-col justify-start p-4 md:justify-center md:p-10">
                <Slides data={data} />
                <Controls
                  currentSlideData={currentSlideData}
                  data={data}
                  transitionData={transitionData}
                  initData={initData}
                  handleData={setData}
                  handleTransitionData={setTransitionData}
                  handleCurrentSlideData={setCurrentSlideData}
                  sliderData={sliderData}
                />
              </div>
            </div>
          </div>
        </AnimatePresence>
      </section>
    );
}

export default ContinentSlider;

const sliderData = [
  {
    img: '/assets/continentsSlider/Europe.webp',
    title: "Europe",
    description:
    "Discover the charm of historic cities, cultural treasures, and picturesque landscapes, where every cobblestone street tells a story.",
  },
  {
    img: '/assets/continentsSlider/Asia.webp',
    title: "Asia",
    description:
      "Immerse yourself in ancient traditions, modern marvels, and vibrant cityscapes, as Asia seamlessly blends history with innovation.",
  },
  {
    img: '/assets/continentsSlider/Africa.webp',
    title: "Africa",
    description:
      "Experience the rich tapestry of cultures, breathtaking wildlife, and diverse landscapes, from the Sahara Desert to the Serengeti plains.",
  },
  {
    img: '/assets/continentsSlider/Oceania.webp',
    title: "Oceania",
    description:
      "Embark on a paradise of islands and coral reefs, where the Pacific Ocean meets unique cultures, offering a perfect blend of relaxation and adventure.",
  },
  {
    img: '/assets/continentsSlider/NorthAmerica.webp',
    title: "North America",
    description:
      "From the stunning natural wonders of Yellowstone to the bustling metropolises like New York City, explore the vast diversity and endless opportunities for adventure.",
  },
  {
    img: '/assets/continentsSlider/SouthAmerica.webp',
    title: "South America",
    description:
      "Journey through the Amazon rainforest, ancient ruins of Machu Picchu, and vibrant festivals, as South America captivates with its natural beauty and rich heritage.",
  },
];
  
const initData: Data = sliderData[0]!;