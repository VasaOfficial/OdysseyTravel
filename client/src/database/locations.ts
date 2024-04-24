export const locations: Record<string, Record<string, {
  id: number;
  latitude: number;
  longitude: number;
  name: string;
}>> = {
  'Europe': {
    'France': {
      id: 1,
      latitude: 48.8566,
      longitude: 2.3522,
      name: 'Paris'
    },
    'United Kingdom': {
      id: 2,
      latitude: 51.5074,
      longitude: -0.1278,
      name: 'London'
    },
    'Spain': {
      id: 3,
      latitude: 40.4168,
      longitude: -3.7038,
      name: 'Madrid'
    },
    'Italy': {
      id: 4,
      latitude: 41.9028,
      longitude: 12.4964,
      name: 'Rome'
    },
    'Croatia': {
      id: 5,
      latitude: 45.8150,
      longitude: 15.9819,
      name: 'Zagreb'
    },
    'Germany': {
      id: 6,
      latitude: 52.5200,
      longitude: 13.4050,
      name: 'Berlin'
    },
    'Greece': {
      id: 7,
      latitude: 37.9838,
      longitude: 23.7275,
      name: 'Athens'
    },
    'Netherlands': {
      id: 8,
      latitude: 52.3676,
      longitude: 4.9041,
      name: 'Amsterdam'
    },
    'Ireland': {
      id: 9,
      latitude: 53.3498,
      longitude: -6.2603,
      name: 'Dublin'
    },
    'Russia': {
      id: 10,
      latitude: 55.7558,
      longitude: 37.6176,
      name: 'Moscow'
    },
    'Switzerland': {
      id: 11,
      latitude: 46.9480,
      longitude: 7.4474,
      name: 'Bern'
    },
    'Norway': {
      id: 12,
      latitude: 59.9139,
      longitude: 10.7522,
      name: 'Oslo'
    },
    'Serbia': {
      id: 13,
      latitude: 44.7866,
      longitude: 20.4489,
      name: 'Belgrade'
    }
  },
  'Africa': {
    'Egypt': {
      id: 1,
      latitude: 26.8206,
      longitude: 30.8025,
      name: 'Cairo'
    },
    'Kenya': {
      id: 2,
      latitude: -1.2864,
      longitude: 36.8172,
      name: 'Nairobi'
    },
    'Madagascar': {
      id: 3,
      latitude: -18.8792,
      longitude: 47.5079,
      name: 'Antananarivo'
    },
    'Morroco': {
      id: 4,
      latitude: 31.7917,
      longitude: -7.0926,
      name: 'Rabat'
    },
    'Namibia': {
      id: 5,
      latitude: -22.9576,
      longitude: 18.4904,
      name: 'Windhoek'
    },
    'South Africa': {
      id: 6,
      latitude: -25.7460,
      longitude: 28.1881,
      name: 'Pretoria'
    },
    'Zanzibar': {
      id: 7,
      latitude: -6.1659,
      longitude: 39.2026,
      name: 'Zanzibar City'
    },
    'Uganda': {
      id: 8,
      latitude: 0.3476,
      longitude: 32.5825,
      name: 'Kampala'
    }
  },
  'Asia': {
    'China': {
      id: 1,
      latitude: 39.9042,
      longitude: 116.4074,
      name: 'Beijing'
    },
    'India': {
      id: 2,
      latitude: 20.5937,
      longitude: 78.9629,
      name: 'New Delhi'
    },
    'Iran': {
      id: 3,
      latitude: 32.4279,
      longitude: 53.6880,
      name: 'Tehran'
    },
    'Cambodia': {
      id: 4,
      latitude: 12.5657,
      longitude: 104.9910,
      name: 'Phnom Penh'
    },
    'Japan': {
      id: 5,
      latitude: 35.6895,
      longitude: 139.6917,
      name: 'Tokyo'
    },
    'Iraq': {
      id: 6,
      latitude: 33.3152,
      longitude: 44.3661,
      name: 'Baghdad'
    },    
    'Nepal': {
      id: 7,
      latitude: 28.3949,
      longitude: 84.1240,
      name: 'Kathmandu'
    },
    'South Korea': {
      id: 8,
      latitude: 37.5665,
      longitude: 126.9780,
      name: 'Seoul'
    },
    'Thailand': {
      id: 9,
      latitude: 13.7563,
      longitude: 100.5018,
      name: 'Bangkok'
    },
    'Turkey': {
      id: 10,
      latitude: 38.9637,
      longitude: 35.2433,
      name: 'Ankara'
    },
    'UAE': {
      id: 11,
      latitude: 23.4241,
      longitude: 53.8478,
      name: 'Abu Dhabi'
    },
    'Vietnam': {
      id: 12,
      latitude: 14.0583,
      longitude: 108.2772,
      name: 'Hanoi'
    }
  },
  'Oceania': {
    'Papua New Guinea': {
      id: 1,
      latitude: -6.314993,
      longitude: 143.95555,
      name: 'Port Moresby'
    },
    'Uluru': {
      id: 2,
      latitude: -25.3444,
      longitude: 131.0369,
      name: 'Uluru'
    },
    'Solomon Islands': {
      id: 3,
      latitude: -9.6457,
      longitude: 160.1562,
      name: 'Honiara'
    },
    'Australia': {
      id: 4,
      latitude: -35.282001,
      longitude: 149.128998,
      name: 'Canberra'
    },
    'New Zealand': {
      id: 5,
      latitude: -41.2865,
      longitude: 174.7762,
      name: 'Wellington'
    }
  },
  'South America': {
    'Argentina': {
      id: 1,
      latitude: -34.6037,
      longitude: -58.3816,
      name: 'Buenos Aires'
    },
    'Chile': {
      id: 2,
      latitude: -33.4489,
      longitude: -70.6693,
      name: 'Santiago'
    },
    'Brasil': {
      id: 3,
      latitude: -15.8267,
      longitude: -47.9218,
      name: 'Brasília'
    },
    'Peru': {
      id: 4,
      latitude: -12.0464,
      longitude: -77.0428,
      name: 'Lima'
    },
    'Venezuela': {
      id: 5,
      latitude: 10.4806,
      longitude: -66.9036,
      name: 'Caracas'
    },
    'Colombia': {
      id: 6,
      latitude: 4.7110,
      longitude: -74.0721,
      name: 'Bogotá'
    }
  },
  'North America': {
    'California': {
      id: 1,
      latitude: 36.7783,
      longitude: -119.4179,
      name: 'Sacramento'
    },
    'New York': {
      id: 2,
      latitude: 40.7128,
      longitude: -74.0060,
      name: 'New York City'
    },
    'Canada': {
      id: 3,
      latitude: 56.1304,
      longitude: -106.3468,
      name: 'Ottawa'
    },
    'Florida': {
      id: 4,
      latitude: 27.9944,
      longitude: -81.7603,
      name: 'Orlando'
    },    
    'Jamaica': {
      id: 5,
      latitude: 18.1096,
      longitude: -77.2975,
      name: 'Kingston'
    },
    'Cuba': {
      id: 6,
      latitude: 23.1136,
      longitude: -82.3666,
      name: 'Havana'
    },
    'Mexico': {
      id: 7,
      latitude: 23.6345,
      longitude: -102.5528,
      name: 'Mexico City'
    },
    'Washington': {
      id: 8,
      latitude: 47.7511,
      longitude: -120.7401,
      name: 'Olympia'
    }
  }
};