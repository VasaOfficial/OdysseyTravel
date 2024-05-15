-- CreateTable
CREATE TABLE "TopOffers" (
    "id" SERIAL NOT NULL,
    "countryName" TEXT NOT NULL,
    "city" VARCHAR(100) NOT NULL,
    "price" INTEGER NOT NULL,
    "imageUrl" VARCHAR(255) NOT NULL,
    "shortDescription" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "durationDays" INTEGER NOT NULL,
    "tripRoute" TEXT NOT NULL,
    "travelPlans" JSONB NOT NULL,
    "includedIn" TEXT NOT NULL,
    "dateRange" TEXT NOT NULL,

    CONSTRAINT "TopOffers_pkey" PRIMARY KEY ("id")
);
