type TravelPlan = {
  day: string;
  description: string;
};

type Destination = {
  city: string;
  countryId: number;
  countryName: string;
  dateRange: string;
  description: string;
  durationDays: number;
  id: number;
  imageUrl: string;
  includedIn: string;
  latitude: number;
  longitude: number;
  price: number;
  travelPlans: TravelPlan[];
  tripRoute: string;
};

export type Country = {
  id: number;
  name: string;
  continentId: number;
  destinations: Destination[];
};

export type ContinentTypes = {
  id: number;
  name: string;
  countries: Country[];
}[];