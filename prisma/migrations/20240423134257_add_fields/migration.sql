/*
  Warnings:

  - You are about to drop the column `restaurant` on the `Employee` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Employee" DROP COLUMN "restaurant",
ADD COLUMN     "restaurantId" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "Sale" ADD COLUMN     "restaurantId" INTEGER NOT NULL DEFAULT 0;

-- CreateTable
CREATE TABLE "Restaurant" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,

    CONSTRAINT "Restaurant_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Employee" ADD CONSTRAINT "Employee_restaurantId_fkey" FOREIGN KEY ("restaurantId") REFERENCES "Restaurant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sale" ADD CONSTRAINT "Sale_restaurantId_fkey" FOREIGN KEY ("restaurantId") REFERENCES "Restaurant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
