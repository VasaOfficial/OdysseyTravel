import Navbar from '../../components/Navbar';
import SearchBar from '../../components/SearchBar';
import { GlobeDemo } from '../../components/Planet';
import BentoGridDemo from './TopOffers';
import { Spotlight } from '../../components/ui/spotlight';

function Landing() {
  return (
    <div className="h-auto w-full dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black)]"></div>
      <Navbar />
      <div className='flex max-w-[90%] pt-20 m-auto h-full items-center'>
        <div className='flex flex-col w-full text-white gap-10 pb-20'>
            <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
            <div className='flex flex-col justify-center items-center gap-3'>
              <h1 className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-400 py-8">
                Discover the World
              </h1>
              <p className="mb-10 text-lg from-neutral-100 to-neutral-200">Explore the most breathtaking destinations with our curated travel packages.</p>
            </div>
          <SearchBar />
        </div>
        <GlobeDemo />
      </div>
      <div>
        <BentoGridDemo />
      </div>
    </div>
  );
}

export default Landing;