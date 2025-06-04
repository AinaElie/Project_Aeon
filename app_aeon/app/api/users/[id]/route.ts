import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const {id} = await params;

  try {
    if (!id || typeof id !== "string") {
      return NextResponse.json(
        { message: "User not found" },
        { status: 404 }
      );
    }

    const user = await prisma.user.findUnique({
      where: {
        id_user: id,
      },
      include: {
        company: true,
        client: true,
      },
    });

    return new NextResponse(JSON.stringify(user), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new NextResponse(
      JSON.stringify({
        error: "Internal server error",
        details: error instanceof Error ? error.message : String(error),
      }),
      { status: 500 }
    );
  }
}