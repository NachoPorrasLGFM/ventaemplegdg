import prisma from "@/app/utils/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export async function GET() {
  const employees = await prisma.employee.findMany({
    select: {
      id: true,
      name: true,
    },
  });

  const sales = await prisma.sale.groupBy({
    _sum: {
      quantity: true,
    },
    by: ["employee_id"],

    where: {
      date: 4,
    },
  });

  const employeesWithTotalSales = employees.map((employee) => {
    const employeeSales = sales.find(
      (sale) => sale.employee_id === employee.id
    );
    const totalSales = employeeSales ? employeeSales._sum.quantity : 0;
    return { ...employee, totalSales };
  });

  return Response.json(employeesWithTotalSales);
}
