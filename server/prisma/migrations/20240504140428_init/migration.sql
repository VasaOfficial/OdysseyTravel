-- CreateTable
CREATE TABLE "Destination" (
    "id" SERIAL NOT NULL,
    "locationName" VARCHAR(100) NOT NULL,
    "city" VARCHAR(100) NOT NULL,
    "price" INTEGER NOT NULL,
    "latitude" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,
    "imageUrl" VARCHAR(255) NOT NULL,
    "durationDays" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "tripRoute" TEXT NOT NULL,
    "includedIn" TEXT NOT NULL,

    CONSTRAINT "Destination_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TravelPlan" (
    "id" SERIAL NOT NULL,
    "destinationId" INTEGER NOT NULL,
    "day" INTEGER NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "TravelPlan_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "TravelPlan" ADD CONSTRAINT "TravelPlan_destinationId_fkey" FOREIGN KEY ("destinationId") REFERENCES "Destination"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
