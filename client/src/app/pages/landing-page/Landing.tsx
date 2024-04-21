import Navbar from '../../components/Navbar';
import SearchBar from '../../components/SearchBar';
import { GlobeDemo } from '../../components/Planet';
import BentoGridDemo from './TopOffers';

function Landing() {
  return (
    <section className="h-auto bg-black">
      <Navbar />
      <div className='flex max-w-[90%] m-auto mt-20 h-full items-center'>
        <div className='flex flex-col w-full text-white gap-10 pb-20'>
           <div className='flex flex-col justify-center items-center gap-3'>
             <h1 className="mb-5 text-4xl font-bold">
               Discover the World
             </h1>
             <p className="mb-10 text-lg">Explore the most breathtaking destinations with our curated travel packages.</p>
           </div>
          <SearchBar />
        </div>
        <GlobeDemo />
      </div>
      <div>
        <BentoGridDemo />
      </div>
    </section>
  );
}

export default Landing;