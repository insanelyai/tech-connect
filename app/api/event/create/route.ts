import connect from "@/lib/db";
import { isAuthenticated } from "@/lib/isAuth";
import Event from "@/models/Event";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    connect();

    const { event, description, date, image } = await req.json();

    const user = isAuthenticated(req);

    console.log(user);

    if (!user) {
      return NextResponse.json(
        { message: "Session Expired, Please login." },
        { status: 401 }
      );
    }

    const newEvent = new Event({
      event,
      description,
      date,
      image,
      user: user,
    }).save();

    return NextResponse.json(newEvent, { status: 200 });
  } catch (error) {
    console.log("[BLOG API /create]", error);
  }
}
