import { type Data } from '../ContinentSlider'
import SliderCard from './SliderCard'

type Props = {
  data: Data[]
}

function Slides({ data }: Props) {
  return (
    <div className=" flex w-full cursor-pointer gap-6">
      {data.map((data) => {
        return <SliderCard key={data.img} data={data} />
      })}
    </div>
  )
}

export default Slides
