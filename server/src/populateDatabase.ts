// Import Prisma Client
import { PrismaClient } from '@prisma/client';
import { locations } from './fakeDB.js'

// Instantiate Prisma Client
const prisma = new PrismaClient();

// Function to populate the database
async function populateDatabase() {
  // Iterate over continents
  for (const continentName in locations) {
    const continent = await prisma.continent.create({
      data: {
        name: continentName,
      },
    });

    // Iterate over countries within the continent
    for (const countryName in locations[continentName]) {
      const country = await prisma.country.create({
        data: {
          name: countryName,
          continentId: continent.id,
        },
      });

      // Iterate over locations within the country
      for (const locationName in locations[continentName][countryName]) {
        const locationData = locations[continentName][countryName][locationName];
        await prisma.location.create({
          data: {
            name: locationName,
            countryName: locationData.country,
            countryId: country.id,
            // Populate other fields with locationData
          },
        });
      }
    }
  }

  console.log('Database populated successfully!');
}

// Run the function
populateDatabase()
  .catch((error) => {
    console.error('Error populating database:', error);
  })
  .finally(async () => {
    // Disconnect Prisma Client
    await prisma.$disconnect();
  });