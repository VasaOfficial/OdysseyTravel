export const locations: Record<string, Record<string, {
    city: string;
    country: string;
    latitude: number;
    longitude: number;
    price: number;
    imageUrl: string;
    days: number;
    description: string;
    tripRoute: string;
    travelPlans:  TravelPlan[];
    includedIn: string;
  }>> = {
    'Europe': {
      'France': {
        country: 'France',
        city: 'Paris',
        latitude: 48.8566,
        longitude: 2.3522,
        price: 2000,
        imageUrl: '///',
        days: 10,
        description: 'Explore the romantic ambiance of Paris, indulge in the exquisite cuisine of Lyon, wander through the vineyards of Bordeaux, and relax on the picturesque beaches of the French Riviera.',
        tripRoute: 'Belgrade → Paris → Lyon → Bordeaux → French Riviera (Nice, Cannes, Monaco) → Belgrade',
        travelPlans: [],
        includedIn: `Accommodation in 4-star hotels
        Transportation between cities (flights or trains)
        Guided tours in Paris, Lyon, Bordeaux, and French Riviera
        Entrance fees to attractions mentioned in the itinerary
        Daily breakfast
        Assistance of a tour guide throughout the trip`
      },
      'United Kingdom': {
        country: 'United Kingdom',
        city: 'London',
        latitude: 51.5074,
        longitude: -0.1278,
        price: 1500,
        imageUrl: '//',
        days: 10,
        description: 'Explore the vibrant cities, stunning countryside, and rich history of the United Kingdom. From the bustling streets of London to the picturesque landscapes of the Scottish Highlands, this journey offers a diverse and unforgettable experience.',
        tripRoute: 'Belgrade (Serbia) -> London (UK) -> Edinburgh (Scotland) -> Inverness (Scotland) -> Glasgow (Scotland) -> Manchester (England) -> Oxford (England) -> Bath (England) -> London (UK) -> Belgrade (Serbia)',
        travelPlans: [],
        includedIn: `Roundtrip flights from Belgrade to the UK
        Accommodation in centrally located hotels
        Daily breakfast
        Guided tours and entrance fees to attractions mentioned in the itinerary
        Transportation between cities (train or coach)
        English-speaking tour guide throughout the trip
        All taxes and service charges`
      },
      'Italy': {
        country: 'Italy',
        city: 'Rome',
        latitude: 41.9028,
        longitude: 12.4964,
        price: 1200,
        imageUrl: '/',
        days: 8,
        description: 'Discover the enchanting beauty, rich history, and delectable cuisine of Italy. From the romantic canals of Venice to the ancient ruins of Rome, this journey promises an unforgettable Italian adventure.',
        tripRoute: 'Belgrade (Serbia) -> Venice (Italy) -> Florence (Italy) -> Rome (Italy) -> Belgrade (Serbia)',
        travelPlans: [],
        includedIn: `Roundtrip flights from Belgrade to Italy
        Accommodation in centrally located hotels
        Daily breakfast
        Guided tours and entrance fees to attractions mentioned in the itinerary
        Transportation between cities (train or coach)
        English-speaking tour guide throughout the trip
        All taxes and service charges`
      },
      'Spain': {
        country: 'Spain',
        city: 'Madrid',
        latitude: 40.4168,
        longitude: -3.7038,
        price: 1400,
        imageUrl: '/',
        days: 12,
        description: 'Immerse yourself in the vibrant culture, stunning landscapes, and rich history of Spain. From the bustling streets of Madrid to the beautiful beaches of Barcelona, this journey offers a diverse and unforgettable Spanish experience.',
        tripRoute: 'Belgrade (Serbia) -> Madrid (Spain) -> Seville (Spain) -> Granada (Spain) -> Valencia (Spain) -> Barcelona (Spain) -> Belgrade (Serbia)',
        travelPlans: [],
        includedIn: `Roundtrip flights from Belgrade to Spain
        Accommodation in centrally located hotels
        Daily breakfast
        Guided tours and entrance fees to attractions mentioned in the itinerary
        Transportation between cities (train or coach)
        English-speaking tour guide throughout the trip
        All taxes and service charges`
      },
      'Croatia': {
        country: 'Croatia',
        city: 'Zagreb',
        latitude: 45.8150,
        longitude: 15.9819,
        price: 1000,
        imageUrl: '/',
        days: 7,
        description: 'Experience the beauty, history, and culture of Croatia. From the medieval streets of Dubrovnik to the stunning waterfalls of Plitvice Lakes National Park, this journey offers a memorable exploration of Croatia\'s diverse landscapes and heritage.',
        tripRoute: 'Belgrade (Serbia) -> Zagreb (Croatia) -> Plitvice Lakes National Park (Croatia) -> Split (Croatia) -> Dubrovnik (Croatia) -> Belgrade (Serbia)',
        travelPlans: [],
        includedIn: `Roundtrip flights from Belgrade to Croatia
        Accommodation in centrally located hotels
        Daily breakfast
        Guided tours and entrance fees to attractions mentioned in the itinerary
        Transportation between cities (train or coach)
        English-speaking tour guide throughout the trip
        All taxes and service charges`
      },
      'Germany': {
        country: 'Germany',
        city: 'Berlin',
        latitude: 52.5200,
        longitude: 13.4050,
        price: 1300,
        imageUrl: '/',
        days: 9,
        description: 'Explore the rich history, vibrant culture, and picturesque landscapes of Germany. From the bustling streets of Berlin to the fairytale castles of Bavaria, this journey offers a diverse and unforgettable German experience.',
        tripRoute: 'Belgrade (Serbia) -> Berlin (Germany) -> Dresden (Germany) -> Nuremberg (Germany) -> Munich (Germany) -> Belgrade (Serbia)',
        travelPlans: [],
        includedIn: `Roundtrip flights from Belgrade to Germany
        Accommodation in centrally located hotels
        Daily breakfast
        Guided tours and entrance fees to attractions mentioned in the itinerary
        Transportation between cities (train or coach)
        English-speaking tour guide throughout the trip
        All taxes and service charges`
      },
      'Greece': {
        country: 'Greece',
        city: 'Athens',
        latitude: 37.9838,
        longitude: 23.7275,
        price: 1500,
        imageUrl: '/',
        days: 10,
        description: 'Embark on a journey to discover the ancient history, stunning landscapes, and vibrant culture of Greece. From the iconic landmarks of Athens to the breathtaking islands of Santorini and Mykonos, this trip promises an unforgettable Greek adventure.',
        tripRoute: 'Belgrade (Serbia) -> Athens (Greece) -> Santorini (Greece) -> Mykonos (Greece) -> Athens (Greece) -> Belgrade (Serbia)',
        travelPlans: [],
        includedIn: `Roundtrip flights from Belgrade to Greece
        Accommodation in centrally located hotels
        Daily breakfast
        Ferry tickets between islands
        Guided tours and entrance fees to attractions mentioned in the itinerary
        Transportation between cities (ferry or domestic flights)
        English-speaking tour guide throughout the trip
        All taxes and service charges`
      },
      'Netherlands': {
        country: 'Netherlands',
        city: 'Amsterdam',
        latitude: 52.3676,
        longitude: 4.9041,
        price: 1100,
        imageUrl: '/',
        days: 8,
        description: 'Explore the charming canals, historic landmarks, and vibrant culture of the Netherlands. From the picturesque streets of Amsterdam to the iconic windmills of the countryside, this journey offers a memorable Dutch experience.',
        tripRoute: 'Belgrade (Serbia) -> Amsterdam (Netherlands) -> Rotterdam (Netherlands) -> The Hague (Netherlands) -> Utrecht (Netherlands) -> Belgrade (Serbia)',
        travelPlans: [],
        includedIn: `Roundtrip flights from Belgrade to the Netherlands
        Accommodation in centrally located hotels
        Daily breakfast
        Guided tours and entrance fees to attractions mentioned in the itinerary
        Transportation between cities (train or coach)
        English-speaking tour guide throughout the trip
        All taxes and service charges`
      },
      'Austria': {
        country: 'Austria',
        city: 'Vienna',
        latitude: 48.210033,
        longitude: 16.363449,
        price: 2000,
        imageUrl: '/',
        days: 10,
        description: 'Explore the breathtaking landscapes, natural wonders, and unique culture of Iceland. From the stunning waterfalls and geysers to the captivating Northern Lights, this journey promises an unforgettable Icelandic adventure.',
        tripRoute: 'Belgrade (Serbia) -> Reykjavik (Iceland) -> Golden Circle (Iceland) -> South Coast (Iceland) -> Jökulsárlón Glacier Lagoon (Iceland) -> Reykjavik (Iceland) -> Belgrade (Serbia)',
        travelPlans: [],
        includedIn: `Roundtrip flights from Belgrade to Iceland
        Accommodation in centrally located hotels and guesthouses
        Daily breakfast
        Guided tours to Golden Circle and South Coast
        Entrance fees to attractions mentioned in the itinerary
        Transportation between locations (coach or minibus)
        English-speaking tour guide for guided tours
        All taxes and service charges`
      },
      'Russia': {
        country: 'Russia',
        city: 'Moscow',
        latitude: 55.7558,
        longitude: 37.6176,
        price: 1800,
        imageUrl: '/',
        days: 12,
        description: 'Delve into the rich history, magnificent architecture, and cultural treasures of Russia. From the grandeur of Moscow to the imperial splendor of St. Petersburg, this journey promises an unforgettable Russian experience.',
        tripRoute: 'Belgrade (Serbia) -> Moscow (Russia) -> St. Petersburg (Russia) -> Veliky Novgorod (Russia) -> Moscow (Russia) -> Belgrade (Serbia)',
        travelPlans: [],
        includedIn: `Roundtrip flights from Belgrade to Russia
        Accommodation in centrally located hotels
        Daily breakfast
        Guided tours and entrance fees to attractions mentioned in the itinerary
        Transportation between cities (train or domestic flights)
        English-speaking tour guide throughout the trip
        All taxes and service charges`
      },
      'Switzerland': {
        country: 'Switzerland',
        city: 'Bern',
        latitude: 46.9480,
        longitude: 7.4474,
        price: 1600,
        imageUrl: '/',
        days: 10,
        description: 'Immerse yourself in the stunning alpine landscapes, charming villages, and cultural treasures of Switzerland. From the majestic peaks of the Swiss Alps to the serene lakeside towns, this journey promises an unforgettable Swiss experience.',
        tripRoute: 'Belgrade (Serbia) -> Zurich (Switzerland) -> Lucerne (Switzerland) -> Interlaken (Switzerland) -> Zermatt (Switzerland) -> Geneva (Switzerland) -> Belgrade (Serbia)',
        travelPlans: [],
        includedIn: `Roundtrip flights from Belgrade to Switzerland
        Accommodation in centrally located hotels
        Daily breakfast
        Transportation between cities (train or coach)
        Swiss Travel Pass for unlimited travel on trains, buses, and boats
        English-speaking tour guide for guided tours
        All taxes and service charges`
      },
      'Norway': {
        country: 'Norway',
        city: 'Oslo',
        latitude: 59.9139,
        longitude: 10.7522,
        price: 1800,
        imageUrl: '/',
        days: 11,
        description: 'Embark on a journey to explore the majestic fjords, scenic landscapes, and vibrant cities of Norway. From the iconic sights of Oslo to the breathtaking natural beauty of the fjords, this trip promises an unforgettable Norwegian adventure.',
        tripRoute: 'Belgrade (Serbia) -> Oslo (Norway) -> Bergen (Norway) -> Flam (Norway) -> Geiranger (Norway) -> Oslo (Norway) -> Belgrade (Serbia)',
        travelPlans: [],
        includedIn: `Roundtrip flights from Belgrade to Norway
        Accommodation in centrally located hotels
        Daily breakfast
        Guided tours and entrance fees to attractions mentioned in the itinerary
        Transportation between cities (train, ferry, or coach)
        English-speaking tour guide throughout the trip
        All taxes and service charges`
      },
      'Serbia': {
        country: 'Serbia',
        city: 'Belgrade',
        latitude: 44.7866,
        longitude: 20.4489,
        price: 800,
        imageUrl: '/',
        days: 7,
        description: 'Discover the rich history, cultural heritage, and natural beauty of Serbia. From the vibrant capital city of Belgrade to the serene landscapes of rural Serbia, this journey promises an authentic Serbian experience.',
        tripRoute: 'Belgrade (Serbia) -> Novi Sad (Serbia) -> Niš (Serbia) -> Užice (Serbia) -> Kragujevac (Serbia) -> Belgrade (Serbia)',
        travelPlans: [],
        includedIn: `Accommodation in centrally located hotels or guesthouses
        Daily breakfast
        Guided tours and entrance fees to attractions mentioned in the itinerary
        Transportation between cities (train or coach)
        English-speaking tour guide throughout the trip
        All taxes and service charges`
      }
    },
    'Africa': {
      'Egypt': {
        country: 'Egypt',
        city: 'Cairo',
        latitude: 30.033333,
        longitude: 31.233334,
        price: 1500,
        imageUrl: '/',
        days: 10,
        description: 'Immerse yourself in the ancient wonders, vibrant culture, and stunning landscapes of Egypt. From the iconic pyramids of Giza to the bustling streets of Cairo and the tranquil waters of the Nile, this journey promises an unforgettable Egyptian adventure.',
        tripRoute: 'Belgrade (Serbia) -> Cairo (Egypt) -> Luxor (Egypt) -> Aswan (Egypt) -> Nile River Cruise -> Cairo (Egypt) -> Belgrade (Serbia)',
        travelPlans: [],
        includedIn: `Roundtrip flights from Belgrade to Egypt
        Accommodation in centrally located hotels and Nile River cruise ship
        Daily breakfast, lunch, and dinner during the Nile cruise
        Guided tours and entrance fees to attractions mentioned in the itinerary
        Transportation between cities (domestic flights and Nile River cruise)
        English-speaking tour guide throughout the trip
        All taxes and service charges`
      },
      'Kenya': {
        country: 'Kenya',
        city: 'Nairobi',
        latitude: -1.2864,
        longitude: 36.8172,
        price: 2000,
        imageUrl: '/',
        days: 12,
        description: 'Experience the diverse landscapes, incredible wildlife, and rich culture of Kenya. From the vast savannahs of the Maasai Mara to the pristine beaches of the Kenyan coast, this journey promises an unforgettable Kenyan adventure.',
        tripRoute: 'Belgrade (Serbia) -> Nairobi (Kenya) -> Maasai Mara National Reserve (Kenya) -> Lake Nakuru National Park (Kenya) -> Amboseli National Park (Kenya) -> Nairobi (Kenya) -> Mombasa (Kenya) -> Belgrade (Serbia)',
        travelPlans: [],
        includedIn: `Roundtrip flights from Belgrade to Kenya
        Accommodation in safari lodges and beach resorts
        Daily breakfast, lunch, and dinner during the safari portion
        Safari activities including game drives and cultural experiences
        Transportation between destinations (domestic flights and ground transfers)
        English-speaking safari guide and local guides
        All park fees and entrance fees
        All taxes and service charges`
      },
      'Madagascar': {
        country: 'Madagascar',
        city: 'Antananarivo',
        latitude: -18.8792,
        longitude: 47.5079,
        price: 2500,
        imageUrl: '/',
        days: 14,
        description: 'Explore the unique biodiversity, stunning landscapes, and fascinating culture of Madagascar. From the lush rainforests of Andasibe to the otherworldly rock formations of Tsingy de Bemaraha, this journey promises an unforgettable Madagascan adventure.',
        tripRoute: 'Belgrade (Serbia) -> Antananarivo (Madagascar) -> Andasibe-Mantadia National Park (Madagascar) -> Morondava (Madagascar) -> Tsingy de Bemaraha National Park (Madagascar) -> Avenue of the Baobabs (Madagascar) -> Antananarivo (Madagascar) -> Belgrade (Serbia)',
        travelPlans: [],
        includedIn: `Roundtrip flights from Belgrade to Madagascar
        Accommodation in eco-lodges and hotels
        Daily breakfast, lunch, and dinner
        Guided tours and entrance fees to national parks and attractions
        Transportation between destinations (domestic flights and ground transfers)
        English-speaking local guides
        All taxes and service charges`
      },
      'Morocco': {
        country: 'Morocco',
        city: 'Rabat',
        latitude: 34.020882,
        longitude: -6.841650,
        price: 1700,
        imageUrl: '/',
        days: 10,
        description: 'Immerse yourself in the vibrant colors, rich history, and exotic culture of Morocco. From the bustling markets of Marrakech to the stunning landscapes of the Sahara Desert, this journey promises an unforgettable Moroccan adventure.',
        tripRoute: 'Belgrade (Serbia) -> Marrakech (Morocco) -> Essaouira (Morocco) -> Fes (Morocco) -> Sahara Desert (Morocco) -> Marrakech (Morocco) -> Belgrade (Serbia)',
        travelPlans: [],
        includedIn: `Roundtrip flights from Belgrade to Morocco
        Accommodation in riads and desert camps
        Daily breakfast and dinner
        Guided tours and entrance fees to attractions mentioned in the itinerary
        Transportation between cities (coach or domestic flights)
        English-speaking tour guide throughout the trip
        All taxes and service charges`
      },
      'Namibia': {
        country: 'Namibia',
        city: 'Windhoek',
        latitude: -22.9576,
        longitude: 18.4904,
        price: 2500,
        imageUrl: '/',
        days: 14,
        description: 'Discover the rugged beauty, diverse wildlife, and vast landscapes of Namibia. From the towering sand dunes of Sossusvlei to the wildlife-rich plains of Etosha National Park, this journey promises an unforgettable Namibian adventure.',
        tripRoute: 'Belgrade (Serbia) -> Windhoek (Namibia) -> Sossusvlei (Namibia) -> Swakopmund (Namibia) -> Damaraland (Namibia) -> Etosha National Park (Namibia) -> Windhoek (Namibia) -> Belgrade (Serbia)',
        travelPlans: [],
        includedIn: `Roundtrip flights from Belgrade to Namibia
        Accommodation in lodges and desert camps
        Daily breakfast, lunch, and dinner
        Guided tours and entrance fees to national parks and attractions
        Transportation between destinations (domestic flights and ground transfers)
        English-speaking local guides
        All taxes and service charges`
      },
      'South Africa': {
        country: 'South Africa',
        city: 'Cape Town',
        latitude: -33.918861,
        longitude: 18.423300,
        price: 2800,
        imageUrl: '/',
        days: 14,
        description: 'Explore the diverse landscapes, rich wildlife, and vibrant culture of South Africa. From the iconic Table Mountain in Cape Town to the thrilling safari experiences in Kruger National Park, this journey promises an unforgettable South African adventure.',
        tripRoute: 'Belgrade (Serbia) -> Cape Town (South Africa) -> Garden Route (South Africa) -> Knysna (South Africa) -> Port Elizabeth (South Africa) -> Johannesburg (South Africa) -> Kruger National Park (South Africa) -> Johannesburg (South Africa) -> Belgrade (Serbia)',
        travelPlans: [],
        includedIn: `Roundtrip flights from Belgrade to South Africa
        Accommodation in hotels and lodges
        Daily breakfast and selected meals during the safari
        Guided tours and entrance fees to attractions mentioned in the itinerary
        Transportation between cities (domestic flights and ground transfers)
        English-speaking tour guide throughout the trip
        All taxes and service charges`
      },
      'Zanzibar': {
        country: 'Zanzibar',
        city: 'Zanzibar City',
        latitude: -6.1659,
        longitude: 39.2026,
        price: 2000,
        imageUrl: '/',
        days: 8,
        description: 'Relax on the pristine beaches, explore the rich culture, and indulge in the exotic flavors of Zanzibar. From the historic Stone Town to the idyllic beaches of Nungwi and Kendwa, this journey promises an unforgettable Zanzibari escape.',
        tripRoute: 'Belgrade (Serbia) -> Zanzibar (Tanzania) -> Stone Town (Zanzibar) -> Nungwi (Zanzibar) -> Kendwa (Zanzibar) -> Stone Town (Zanzibar) -> Belgrade (Serbia)',
        travelPlans: [],
        includedIn: `Roundtrip flights from Belgrade to Zanzibar
        Accommodation in beach resorts and hotels
        Daily breakfast and selected meals
        Guided tours and entrance fees to attractions mentioned in the itinerary
        Transportation between locations (private transfers)
        English-speaking local guides
        All taxes and service charges
        `
      },
      'Uganda': {
        country: 'Uganda',
        city: 'Kampala',
        latitude: 0.3476,
        longitude: 32.5825,
        price: 3000,
        imageUrl: '/',
        days: 12,
        description: 'Embark on a safari adventure and trek through lush jungles to encounter gorillas and chimpanzees in their natural habitat in Uganda. From the breathtaking landscapes of Bwindi Impenetrable National Park to the tranquil waters of the Nile River, this journey promises an unforgettable Ugandan experience.',
        tripRoute: 'Belgrade (Serbia) -> Entebbe (Uganda) -> Bwindi Impenetrable National Park (Uganda) -> Queen Elizabeth National Park (Uganda) -> Kibale National Park (Uganda) -> Murchison Falls National Park (Uganda) -> Kampala (Uganda) -> Entebbe (Uganda) -> Belgrade (Serbia)',
        travelPlans: [],
        includedIn: `Roundtrip flights from Belgrade to Uganda
        Accommodation in lodges and tented camps
        Daily breakfast, lunch, and dinner
        Gorilla and chimpanzee trekking permits
        Safari activities with experienced guides
        Transportation between locations (domestic flights and ground transfers)
        English-speaking local guides
        All taxes and service charges`
      }
    },
    'Asia': {
      'Hong Kong': {
        country: 'China',
        city: 'Hong Kong',
        latitude: 22.302711,
        longitude: 114.177216,
        price: 2500,
        imageUrl: '/',
        days: 14,
        description: 'Explore the ancient landmarks, vibrant cities, and breathtaking landscapes of China. From the iconic Great Wall and Forbidden City in Beijing to the picturesque karst mountains of Guilin and the modern metropolis of Shanghai, this journey promises an unforgettable Chinese adventure.',
        tripRoute: 'Belgrade (Serbia) -> Beijing (China) -> Xi\'an (China) -> Guilin (China) -> Yangshuo (China) -> Shanghai (China) -> Suzhou (China) -> Hangzhou (China) -> Beijing (China) -> Belgrade (Serbia)',
        travelPlans: [],
        includedIn: `Roundtrip flights from Belgrade to China
        Accommodation in centrally located hotels
        Daily breakfast and selected meals
        Guided tours and entrance fees to attractions mentioned in the itinerary
        Transportation between cities (domestic flights and high-speed trains)
        English-speaking tour guide throughout the trip
        All taxes and service charges`
      },
      'China': {
        country: 'China',
        city: 'Beijing',
        latitude: 39.9042,
        longitude: 116.4074,
        price: 1800,
        imageUrl: '/',
        days: 7,
        description: 'Experience the vibrant fusion of Eastern and Western cultures in the dazzling metropolis of Hong Kong. From towering skyscrapers and bustling street markets to tranquil temples and scenic harbors, this itinerary offers an exciting exploration of Hong Kong\'s dynamic cityscape.',
        tripRoute: 'Belgrade (Serbia) -> Hong Kong (China) -> Lantau Island (Hong Kong) -> Kowloon (Hong Kong) -> Hong Kong Island (Hong Kong) -> Belgrade (Serbia)',
        travelPlans: [],
        includedIn: `Roundtrip flights from Belgrade to Hong Kong
        Accommodation in centrally located hotels
        Daily breakfast
        Guided tours and entrance fees to attractions mentioned in the itinerary
        Transportation between locations (MTR, ferry)
        English-speaking tour guide for guided tours
        All taxes and service charges`
      },
      'India': {
        country: 'India',
        city: 'New Delhi',
        latitude: 20.5937,
        longitude: 78.9629,
        price: 2200,
        imageUrl: '/',
        days: 12,
        description: 'Discover the vibrant culture, rich history, and diverse landscapes of India. From the majestic Taj Mahal in Agra to the bustling streets of Delhi and the serene backwaters of Kerala, this journey promises an unforgettable Indian adventure.',
        tripRoute: 'Belgrade (Serbia) -> Delhi (India) -> Agra (India) -> Jaipur (India) -> Udaipur (India) -> Kochi (India) -> Alleppey (India) -> Kochi (India) -> Belgrade (Serbia)',
        travelPlans: [],
        includedIn: `Roundtrip flights from Belgrade to India
        Accommodation in centrally located hotels and houseboats
        Daily breakfast and selected meals
        Guided tours and entrance fees to attractions mentioned in the itinerary
        Transportation between cities (domestic flights and private transfers)
        English-speaking tour guide throughout the trip
        All taxes and service charges`
      },
      'Iran': {
        country: 'Iran',
        city: 'Tehran',
        latitude: 32.4279,
        longitude: 53.6880,
        price: 2000,
        imageUrl: '/',
        days: 10,
        description: 'Discover the rich history, stunning architecture, and vibrant culture of Iran. From the ancient ruins of Persepolis to the beautiful mosques of Isfahan and the bustling bazaars of Tehran, this journey promises an unforgettable Iranian adventure.',
        tripRoute: 'Belgrade (Serbia) -> Tehran (Iran) -> Isfahan (Iran) -> Shiraz (Iran) -> Yazd (Iran) -> Tehran (Iran) -> Belgrade (Serbia)',
        travelPlans: [],
        includedIn: `Roundtrip flights from Belgrade to Iran
        Accommodation in centrally located hotels
        Daily breakfast and selected meals
        Guided tours and entrance fees to attractions mentioned in the itinerary
        Transportation between cities (domestic flights and private transfers)
        English-speaking tour guide throughout the trip
        All taxes and service charges`
      },
      'Sri Lanka': {
        country: 'Sri Lanka',
        city: 'Colombo',
        latitude: 6.927079,
        longitude: 79.861244,
        price: 1900,
        imageUrl: '/',
        days: 9,
        description: 'Embark on a journey through the tropical paradise of Sri Lanka, where ancient ruins, lush tea plantations, and pristine beaches await. From the cultural treasures of Kandy and Sigiriya to the scenic train ride through the hill country and the relaxing shores of Bentota, this itinerary offers an immersive Sri Lankan experience.',
        tripRoute: 'Belgrade (Serbia) -> Colombo (Sri Lanka) -> Kandy (Sri Lanka) -> Sigiriya (Sri Lanka) -> Ella (Sri Lanka) -> Bentota (Sri Lanka) -> Colombo (Sri Lanka) -> Belgrade (Serbia)',
        travelPlans: [],
        includedIn: `Roundtrip flights from Belgrade to Sri Lanka
        Accommodation in centrally located hotels and beach resorts
        Daily breakfast and selected meals
        Guided tours and entrance fees to attractions mentioned in the itinerary
        Transportation between cities (private transfers and train)
        English-speaking tour guide throughout the trip
        All taxes and service charges`
      },
      'Japan': {
        country: 'Japan',
        city: 'Tokyo',
        latitude: 35.6895,
        longitude: 139.6917,
        price: 3000,
        imageUrl: '/',
        days: 14,
        description: 'Immerse yourself in the unique blend of tradition and modernity in Japan. From the bustling streets of Tokyo to the serene temples of Kyoto and the scenic landscapes of Hakone, this journey promises an unforgettable Japanese adventure.',
        tripRoute: 'Belgrade (Serbia) -> Tokyo (Japan) -> Hakone (Japan) -> Kyoto (Japan) -> Nara (Japan) -> Osaka (Japan) -> Hiroshima (Japan) -> Miyajima (Japan) -> Tokyo (Japan) -> Belgrade (Serbia)',
        travelPlans: [],
        includedIn: `Roundtrip flights from Belgrade to Japan
        Accommodation in centrally located hotels
        Daily breakfast and selected meals
        Guided tours and entrance fees to attractions mentioned in the itinerary
        Transportation between cities (bullet trains and domestic flights)
        English-speaking tour guide throughout the trip
        All taxes and service charges`
      },
      'Iraq': {
        country: 'Iraq',
        city: 'Baghdad',
        latitude: 33.3152,
        longitude: 44.3661,
        price: 2500,
        imageUrl: '/',
        days: 10,
        description: 'Explore the ancient ruins, stunning desert landscapes, and vibrant culture of Iraq. From the iconic sites to the breathtaking views, this journey promises an unforgettable Iraqi adventure.',
        tripRoute: 'Belgrade (Serbia) -> Baghdad (Iraq) -> Babylon (Iraq) -> Erbil (Iraq) -> Mosul (Iraq) -> Kirkuk (Iraq) -> Baghdad (Iraq) -> Belgrade (Serbia)',
        travelPlans: [],
        includedIn: `Roundtrip flights from Belgrade to Iraq
        Accommodation in centrally located hotels
        Daily breakfast and selected meals
        Guided tours and entrance fees to attractions mentioned in the itinerary
        Transportation between cities (private transfers)
        English-speaking tour guide throughout the trip
        All taxes and service charges`
      },    
      'Nepal': {
        country: 'Nepal',
        city: 'Kathmandu',
        latitude: 28.3949,
        longitude: 84.1240,
        price: 1800,
        imageUrl: '/',
        days: 12,
        description: 'Immerse yourself in the breathtaking landscapes, rich culture, and spiritual heritage of Nepal. From the majestic Himalayas to the ancient temples of Kathmandu and the tranquil lakes of Pokhara, this journey promises an unforgettable Nepalese adventure.',
        tripRoute: 'Belgrade (Serbia) -> Kathmandu (Nepal) -> Bhaktapur (Nepal) -> Pokhara (Nepal) -> Chitwan National Park (Nepal) -> Kathmandu (Nepal) -> Belgrade (Serbia)',
        travelPlans: [],
        includedIn: `Roundtrip flights from Belgrade to Nepal
        Accommodation in centrally located hotels and lodges
        Daily breakfast and selected meals
        Guided tours and entrance fees to attractions mentioned in the itinerary
        Transportation between cities (private transfers)
        English-speaking tour guide throughout the trip
        All taxes and service charges`
      },
      'South Korea': {
        country: 'South Korea',
        city: 'Seoul',
        latitude: 37.5665,
        longitude: 126.9780,
        price: 2200,
        imageUrl: '/',
        days: 10,
        description: 'Explore the vibrant cities, ancient palaces, and scenic landscapes of South Korea. From the bustling streets of Seoul to the historic sites of Gyeongju and the stunning beaches of Busan, this journey promises an unforgettable Korean adventure',
        tripRoute: 'Belgrade (Serbia) -> Seoul (South Korea) -> Gyeongju (South Korea) -> Busan (South Korea) -> Seoul (South Korea) -> Belgrade (Serbia)',
        travelPlans: [],
        includedIn: `Roundtrip flights from Belgrade to South Korea
        Accommodation in centrally located hotels
        Daily breakfast and selected meals
        Guided tours and entrance fees to attractions mentioned in the itinerary
        Transportation between cities (high-speed trains or private transfers)
        English-speaking tour guide throughout the trip
        All taxes and service charges`
      },
      'Thailand': {
        country: 'Thailand',
        city: 'Bangkok',
        latitude: 13.7563,
        longitude: 100.5018,
        price: 2500,
        imageUrl: '/',
        days: 14,
        description: 'Immerse yourself in the vibrant culture, stunning beaches, and rich history of Thailand. From the bustling streets of Bangkok to the tranquil islands of Phuket and Krabi, this journey promises an unforgettable Thai adventure.',
        tripRoute: 'Belgrade (Serbia) -> Bangkok (Thailand) -> Ayutthaya (Thailand) -> Chiang Mai (Thailand) -> Phuket (Thailand) -> Krabi (Thailand) -> Bangkok (Thailand) -> Belgrade (Serbia)',
        travelPlans: [],
        includedIn: `Roundtrip flights from Belgrade to Thailand
        Accommodation in centrally located hotels and beach resorts
        Daily breakfast and selected meals
        Guided tours and entrance fees to attractions mentioned in the itinerary
        Transportation between cities (domestic flights and private transfers)
        English-speaking tour guide throughout the trip
        All taxes and service charges`
      },
      'Mongolia': {
        country: 'Mongolia',
        city: 'Ulaanbaatar',
        latitude: 47.921230,
        longitude: 106.918556,
        price: 2200,
        imageUrl: '/',
        days: 10,
        description: 'Embark on an extraordinary journey through the rugged landscapes, nomadic culture, and ancient history of Mongolia. From the vast steppes and towering mountains to the nomadic yurts and historic monasteries, this itinerary promises an unforgettable Mongolian adventure.',
        tripRoute: 'Belgrade (Serbia) -> Ulaanbaatar (Mongolia) -> Terelj National Park (Mongolia) -> Kharkhorin (Mongolia) -> Orkhon Valley (Mongolia) -> Ulaanbaatar (Mongolia) -> Belgrade (Serbia)',
        travelPlans: [],
        includedIn: `Roundtrip flights from Belgrade to Mongolia
        Accommodation in traditional ger camps and guesthouses
        Daily breakfast, lunch, and dinner
        Guided tours and entrance fees to attractions mentioned in the itinerary
        Transportation between locations (private transfers and minivan)
        English-speaking tour guide throughout the trip
        All taxes and service charges`
      },
      'UAE': {
        country: 'UAE',
        city: 'Abu Dhabi',
        latitude: 23.4241,
        longitude: 53.8478,
        price: 2800,
        imageUrl: '/',
        days: 10,
        description: 'Experience the luxury, modernity, and cultural richness of the United Arab Emirates. From the dazzling skyscrapers of Dubai to the cultural heritage of Abu Dhabi and the serene desert landscapes of the Liwa Oasis, this journey promises an unforgettable Emirati adventure.',
        tripRoute: 'Belgrade (Serbia) -> Dubai (UAE) -> Abu Dhabi (UAE) -> Liwa Oasis (UAE) -> Dubai (UAE) -> Belgrade (Serbia)',
        travelPlans: [],
        includedIn: `Roundtrip flights from Belgrade to the UAE
        Accommodation in luxury hotels and desert resorts
        Daily breakfast and selected meals
        Guided tours and entrance fees to attractions mentioned in the itinerary
        Desert safari with dinner and entertainment
        Transportation between cities (private transfers)
        English-speaking tour guide throughout the trip
        All taxes and service charges`
      },
      'Vietnam': {
        country: 'Vietnam',
        city: 'Hanoi',
        latitude: 14.0583,
        longitude: 108.2772,
        price: 2000,
        imageUrl: '/',
        days: 12,
        description: 'Discover the rich history, stunning landscapes, and vibrant culture of Vietnam. From the bustling streets of Hanoi to the picturesque landscapes of Halong Bay and the ancient town of Hoi An, this journey promises an unforgettable Vietnamese adventure.',
        tripRoute: 'Belgrade (Serbia) -> Hanoi (Vietnam) -> Halong Bay (Vietnam) -> Hanoi (Vietnam) -> Hue (Vietnam) -> Hoi An (Vietnam) -> Ho Chi Minh City (Vietnam) -> Mekong Delta (Vietnam) -> Ho Chi Minh City (Vietnam) -> Belgrade (Serbia)',
        travelPlans: [],
        includedIn: `Roundtrip flights from Belgrade to Vietnam
        Accommodation in centrally located hotels and cruises
        Daily breakfast and selected meals
        Guided tours and entrance fees to attractions mentioned in the itinerary
        Halong Bay cruise with overnight stay
        Transportation between cities (domestic flights and private transfers)
        English-speaking tour guide throughout the trip
        All taxes and service charges`
      }
    },
    'Oceania': {
      'Papua New Guinea': {
        country: 'Papua New Guinea',
        city: 'Port Moresby',
        latitude: -9.47723,
        longitude: 147.15089,
        price: 3500,
        imageUrl: '/',
        days: 12,
        description: 'Embark on an adventure to discover the vibrant culture, pristine nature, and unique traditions of Papua New Guinea. From trekking in the highlands to immersing yourself in local villages and witnessing colorful tribal festivals, this trip promises an unforgettable journey into the heart of Melanesia.',
        tripRoute: 'Belgrade (Serbia) -> Port Moresby (Papua New Guinea) -> Mount Hagen (Papua New Guinea) -> Goroka (Papua New Guinea) -> Tari (Papua New Guinea) -> Mount Hagen (Papua New Guinea) -> Port Moresby (Papua New Guinea) -> Belgrade (Serbia)',
        travelPlans: [],
        includedIn: `Roundtrip flights from Belgrade to Port Moresby
        Domestic flights within Papua New Guinea
        Accommodation in local guesthouses or lodges
        Daily breakfast, lunch, and dinner
        Guided trekking and cultural tours with experienced guides
        Entrance fees to cultural events and festivals
        Transportation between cities and to trekking sites
        English-speaking tour leader and local guides
        All taxes and service charges`
      },
      'Uluru': {
        country: 'Australia',
        city: 'Uluru',
        latitude: -25.3444,
        longitude: 131.0369,
        price: 2500,
        imageUrl: '/',
        days: 5,
        description: 'Explore the iconic red rock formations and sacred Aboriginal sites of Uluru and Kata Tjuta in the heart of Australia\'s Red Centre. Witness breathtaking sunrises and sunsets over the desert landscape, and learn about the rich cultural significance of this UNESCO World Heritage Site.',
        tripRoute: 'Belgrade (Serbia) -> Alice Springs (Australia) -> Uluru (Australia) -> Kata Tjuta (Australia) -> Alice Springs (Australia) -> Belgrade (Serbia)',
        travelPlans: [],
        includedIn: `Roundtrip flights from Belgrade to Alice Springs
        Accommodation in a resort or lodge near Uluru
        Daily breakfast and selected meals
        Guided tours and entrance fees to Uluru-Kata Tjuta National Park
        Transportation between Alice Springs and Uluru
        English-speaking guide
        All taxes and service charges`
      },
      'Solomon Islands': {
        country: 'Solomon Islands',
        city: 'Honiara',
        latitude: -9.6457,
        longitude: 160.1562,
        price: 3000,
        imageUrl: '/',
        days: 10,
        description: 'Venture to the Solomon Islands, a hidden gem in the South Pacific known for its pristine beaches, vibrant coral reefs, and rich cultural heritage. Explore remote islands, dive among colorful marine life, and immerse yourself in the warm hospitality of the Melanesian people.',
        tripRoute: 'Belgrade (Serbia) -> Honiara (Solomon Islands) -> Guadalcanal (Solomon Islands) -> Western Province (Solomon Islands) -> Honiara (Solomon Islands) -> Belgrade (Serbia)',
        travelPlans: [],
        includedIn: `Roundtrip flights from Belgrade to Honiara
        Domestic flights within the Solomon Islands
        Accommodation in beachfront resorts or eco-lodges
        Daily breakfast, lunch, and dinner
        Guided tours and activities (diving, snorkeling, cultural tours)
        Transportation between islands
        English-speaking guide
        All taxes and service charges`
      },
      'Australia': {
        country: 'Australia',
        city: 'Canberra',
        latitude: -35.282001,
        longitude: 149.128998,
        price: 3500,
        imageUrl: '/',
        days: 14,
        description: 'Explore the diverse landscapes, vibrant cities, and unique wildlife of Australia. From the iconic landmarks of Sydney and Melbourne to the ancient wonders of the Outback and the pristine beaches of the Whitsunday Islands, this journey promises an unforgettable Australian adventure.',
        tripRoute: 'Belgrade (Serbia) -> Sydney (Australia) -> Cairns (Australia) -> Great Barrier Reef (Australia) -> Ayers Rock (Australia) -> Melbourne (Australia) -> Whitsunday Islands (Australia) -> Sydney (Australia) -> Belgrade (Serbia)',
        travelPlans: [],
        includedIn: `Roundtrip flights from Belgrade to Australia
        Domestic flights within Australia
        Accommodation in centrally located hotels and resorts
        Daily breakfast and selected meals
        Guided tours and entrance fees to attractions mentioned in the itinerary
        Transportation between cities
        English-speaking guide
        All taxes and service charges`
      },
      'New Zealand': {
        country: 'New Zealand',
        city: 'Wellington',
        latitude: -41.2865,
        longitude: 174.7762,
        price: 4000,
        imageUrl: '/',
        days: 14,
        description: 'Immerse yourself in the breathtaking landscapes, Maori culture, and outdoor adventures of New Zealand. From the snow-capped peaks of the Southern Alps to the geothermal wonders of Rotorua and the pristine fjords of Milford Sound, this journey promises an unforgettable Kiwi adventure.',
        tripRoute: 'Belgrade (Serbia) -> Auckland (New Zealand) -> Rotorua (New Zealand) -> Taupo (New Zealand) -> Wellington (New Zealand) -> Christchurch (New Zealand) -> Queenstown (New Zealand) -> Milford Sound (New Zealand) -> Queenstown (New Zealand) -> Auckland (New Zealand) -> Belgrade (Serbia)',
        travelPlans: [],
        includedIn: `Roundtrip flights from Belgrade to New Zealand
        Domestic flights within New Zealand
        Accommodation in centrally located hotels and lodges
        Daily breakfast and selected meals
        Guided tours and entrance fees to attractions mentioned in the itinerary
        Transportation between cities
        English-speaking guide
        All taxes and service charges	`
      },
      'Great Barrier Reef': {
        country: 'Australia',
        city: 'Cairns',
        latitude: -18.156290,
        longitude: 147.485962,
        price: 3000,
        imageUrl: '/',
        days: 7,
        description: 'Embark on a journey to explore the mesmerizing beauty and marine biodiversity of the Great Barrier Reef. From snorkeling among vibrant coral gardens to diving alongside majestic marine creatures, this trip promises an unforgettable aquatic adventure.',
        tripRoute: 'Belgrade (Serbia) -> Cairns (Australia) -> Great Barrier Reef (Australia) -> Cairns (Australia) -> Belgrade (Serbia)',
        travelPlans: [],
        includedIn: `Roundtrip flights from Belgrade to Cairns
        Accommodation in a resort or liveaboard vessel on the Great Barrier Reef
        Daily breakfast, lunch, and dinner
        Guided snorkeling and diving tours with experienced instructors
        Use of snorkeling gear or diving equipment
        Transportation between Cairns and the Great Barrier Reef
        English-speaking guides and naturalists
        All taxes and service charges`
      },
      'Fiji': {
        country: 'Fiji',
        city: 'Suva',
        latitude: -17.713371,
        longitude: 178.065033,
        price: 3000,
        imageUrl: '/',
        days: 10,
        description: 'Escape to the idyllic paradise of Fiji, where pristine beaches, crystal-clear waters, and warm hospitality await. From luxurious overwater bungalows and vibrant coral reefs to cultural villages and lush rainforests, this itinerary promises an unforgettable island getaway in the heart of the South Pacific.',
        tripRoute: 'Belgrade (Serbia) -> Nadi (Fiji) -> Mamanuca Islands (Fiji) -> Coral Coast (Fiji) -> Suva (Fiji) -> Nadi (Fiji) -> Belgrade (Serbia)',
        travelPlans: [],
        includedIn: `Roundtrip flights from Belgrade to Fiji
        Accommodation in luxury resorts and beachfront hotels
        Daily breakfast and selected meals
        Guided tours and activities as per the itinerary
        Transportation between locations (private transfers and domestic flights)
        English-speaking tour guide throughout the trip
        All taxes and service charges`
      },
    },
    'South America': {
      'Argentina': {
        country: 'Argentina',
        city: 'Buenos Aires',
        latitude: -34.6037,
        longitude: -58.3816,
        price: 3800,
        imageUrl: '/',
        days: 12,
        description: 'Embark on an adventure to explore the vibrant culture, stunning landscapes, and rich heritage of Argentina. From the bustling streets of Buenos Aires to the awe-inspiring natural wonders of Patagonia and the majestic Iguazu Falls, this journey promises an unforgettable Argentinean experience.',
        tripRoute: 'Belgrade (Serbia) -> Buenos Aires (Argentina) -> El Calafate (Argentina) -> Perito Moreno Glacier (Argentina) -> Ushuaia (Argentina) -> Buenos Aires (Argentina) -> Iguazu Falls (Argentina) -> Buenos Aires (Argentina) -> Belgrade (Serbia)',
        travelPlans: [],
        includedIn: `Roundtrip flights from Belgrade to Argentina
        Domestic flights within Argentina
        Accommodation in centrally located hotels and lodges
        Daily breakfast and selected meals
        Guided tours and entrance fees to attractions mentioned in the itinerary
        Transportation between cities
        English-speaking guide
        All taxes and service charges`
      },
      'Chile': {
        country: 'Chile',
        city: 'Santiago',
        latitude: -33.4489,
        longitude: -70.6693,
        price: 3500,
        imageUrl: '/',
        days: 10,
        description: 'Explore the diverse landscapes, vibrant cities, and rich culture of Chile. From the bustling streets of Santiago to the breathtaking landscapes of the Atacama Desert and the stunning fjords of Patagonia, this journey promises an unforgettable Chilean adventure.',
        tripRoute: 'Belgrade (Serbia) -> Santiago (Chile) -> Atacama Desert (Chile) -> Santiago (Chile) -> Puerto Varas (Chile) -> Torres del Paine National Park (Chile) -> Santiago (Chile) -> Belgrade (Serbia)',
        travelPlans: [],
        includedIn: `Roundtrip flights from Belgrade to Santiago
        Domestic flights within Chile
        Accommodation in centrally located hotels and lodges
        Daily breakfast and selected meals
        Guided tours and entrance fees to attractions mentioned in the itinerary
        Transportation between cities
        English-speaking guide
        All taxes and service charges`
      },
      'Brasil': {
        country: 'Brasil',
        city: 'Brasília',
        latitude: -15.8267,
        longitude: -47.9218,
        price: 1000,
        imageUrl: '/',
        days: 7,
        description: 'Discover the vibrant culture, stunning landscapes, and diverse ecosystems of Brazil. From the bustling streets of Rio de Janeiro to the pristine beaches of Fernando de Noronha and the lush Amazon rainforest, this journey promises an unforgettable Brazilian adventure.',
        tripRoute: 'Belgrade (Serbia) -> Rio de Janeiro (Brazil) -> Paraty (Brazil) -> Ilha Grande (Brazil) -> Rio de Janeiro (Brazil) -> Manaus (Brazil) -> Amazon Rainforest (Brazil) -> Manaus (Brazil) -> Belgrade (Serbia)',
        travelPlans: [],
        includedIn: `Roundtrip flights from Belgrade to Rio de Janeiro
        Domestic flights within Brazil
        Accommodation in centrally located hotels, lodges, and beach resorts
        Daily breakfast and selected meals
        Guided tours and entrance fees to attractions mentioned in the itinerary
        Transportation between cities
        English-speaking guide
        All taxes and service charges`
      },
      'Peru': {
        country: 'Peru',
        city: 'Lima',
        latitude: -12.0464,
        longitude: -77.0428,
        price: 3200,
        imageUrl: '/',
        days: 12,
        description: 'Embark on an adventure to explore the ancient civilizations, breathtaking landscapes, and vibrant culture of Peru. From the iconic ruins of Machu Picchu to the colonial charm of Cusco and the mysterious Nazca Lines, this journey promises an unforgettable Peruvian experience.',
        tripRoute: 'Belgrade (Serbia) -> Lima (Peru) -> Cusco (Peru) -> Sacred Valley (Peru) -> Machu Picchu (Peru) -> Cusco (Peru) -> Nazca (Peru) -> Lima (Peru) -> Belgrade (Serbia)',
        travelPlans: [],
        includedIn: `Roundtrip flights from Belgrade to Lima
        Domestic flights within Peru
        Accommodation in centrally located hotels and lodges
        Daily breakfast and selected meals
        Guided tours and entrance fees to attractions mentioned in the itinerary
        Transportation between cities
        English-speaking guide
        All taxes and service charges`
      },
      'Venezuela': {
        country: 'Venezuela',
        city: 'Caracas',
        latitude: 10.4806,
        longitude: -66.9036,
        price: 3000,
        imageUrl: '/',
        days: 10,
        description: 'Embark on an adventure to explore the natural wonders, cultural heritage, and vibrant cities of Venezuela. From the majestic Angel Falls to the colorful streets of Caracas and the pristine beaches of Los Roques, this journey promises an unforgettable Venezuelan experience.',
        tripRoute: 'Belgrade (Serbia) -> Caracas (Venezuela) -> Canaima National Park (Venezuela) -> Angel Falls (Venezuela) -> Los Roques Archipelago (Venezuela) -> Caracas (Venezuela) -> Belgrade (Serbia)',
        travelPlans: [],
        includedIn: `Roundtrip flights from Belgrade to Caracas
        Domestic flights within Venezuela
        Accommodation in centrally located hotels and lodges
        Daily breakfast and selected meals
        Guided tours and entrance fees to attractions mentioned in the itinerary
        Transportation between cities
        English-speaking guide
        All taxes and service charges`
      },
      'Colombia': {
        country: 'Colombia',
        city: 'Bogotá',
        latitude: 4.7110,
        longitude: -74.0721,
        price: 3200,
        imageUrl: '/',
        days: 12,
        description: 'Discover the vibrant culture, colonial heritage, and stunning landscapes of Colombia. From the historic streets of Bogotá to the coffee plantations of the Zona Cafetera and the Caribbean beaches of Cartagena, this journey promises an unforgettable Colombian adventure.',
        tripRoute: 'Belgrade (Serbia) -> Bogotá (Colombia) -> Coffee Triangle (Colombia) -> Medellín (Colombia) -> Cartagena (Colombia) -> Bogotá (Colombia) -> Belgrade (Serbia)',
        travelPlans: [],
        includedIn: `Roundtrip flights from Belgrade to Bogotá
        Domestic flights within Colombia
        Accommodation in centrally located hotels and haciendas
        Daily breakfast and selected meals
        Guided tours and entrance fees to attractions mentioned in the itinerary
        Transportation between cities
        English-speaking guide
        All taxes and service charges`
      },
      'Amazon': {
        country: 'Brasil',
        city: 'Amazon',
        latitude: -2.163106,
        longitude: -60.126648,
        price: 2500,
        imageUrl: '/',
        days: 8,
        description: 'Embark on an immersive adventure into the heart of the Amazon Rainforest, the world\'s largest tropical rainforest teeming with unparalleled biodiversity. From winding river tributaries and lush jungle canopies to encounters with indigenous tribes and exotic wildlife, this journey promises an unforgettable exploration of the Amazon\'s natural wonders.',
        tripRoute: 'Belgrade (Serbia) -> Manaus (Brazil) -> Amazon Rainforest (Brazil) -> Manaus (Brazil) -> Belgrade (Serbia)',
        travelPlans: [],
        includedIn: `Roundtrip flights from Belgrade to Manaus
        Accommodation in eco-friendly lodges within the Amazon Rainforest
        All meals during the stay in the rainforest
        Guided jungle expeditions with experienced naturalist guides
        Visits to indigenous communities and cultural experiences
        Transportation between Manaus and the rainforest (boat or small aircraft)
        English-speaking tour guide throughout the trip
        All taxes and service charges`
      },
    },
    'North America': {
      'California': {
        country: 'United States',
        city: 'California',
        latitude: 36.7783,
        longitude: -119.4179,
        price: 4000,
        imageUrl: '/',
        days: 14,
        description: 'Explore the diverse landscapes, iconic cities, and cultural attractions of California. From the stunning coastline of Big Sur to the bustling streets of San Francisco and the majestic beauty of Yosemite National Park, this journey promises an unforgettable Californian adventure.',
        tripRoute: 'Belgrade (Serbia) -> San Francisco (California) -> Big Sur (California) -> Monterey (California) -> Carmel-by-the-Sea (California) -> Yosemite National Park (California) -> Napa Valley (California) -> San Francisco (California) -> Los Angeles (California) -> Santa Barbara (California) -> Los Angeles (California) -> Belgrade (Serbia)',
        travelPlans: [],
        includedIn: `Roundtrip flights from Belgrade to San Francisco and Los Angeles
        Accommodation in centrally located hotels and lodges
        Daily breakfast and selected meals
        Guided tours and entrance fees to attractions mentioned in the itinerary
        Transportation between cities
        English-speaking guide
        All taxes and service charges`
      },
      'New York': {
        country: 'United States',
        city: 'New York',
        latitude: 40.7128,
        longitude: -74.0060,
        price: 4500,
        imageUrl: '/',
        days: 10,
        description: 'Discover the iconic landmarks, world-class museums, and vibrant culture of New York City. From the bright lights of Times Square to the historic streets of Greenwich Village and the stunning views from the top of the Empire State Building, this journey promises an unforgettable New York experience.',
        tripRoute: 'Belgrade (Serbia) -> New York City (New York) -> Brooklyn (New York) -> Queens (New York) -> Staten Island (New York) -> New York City (New York) -> Belgrade (Serbia)',
        travelPlans: [],
        includedIn: `Roundtrip flights from Belgrade to New York City
        Accommodation in centrally located hotels
        Daily breakfast and selected meals
        Guided tours and entrance fees to attractions mentioned in the itinerary
        Transportation within New York City (subway passes, ferry tickets)
        English-speaking guide
        All taxes and service charges`
      },
      'Canada': {
        country: 'Canada',
        city: 'Toronto',
        latitude: 43.651070,
        longitude: -79.347015,
        price: 3800,
        imageUrl: '/',
        days: 12,
        description: 'Explore the stunning natural landscapes, vibrant cities, and rich cultural heritage of Canada. From the bustling streets of Toronto to the majestic beauty of the Canadian Rockies and the charming coastal towns of Nova Scotia, this journey promises an unforgettable Canadian adventure.',
        tripRoute: 'Belgrade (Serbia) -> Toronto (Ontario, Canada) -> Niagara Falls (Ontario, Canada) -> Ottawa (Ontario, Canada) -> Montreal (Quebec, Canada) -> Quebec City (Quebec, Canada) -> Calgary (Alberta, Canada) -> Banff National Park (Alberta, Canada) -> Jasper National Park (Alberta, Canada) -> Vancouver (British Columbia, Canada) -> Victoria (British Columbia, Canada) -> Vancouver (British Columbia, Canada) -> Belgrade (Serbia)',
        travelPlans: [],
        includedIn: `Roundtrip flights from Belgrade to Toronto and Vancouver
        Domestic flights within Canada (Toronto to Calgary, Quebec City to Montreal)
        Accommodation in centrally located hotels and lodges
        Daily breakfast and selected meals
        Guided tours and entrance fees to attractions mentioned in the itinerary
        Transportation between cities
        English-speaking guide
        All taxes and service charges`
      },
      'Florida': {
        country: 'United States',
        city: 'Florida',
        latitude: 27.9944,
        longitude: -81.7603,
        price: 2000,
        imageUrl: '/',
        days: 7,
        description: 'Experience the magic of Florida with its world-renowned theme parks, beautiful beaches, and vibrant cities. From the excitement of Orlando to the relaxation of Miami Beach, this trip offers a perfect blend of adventure and relaxation.',
        tripRoute: 'Belgrade (Serbia) -> Orlando (Florida) -> Miami (Florida) -> Key West (Florida) -> Everglades National Park (Florida) -> Orlando (Florida) -> Belgrade (Serbia)',
        travelPlans: [],
        includedIn: `Roundtrip flights from Belgrade to Orlando
        Accommodation in centrally located hotels
        Daily breakfast and selected meals
        Entrance fees to theme parks and attractions mentioned in the itinerary
        Transportation between cities (rental car or private transfers)
        English-speaking tour guide throughout the trip
        All taxes and service charges`
      },    
      'Jamaica': {
        country: 'Jamaica',
        city: 'Kingston',
        latitude: 18.1096,
        longitude: -77.2975,
        price: 3000,
        imageUrl: '/',
        days: 8,
        description: 'Immerse yourself in the vibrant culture, stunning beaches, and lush landscapes of Jamaica. From the reggae beats of Kingston to the pristine shores of Negril and the majestic waterfalls of Ocho Rios, this journey promises an unforgettable Jamaican experience.',
        tripRoute: 'Belgrade (Serbia) -> Kingston (Jamaica) -> Negril (Jamaica) -> Montego Bay (Jamaica) -> Ocho Rios (Jamaica) -> Kingston (Jamaica) -> Belgrade (Serbia)',
        travelPlans: [],
        includedIn: `Roundtrip flights from Belgrade to Kingston
        Accommodation in beach resorts and hotels
        Daily breakfast and selected meals
        Guided tours and entrance fees to attractions mentioned in the itinerary
        Transportation between cities
        English-speaking guide
        All taxes and service charges`
      },
      'Cuba': {
        country: 'Cuba',
        city: 'Havana',
        latitude: 23.1136,
        longitude: -82.3666,
        price: 3200,
        imageUrl: '/',
        days: 10,
        description: 'Discover the rich history, vibrant culture, and stunning architecture of Cuba. From the colorful streets of Havana to the lush tobacco fields of Viñales and the beautiful beaches of Varadero, this journey promises an unforgettable Cuban adventure.',
        tripRoute: 'Belgrade (Serbia) -> Havana (Cuba) -> Viñales (Cuba) -> Cienfuegos (Cuba) -> Trinidad (Cuba) -> Varadero (Cuba) -> Havana (Cuba) -> Belgrade (Serbia)',
        travelPlans: [],
        includedIn: `Roundtrip flights from Belgrade to Havana
        Accommodation in casas particulares and beach resorts
        Daily breakfast and selected meals
        Guided tours and entrance fees to attractions mentioned in the itinerary
        Transportation between cities
        English-speaking guide
        All taxes and service charges`
      },
      'Mexico': {
        country: 'Mexico',
        city: 'Mexico City',
        latitude: 23.6345,
        longitude: -102.5528,
        price: 3500,
        imageUrl: '/',
        days: 10,
        description: 'Immerse yourself in the rich history, vibrant culture, and stunning landscapes of Mexico. From the ancient ruins of Teotihuacan to the colorful streets of Mexico City and the pristine beaches of the Riviera Maya, this journey promises an unforgettable Mexican adventure.',
        tripRoute: 'Belgrade (Serbia) -> Mexico City (Mexico) -> Teotihuacan (Mexico) -> Puebla (Mexico) -> Oaxaca (Mexico) -> Riviera Maya (Mexico) -> Cancún (Mexico) -> Mexico City (Mexico) -> Belgrade (Serbia)',
        travelPlans: [],
        includedIn: `Roundtrip flights from Belgrade to Mexico City
        Domestic flights within Mexico (Mexico City to Oaxaca, Oaxaca to Cancún)
        Accommodation in centrally located hotels and beach resorts
        Daily breakfast and selected meals
        Guided tours and entrance fees to attractions mentioned in the itinerary
        Transportation between cities
        English-speaking guide
        All taxes and service charges`
      },
      'Washington': {
        country: 'United States',
        city: 'Washington DC',
        latitude: 38.889805,
        longitude: -77.009056,
        price: 3800,
        imageUrl: '/',
        days: 10,
        description: 'Discover the historic landmarks, vibrant culture, and natural beauty of Washington State. From the iconic monuments of Washington, D.C. to the lush forests of Olympic National Park and the charming waterfront of Seattle, this journey promises an unforgettable Washingtonian adventure.',
        tripRoute: 'Belgrade (Serbia) -> Washington, D.C. (USA) -> Shenandoah National Park (Virginia, USA) -> Baltimore (Maryland, USA) -> Annapolis (Maryland, USA) -> Washington, D.C. (USA) -> Seattle (Washington, USA) -> Olympic National Park (Washington, USA) -> Mount Rainier National Park (Washington, USA) -> Seattle (Washington, USA) -> Belgrade (Serbia)',
        travelPlans: [],
        includedIn: `Roundtrip flights from Belgrade to Washington, D.C. and Seattle
        Domestic flights within the USA (Washington, D.C. to Seattle)
        Accommodation in centrally located hotels and lodges
        Daily breakfast and selected meals
        Guided tours and entrance fees to attractions mentioned in the itinerary
        Transportation between cities
        English-speaking guide
        All taxes and service charges`
      }
    }
  };