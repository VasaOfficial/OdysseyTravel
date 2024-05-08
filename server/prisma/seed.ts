import { PrismaClient } from "@prisma/client";
import { locations } from '../src/fakeDB'

const prisma = new PrismaClient();

async function createContinentsIfNotExists(locations: any) {
  const continentNames = Object.keys(locations); // Get all continent names

  for (const continentName of continentNames) {
    const existingContinent = await prisma.continent.findFirst({
      where: { name: continentName },
    });

    if (!existingContinent) {
      console.log(`Creating continent: ${continentName}`);
      await prisma.continent.create({
        data: {
          name: continentName,
        },
      });
    } else {
      console.log(`Continent '${continentName}' already exists, skipping...`);
    }
  }
}

async function seedData() {
  await createContinentsIfNotExists(locations); 

  for (const continentName in locations) {
    const existingContinent = await prisma.continent.findFirst({
      where: { name: continentName },
    });

    if (!existingContinent) {
      // Create continent if it doesn't exist
      const createdContinent = await prisma.continent.create({
        data: {
          name: continentName,
        },
      });

      console.log(`Created continent: ${createdContinent.name}`);
    } else {
      console.log(`Continent '${continentName}' already exists, skipping...`);
    }

    for (const countryName in locations[continentName]) {
      // Find the country by name first (assuming name is unique)
      const existingCountry = await prisma.country.findFirst({
        where: { name: countryName },
      });
      
      // Create country if it doesn't exist
      if (!existingCountry) {
         const createdCountry = await prisma.country.create({
          data: {
            name: countryName,
            continent: { connect: { id: existingContinent?.id } },
          },
        });

        console.log(`Created country: ${createdCountry.name}`);
      } else {
        console.log(`Country '${countryName}' already exists, skipping...`);
      }

      const destinationDetails = locations[continentName]?.[countryName];

       // Insert Destination data
      if (destinationDetails) {
        const country = await prisma.country.findFirst({
          where: { name: countryName }, 
        });

        if (!country) {
          console.error(`Country "${countryName}" not found, skipping...`);
          continue;
        }

        if (destinationDetails) {
          // Check for existing destination using a unique constraint filter
          const existingDestination = await prisma.destination.findFirst({
            where: {
              countryName: countryName,  // Assuming country name is unique
              city: destinationDetails.city,  // Additional field for uniqueness (optional)
            },
          });
      
          if (!existingDestination) {
            // Create destination if it doesn't exist
            const destination = await prisma.destination.create({
              data: {
                countryName: countryName,
                country: { connect: { id: country.id } },
                city: destinationDetails.city,
                latitude: destinationDetails.latitude,
                longitude: destinationDetails.longitude,
                price: destinationDetails.price,
                imageUrl: destinationDetails.imageUrl,
                durationDays: destinationDetails.days,
                description: destinationDetails.description,
                tripRoute: destinationDetails.tripRoute,
                includedIn: destinationDetails.includedIn,
              },
            });

            const travelPlans = destinationDetails.travelPlans;

            if (travelPlans) {
              for (const travelPlan of travelPlans) {
                // Check for existing travel plan for this destination and day
                const existingTravelPlan = await prisma.travelPlan.findFirst({
                  where: {
                    destinationId: destination.id,
                    day: travelPlan.day,
                  },
                });
          
                if (!existingTravelPlan) {
                  // Create travel plan if it doesn't exist
                  await prisma.travelPlan.create({
                    data: {
                      destination: { connect: { id: destination.id } },
                      day: travelPlan.day,
                      description: travelPlan.description,
                    },
                  });
                } else {
                    console.log(`Travel plan for day ${travelPlan.day} already exists, skipping...`);
                }
              }
            }
          } else {
            console.log(`Destination '${destinationDetails.city}' already exists, skipping...`);
          }
        }
      }
    }
  }
  console.log('Data seeding completed!');
}

seedData()
  .catch((error) => {
    console.error('Error seeding data:', error);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

// delete all data from the table
async function deleteAllData() {
  // Define deletion order (important for relationships)
  const deletionOrder = [
    'TravelPlan',
    'Destination',
    'Country',
    'Continent',
  ];

  for (const modelName of deletionOrder) {
    await prisma.$executeRawUnsafe(`DELETE FROM "${modelName}"`);
  }

  console.log('All data deleted from database!');
}

//deleteAllData()