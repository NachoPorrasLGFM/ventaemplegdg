import prisma from "@/app/utils/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export async function GET() {
  const data = await prisma.employee.findMany({ include: { Sale: true } });

  return Response.json(data);
}
