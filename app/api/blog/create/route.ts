import connect from "@/lib/db";
import { isAuthenticated } from "@/lib/isAuth";
import Post from "@/models/Post";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    connect();

    const { title, content, image } = await req.json();

    const user = isAuthenticated(req);

    if (!user) {
      return NextResponse.json(
        {
          message: "Session Expired, Please login.",
        },
        { status: 401 }
      );
    }

    const newPost = new Post({
      title,
      content,
      image,
      author: user,
    });

    console.log(newPost);

    const addPost = newPost.save();

    return NextResponse.json(addPost, { status: 200 });
  } catch (error) {
    console.log("[BLOG API /create]", error);
  }
}
