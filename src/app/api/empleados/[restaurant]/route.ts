import prisma from "@/app/utils/prisma";

export async function GET(
  request: Request,
  { params }: { params: { restaurant: string } }
) {
  const id = params.restaurant;
  console.log(id);
  const data = await prisma.employee.findMany({
    where: { restaurant: id },
  });

  return Response.json(data);
}
