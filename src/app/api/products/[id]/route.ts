import prisma from "@/app/utils/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const data = await prisma.sale.groupBy({
    _sum: {
      units_sold: true,
      selling_price: true,
      quantity: true,
    },
    by: ["employee_id"],
    where: {
      employee_id: parseInt(id),
    },
    orderBy: {
      _sum: { quantity: "desc" },
    },
  });

  return Response.json(data);
}
