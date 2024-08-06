import Navbar from '../../components/Navbar'
import SearchBar from '../../components/SearchBar'
import { GlobeDemo } from '../../components/Planet'
import BentoGridDemo from './TopOffers'
import { Spotlight } from '../../components/ui/spotlight'

function Landing() {
  return (
    <>
      <Navbar />
      <div className="m-auto flex h-full max-w-[90%] items-center pt-20">
        <div className="flex w-full flex-col gap-10 pb-20 text-white">
          <Spotlight className="-top-40 left-0 md:-top-20 md:left-60" fill="white" />
          <div className="flex flex-col items-center justify-center gap-3">
            <h1 className="relative z-20 bg-gradient-to-b from-neutral-100 to-neutral-400 bg-clip-text py-8 text-4xl font-bold text-transparent sm:text-7xl">
              Discover the World
            </h1>
            <p className="mb-10 from-neutral-100 to-neutral-200 text-lg">
              Explore the most breathtaking destinations with our curated travel packages.
            </p>
          </div>
          <SearchBar />
        </div>
        <GlobeDemo />
      </div>
      <div>
        <BentoGridDemo />
      </div>
    </>
  )
}

export default Landing
