'use client'
import { BentoGrid, BentoGridItem } from '../../components/ui/bento-grid';
import { useQuery } from '@tanstack/react-query'
import axios from 'axios';
import ErrorPopup from '../../components/ui/error';

export type TravelPlan = {
  day: string;
  description: string;
};

export type TopOffer = {
  id: number;
  city: string;
  country: string;
  price: number;
  imageUrl: string;
  dateRange: string;
  days: number;
  shortDescription: string;
  description: string;
  tripRoute: string;
  travelPlan: TravelPlan[];
  includedIn: string;
}

export default function BentoGridDemo() {
  const { isError, data, isPending } = useQuery({
    queryKey: ['topOffers'],
    queryFn: fetchOffers,
    retry: 3,
    retryDelay: 1000,
  })

  async function fetchOffers() {
    try {
      const response = await axios.get('http://localhost:8001/api/data/TopOffers');

      if (response.status !== 200) {
        throw new Error('API request failed');
      }

      return response.data as TopOffer[];
    } catch (error) {
      throw error; // Re-throw for handling in useQuery
    }
  }

  return (
    <>
      {isPending ? (
        <div>Loading....</div>
      ) : isError ? (
        <div className='flex items-center justify-center w-full h-full fixed top-0 left-0 z-50'><ErrorPopup /></div>
      ) : (
      <section className='pt-10'>
        <div className='max-w-6xl mx-auto py-12'>
          <h1 className='from-neutral-200 to-neutral-500 text-white font-semibold text-4xl'>Popular Destinations</h1>
          <BentoGrid className="max-w-6xl mx-auto py-5">
            {data.map((item: TopOffer, i: number) => (
              <BentoGridItem
                key={i}
                title={item.city}
                description={item.shortDescription}
                header={ <Skeleton />}
                className={`cursor-pointer ${i === 3 || i === 6 ? 'md:col-span-1' : ''}`}
              />
            ))}
          </BentoGrid>
        </div>
      </section>
      )}
    </>
  );
}

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);