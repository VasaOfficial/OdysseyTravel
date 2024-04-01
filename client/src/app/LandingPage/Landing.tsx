import Image from 'next/image';
import MachuPicchu from '@/public/assets/machu-picchu.webp';
import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';

function Landing() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="relative h-full w-full">
        <div className="z-1 relative h-full w-full">
          <Image
            src={MachuPicchu}
            alt="machu picchu"
            className="h-screen brightness-75 filter"
            quality={100}
            priority={true}
          />
        </div>
        <div className="absolute left-0 top-0 z-20 w-full">
          <Navbar />
        </div>
        <div>
          <div className="absolute left-1/2 top-96 flex -translate-x-1/2 -translate-y-1/2 transform flex-col text-center text-white w-3/6">
            <h1 className="mb-5 text-4xl font-bold">
              Buy Travel Packeges at the Best Price
            </h1>
            <p className="mb-10 text-lg">Explore best selling packeges</p>
            <div className="mt-20">
              <SearchBar />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Landing;