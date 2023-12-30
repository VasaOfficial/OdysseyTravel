import { type Data } from "@/src/app/Components/LandingPage/ContinentSlider/ContinentSlider";
import SliderCard from "./SliderCard";

type Props = {
  data: Data[];
};

function Slides({ data }: Props) {
  return (
    <div className=" flex w-full gap-6 cursor-pointer">
      {data.map((data) => {
        return <SliderCard key={data.img} data={data} />;
      })}
    </div>
  );
}

export default Slides