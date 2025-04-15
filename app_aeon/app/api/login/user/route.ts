import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const {email, password} = await request.json();

    if (!email || !password) {
        return NextResponse.json({message: "Email or Password not found"}, {status: 404});
    }

    try {
        const user = await prisma.user.findFirst({
            where: {
                user_email:  email,
            }
        });

        if (user && user.user_password === password) {
            return NextResponse.json({
                id_user: user.id_user,
                message: "Authentication successful"
            }, {status: 200});
        } 
        return NextResponse.json({message: "Authentication error"}, {status: 401})
    }  catch (error) {
        console.error("Erreur:", error);
        return NextResponse.json({ message: "Server error" }, { status: 500 });
    }
}