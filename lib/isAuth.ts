import jwt from "jsonwebtoken";
import { NextRequest } from "next/server";

export const isAuthenticated = (req: NextRequest) => {
  try {
    const token = req.cookies.get("uat")?.value;

    if (!token) {
      throw new Error("JWT token not found in cookies");
    }

    const decoded: any = jwt.verify(token, process.env.TOKEN_SECRET!);

    return decoded.id;
  } catch (error) {
    console.log("[AUTH TOKEN ERROR]", error);
  }
};
