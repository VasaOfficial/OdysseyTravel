export const locations: Record<string, Record<string, {
  id: number;
  latitude: number;
  longitude: number;
  city: string;
  country: string;
}>> = {
  'Europe': {
    'France': {
      id: 1,
      latitude: 48.8566,
      longitude: 2.3522,
      country: 'France',
      city: 'Paris'
    },
    'United Kingdom': {
      id: 2,
      latitude: 51.5074,
      longitude: -0.1278,
      country: 'United Kingdom',
      city: 'London'
    },
    'Spain': {
      id: 3,
      latitude: 40.4168,
      longitude: -3.7038,
      country: 'Spain',
      city: 'Madrid'
    },
    'Italy': {
      id: 4,
      latitude: 41.9028,
      longitude: 12.4964,
      country: 'Italy',
      city: 'Rome'
    },
    'Croatia': {
      id: 5,
      latitude: 45.8150,
      longitude: 15.9819,
      country: 'Croatia',
      city: 'Zagreb'
    },
    'Germany': {
      id: 6,
      latitude: 52.5200,
      longitude: 13.4050,
      country: 'Germany',
      city: 'Berlin'
    },
    'Greece': {
      id: 7,
      latitude: 37.9838,
      longitude: 23.7275,
      country: 'Greece',
      city: 'Athens'
    },
    'Netherlands': {
      id: 8,
      latitude: 52.3676,
      longitude: 4.9041,
      country: 'Netherlands',
      city: 'Amsterdam'
    },
    'Austria': {
      id: 9,
      latitude: 48.210033,
      longitude: 16.363449,
      country: 'Austria',
      city: 'Vienna'
    },
    'Russia': {
      id: 10,
      latitude: 55.7558,
      longitude: 37.6176,
      country: 'Russia',
      city: 'Moscow'
    },
    'Switzerland': {
      id: 11,
      latitude: 46.9480,
      longitude: 7.4474,
      country: 'Switzerland',
      city: 'Bern'
    },
    'Norway': {
      id: 12,
      latitude: 59.9139,
      longitude: 10.7522,
      country: 'Norway',
      city: 'Oslo'
    },
    'Serbia': {
      id: 13,
      latitude: 44.7866,
      longitude: 20.4489,
      country: 'Serbia',
      city: 'Belgrade'
    }
  },
  'Africa': {
    'Egypt': {
      id: 1,
      latitude: 30.033333,
      longitude: 31.233334,
      country: 'Egypt',
      city: 'Cairo'
    },
    'Kenya': {
      id: 2,
      latitude: -1.2864,
      longitude: 36.8172,
      country: 'Kenya',
      city: 'Nairobi'
    },
    'Madagascar': {
      id: 3,
      latitude: -18.8792,
      longitude: 47.5079,
      country: 'Madagascar',
      city: 'Antananarivo'
    },
    'Morocco': {
      id: 4,
      latitude: 34.020882,
      longitude: -6.841650,
      country: 'Morocco',
      city: 'Rabat'
    },
    'Namibia': {
      id: 5,
      latitude: -22.9576,
      longitude: 18.4904,
      country: 'Namibia',
      city: 'Windhoek'
    },
    'South Africa': {
      id: 6,
      latitude: -33.918861,
      longitude: 18.423300,
      country: 'South Africa',
      city: 'Cape Town'
    },
    'Zanzibar': {
      id: 7,
      latitude: -6.1659,
      longitude: 39.2026,
      country: 'Zanzibar',
      city: 'Zanzibar City'
    },
    'Uganda': {
      id: 8,
      latitude: 0.3476,
      longitude: 32.5825,
      country: 'Uganda',
      city: 'Kampala'
    }
  },
  'Asia': {
    'Hong Kong': {
      id: 1,
      latitude: 22.302711,
      longitude: 114.177216,
      country: 'China',
      city: 'Hong Kong'
    },
    'China': {
      id: 1,
      latitude: 39.9042,
      longitude: 116.4074,
      country: 'China',
      city: 'Beijing'
    },
    'India': {
      id: 2,
      latitude: 20.5937,
      longitude: 78.9629,
      country: 'India',
      city: 'New Delhi'
    },
    'Iran': {
      id: 3,
      latitude: 32.4279,
      longitude: 53.6880,
      country: 'Iran',
      city: 'Tehran'
    },
    'Sri Lanka': {
      id: 4,
      latitude: 6.927079,
      longitude: 79.861244,
      country: 'Sri Lanka',
      city: 'Colombo'
    },
    'Japan': {
      id: 5,
      latitude: 35.6895,
      longitude: 139.6917,
      country: 'Japan',
      city: 'Tokyo'
    },
    'Iraq': {
      id: 6,
      latitude: 33.3152,
      longitude: 44.3661,
      country: 'Iraq',
      city: 'Baghdad'
    },    
    'Nepal': {
      id: 7,
      latitude: 28.3949,
      longitude: 84.1240,
      country: 'Nepal',
      city: 'Kathmandu'
    },
    'South Korea': {
      id: 8,
      latitude: 37.5665,
      longitude: 126.9780,
      country: 'South Korea',
      city: 'Seoul'
    },
    'Thailand': {
      id: 9,
      latitude: 13.7563,
      longitude: 100.5018,
      country: 'Thailand',
      city: 'Bangkok'
    },
    'Mongolia': {
      id: 10,
      latitude: 47.921230,
      longitude: 106.918556,
      country: 'Mongolia',
      city: 'Ulaanbaatar'
    },
    'UAE': {
      id: 11,
      latitude: 23.4241,
      longitude: 53.8478,
      country: 'UAE',
      city: 'Abu Dhabi'
    },
    'Vietnam': {
      id: 12,
      latitude: 14.0583,
      longitude: 108.2772,
      country: 'Vietnam',
      city: 'Hanoi'
    }
  },
  'Oceania': {
    'Papua New Guinea': {
      id: 1,
      latitude: -9.47723,
      longitude: 147.15089,
      country: 'Papua New Guinea',
      city: 'Port Moresby'
    },
    'Uluru': {
      id: 2,
      latitude: -25.3444,
      longitude: 131.0369,
      country: 'Australia',
      city: 'Uluru'
    },
    'Solomon Islands': {
      id: 3,
      latitude: -9.6457,
      longitude: 160.1562,
      country: 'Solomon Islands',
      city: 'Honiara'
    },
    'Australia': {
      id: 4,
      latitude: -35.282001,
      longitude: 149.128998,
      country: 'Australia',
      city: 'Canberra'
    },
    'New Zealand': {
      id: 5,
      latitude: -41.2865,
      longitude: 174.7762,
      country: 'New Zealand',
      city: 'Wellington'
    },
    'Great Barrier Reef': {
      id: 6,
      latitude: -18.156290,
      longitude: 147.485962,
      country: 'Australia',
      city: 'Cairns'
    },
    'Fiji': {
      id: 7,
      latitude: -17.713371,
      longitude: 178.065033,
      country: 'Fiji',
      city: 'Suva'
    },
  },
  'South America': {
    'Argentina': {
      id: 1,
      latitude: -34.6037,
      longitude: -58.3816,
      country: 'Argentina',
      city: 'Buenos Aires'
    },
    'Chile': {
      id: 2,
      latitude: -33.4489,
      longitude: -70.6693,
      country: 'Chile',
      city: 'Santiago'
    },
    'Brasil': {
      id: 3,
      latitude: -15.8267,
      longitude: -47.9218,
      country: 'Brasil',
      city: 'Brasília'
    },
    'Peru': {
      id: 4,
      latitude: -12.0464,
      longitude: -77.0428,
      country: 'Peru',
      city: 'Lima'
    },
    'Venezuela': {
      id: 5,
      latitude: 10.4806,
      longitude: -66.9036,
      country: 'Venezuela',
      city: 'Caracas'
    },
    'Colombia': {
      id: 6,
      latitude: 4.7110,
      longitude: -74.0721,
      country: 'Colombia',
      city: 'Bogotá'
    },
    'Amazon': {
      id: 7,
      latitude: -2.163106,
      longitude: -60.126648,
      country: 'Brasil',
      city: 'Amazon'
    },
  },
  'North America': {
    'California': {
      id: 1,
      latitude: 36.7783,
      longitude: -119.4179,
      country: 'United States',
      city: 'California'
    },
    'New York': {
      id: 2,
      latitude: 40.7128,
      longitude: -74.0060,
      country: 'United States',
      city: 'New York'
    },
    'Canada': {
      id: 3,
      latitude: 43.651070,
      longitude: -79.347015,
      country: 'Canada',
      city: 'Toronto'
    },
    'Florida': {
      id: 4,
      latitude: 27.9944,
      longitude: -81.7603,
      country: 'United States',
      city: 'Florida'
    },    
    'Jamaica': {
      id: 5,
      latitude: 18.1096,
      longitude: -77.2975,
      country: 'Jamaica',
      city: 'Kingston'
    },
    'Cuba': {
      id: 6,
      latitude: 23.1136,
      longitude: -82.3666,
      country: 'Cuba',
      city: 'Havana'
    },
    'Mexico': {
      id: 7,
      latitude: 23.6345,
      longitude: -102.5528,
      country: 'Mexico',
      city: 'Mexico City'
    },
    'Washington': {
      id: 8,
      latitude: 38.889805,
      longitude: -77.009056,
      country: 'United States',
      city: 'Washington DC'
    }
  }
};