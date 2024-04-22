import prisma from "@/app/utils/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export async function GET() {
  const data = await prisma.employee.findMany();

  return Response.json(data);
}
