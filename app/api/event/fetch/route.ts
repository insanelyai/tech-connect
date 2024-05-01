import connect from "@/lib/db";
import { isAuthenticated } from "@/lib/isAuth";
import Event from "@/models/Event";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    connect();

    const user = isAuthenticated(req);

    if (!user) {
      return NextResponse.redirect(new URL("/login"));
    }

    const events = await Event.find({});

    return NextResponse.json(events);
  } catch (error) {
    console.error("[EVENT] /fetch", error);
  }
}
