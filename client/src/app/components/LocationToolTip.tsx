import Image from 'next/image'
import AfricaImage from '@/public/assets/continentsSlider/Africa.webp'

function LocationTooltip() {
  return (
    <div className="absolute flex flex-col">
      <Image alt="africa" src={AfricaImage} height={215} width={330} />
      <div className="bg-white">
        <h1>Egypt</h1>
        <h1>Egypt</h1>
        <h1>Egypt</h1>
      </div>
    </div>
  )
}

export default LocationTooltip
