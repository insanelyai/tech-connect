import connect from "@/lib/db";
import Post from "@/models/Post";

import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    connect();

    const posts = await Post.find({});

    return NextResponse.json(posts, { status: 200 });
  } catch (error) {
    console.log("[BLOG API /fetch]", error);

    return NextResponse.json(
      {
        message: "Internal Server Error",
      },
      { status: 500 }
    );
  }
}
