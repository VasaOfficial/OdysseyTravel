import { motion } from 'framer-motion';
import Link from 'next/link';
import OtherInfo from './OtherInfo';
import { type Data, type CurrentSlideData } from '../ContinentSlider';

type Props = {
  transitionData: Data;
  currentSlideData: CurrentSlideData;
};

function SlideInfo({ transitionData, currentSlideData }: Props) {
  return (
    <>
      <motion.span layout className="mb-2 h-1 w-5 rounded-full bg-white" />
      <OtherInfo
        data={transitionData ? transitionData : currentSlideData.data}
      />
      <motion.div layout className="mt-5 flex items-center gap-3">
        <Link
          href={`/pages/shop?continent=${transitionData.title}`}
          className="w-fit rounded-full border-[1px] border-[#ffffff8f] px-6 py-3 text-lg mt-3 font-extralight transition duration-300 ease-in-out hover:bg-white hover:text-black">
          DISCOVER LOCATION
        </Link>
      </motion.div>
    </>
  );
}

export default SlideInfo;