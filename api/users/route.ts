import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const users = await prisma.user.findMany({
            include: {
                client: true,
                company: true
            }
        });

        return new NextResponse(JSON.stringify(users), {status: 200, headers: {"Content-Type": "application/json" }});
    } catch (error) {
        return new NextResponse(JSON.stringify({ error: `Error server ${error}` }),
            { status: 500 }
        )
    } 
}