-- CreateTable
CREATE TABLE "Employee" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100),
    "restaurant" VARCHAR(100),
    "id_emple_restaurant" DECIMAL,

    CONSTRAINT "Employee_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Sale" (
    "id" SERIAL NOT NULL,
    "employee_id" INTEGER,
    "item_name" VARCHAR(100),
    "units_sold" INTEGER,
    "selling_price" DECIMAL,
    "quantity" DECIMAL,
    "cost" DECIMAL,
    "profitability" DECIMAL,
    "cost_percentage" DECIMAL,
    "sales_percentage" DECIMAL,
    "date" DECIMAL,

    CONSTRAINT "Sale_pkey" PRIMARY KEY ("id")
);

