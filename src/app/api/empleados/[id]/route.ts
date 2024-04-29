import prisma from "@/app/utils/prisma";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;

  const data = await prisma.employee.findMany({
    include:{
      Sale:true
    },
    where: { id: parseInt(id) },
  });

  return Response.json(data);
}
