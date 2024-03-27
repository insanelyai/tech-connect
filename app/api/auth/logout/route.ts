import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = NextResponse.json({
      message: "Logged Out, See you back again!",
      success: true,
    });

    response.cookies.set("uat", "", { httpOnly: true, expires: new Date(0) });

    return NextResponse.json({ response }, { status: 200 });
  } catch (error) {
    console.log("[LOGOUT ERROR]", error);
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
