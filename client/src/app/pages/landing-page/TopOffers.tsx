'use client'
import { useEffect } from 'react';
import { BentoGrid, BentoGridItem } from '../../components/ui/bento-grid';
import { useQuery } from '@tanstack/react-query'
import axios from 'axios';
import logger from '@/src/log/logger';

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
  const { isError, data } = useQuery({ 
    queryKey: ['topOffers'], 
    queryFn: fetchOffers,
    retry: 3,
    retryDelay: 1000,
  })

  async function fetchOffers() {
    try {
      const response = await axios.get('http://localhost:8000/api/data/TopOffers');
  
      if (response.status !== 200) {
        throw new Error('API request failed');
      }

      logger.info('Fetched top offers successfully:', response.data);
      return response.data as TopOffer[];
    } catch (error) {
      logger.error('Error fetching continents:', error);
      throw error; // Re-throw for handling in useQuery
    }
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
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
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);