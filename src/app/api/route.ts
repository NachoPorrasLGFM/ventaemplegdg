

import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../utils/prisma";

export async function GET() {
  const data = await prisma.employee.findMany();

  return Response.json(data);
}