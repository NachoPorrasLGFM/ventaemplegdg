-- AlterTable
ALTER TABLE "Employee" ALTER COLUMN "restaurantId" SET DEFAULT 1;

-- AlterTable
ALTER TABLE "Restaurant" ALTER COLUMN "name" SET DEFAULT 'Leña Madrid';

-- AlterTable
ALTER TABLE "Sale" ALTER COLUMN "restaurantId" SET DEFAULT 1;
