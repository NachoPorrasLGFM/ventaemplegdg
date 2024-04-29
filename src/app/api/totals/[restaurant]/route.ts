import prisma from "@/app/utils/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export async function GET(
  request: Request,
  { params }: { params: { restaurant: string } }
) {
  const { restaurant } = params;
  const data = await prisma.sale.aggregate({
    _sum: { quantity: true },
    where: { restaurantId: parseInt(restaurant) },
  });

  return Response.json(data);
}
