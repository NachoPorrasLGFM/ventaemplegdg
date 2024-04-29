import prisma from "@/app/utils/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export async function GET(
  request: Request,
  { params }: { params: { restaurant: string } }
) {
  const { restaurant } = params;

  const employees = await prisma.employee.findMany({
    select: {
      id: true,
      name: true,
      Restaurant: {
        select: {
          name: true,
        },
      },
    },
    where: {
      restaurantId: parseInt(restaurant),
    },
  });

  const sales = await prisma.sale.groupBy({
    _sum: {
      quantity: true,
    },
    by: ["employee_id"],
  });

  const employeesWithTotalSales = employees.map((employee) => {
    const employeeSales = sales.find(
      (sale) => sale.employee_id === employee.id
    );
    const totalSales = employeeSales ? employeeSales._sum.quantity : 0;
    return { ...employee, totalSales };
  });
  // Ordenar por nombre de empleado
  employeesWithTotalSales.sort(
    (a, b) => Number(b.totalSales) - Number(a.totalSales)
  );
  return Response.json(employeesWithTotalSales);
}
