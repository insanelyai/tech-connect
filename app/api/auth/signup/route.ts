import connect from "@/lib/db";
import User from "@/models/User";
import bcryptjs from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    connect();
    const { username, email, password } = await req.json();

    const user = await User.findOne({ $or: [{ email }, { username }] });

    if (user && user.email === email) {
      return NextResponse.json(
        { message: "Email already in use" },
        { status: 401 }
      );
    } else if (user && user.username === username) {
      return NextResponse.json(
        { message: "Username already in use" },
        { status: 401 }
      );
    }

    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    const addUser = await newUser.save();

    return NextResponse.json(
      {
        message: "Congratulations! You have successfully created an account",
        success: true,
        addUser,
      },
      { status: 200 }
    );
  } catch (error) {
    console.log("[AUTH]", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
