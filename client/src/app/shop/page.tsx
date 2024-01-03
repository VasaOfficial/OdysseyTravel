import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import Footer from "../LandingPage/Footer";
import PriceFilterDropdown from "./ui/priceDropdown";
import ItemCard from "../components/itemCards";

function Shop() {
  return ( 
    <section className="bg-gray-100 h-auto w-full">
      <Navbar />
      <div className="my-28 max-w-[60%] m-auto">
        <SearchBar />
      </div>
      <div className="max-w-[90%] m-auto mb-20">
        <div className="max-w-[50%] flex flex-col justify-start">
          <div className="flex justify-between w-full">
            <h1 className="font-extrabold text-5xl">Africa</h1>
            <PriceFilterDropdown />
          </div>
          <div className="flex gap-3 mt-5">
            <ItemCard />
            <ItemCard />
            <ItemCard />
          </div>
        </div>
      </div>
      <Footer />
    </section>
   );
}

export default Shop;