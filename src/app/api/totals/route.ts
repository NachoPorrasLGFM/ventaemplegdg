import prisma from "@/app/utils/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export async function GET() {
  const data = await prisma.sale.aggregate({ _sum: { quantity: true } });

  return Response.json(data);
}
