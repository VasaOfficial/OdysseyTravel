import ShopCard from "../../components/ShopCard";

function TopOffers() { 
    return (
      <section className="flex flex-col my-20 max-w-[80%] items-center w-full justify-center m-auto gap-10">
        <h1 className="self-start text-3xl font-bold">Top Offers</h1>
        <div className="flex gap-10">
          <ShopCard />
          <ShopCard />
          <ShopCard />
          <ShopCard />
        </div>
        <div className="flex gap-10">
          <ShopCard />
          <ShopCard />
          <ShopCard />
          <ShopCard />
        </div>
      </section>
    );
}

export default TopOffers;