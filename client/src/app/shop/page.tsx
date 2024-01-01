import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import Footer from "../LandingPage/Footer";

function Shop() {
  return ( 
    <section className="bg-gray-100 h-screen w-full">
      <Navbar />
      <div className="my-28 max-w-[60%] m-auto">
        <SearchBar />
      </div>
      <div className="max-w-[90%] m-auto">
        <div className="max-w-[50%] flex flex-col justify-start">
          <div className="flex justify-between w-full">
            <h1 className="font-extrabold text-5xl">Africa</h1>
            <div className="px-20 py-3 font-medium broder border-2 border-black">Price down</div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
   );
}

export default Shop;