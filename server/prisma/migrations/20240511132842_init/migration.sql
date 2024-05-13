/*
  Warnings:

  - You are about to drop the `TravelPlan` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `travelPlans` to the `Destination` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "TravelPlan" DROP CONSTRAINT "TravelPlan_destinationId_fkey";

-- AlterTable
ALTER TABLE "Destination" ADD COLUMN     "travelPlans" JSONB NOT NULL;

-- DropTable
DROP TABLE "TravelPlan";
