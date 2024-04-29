import prisma from "@/app/utils/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import config from "../../../../tailwind.config";

export async function GET() {
  const data = await prisma.sale.groupBy({
    _sum: {
      units_sold: true,
      selling_price: true,
      quantity: true,
    },
    by: ["employee_id"],
    orderBy: {
      _sum: { quantity: "desc" },
    },
  });

  return Response.json(data);
}
