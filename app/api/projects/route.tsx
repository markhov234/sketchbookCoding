import { NextResponse, type NextRequest } from "next/server";
import prisma from "../../../prisma/client";

export async function GET(request: NextRequest) {
  const projects = await prisma?.project.findMany({
    where: {
      userId: 1,
    },
  });

  return NextResponse.json(projects);
}

// export async function DELETE(request:NextRequest){

// }
