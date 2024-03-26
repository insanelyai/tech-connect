import { isAuthenticated } from "@/lib/isAuth";
import connect from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/User";

export async function GET(req: NextRequest) {
  try {
    connect();
    const token = isAuthenticated(req);

    if (!token) {
      return NextResponse.json(
        {
          message: "Unauthorized, required login",
        },
        { status: 401 }
      );
    }

    const fetchuser = await User.findById({ _id: token }).select("-password");

    return NextResponse.json(fetchuser, { status: 200 });
  } catch (error) {
    console.log("[GET USER]", error);
    return NextResponse.json(
      {
        message: "Internal Server Error",
      },
      { status: 500 }
    );
  }
}
