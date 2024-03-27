import jwt, { JwtPayload } from "jsonwebtoken";
import { NextRequest } from "next/server";

interface decodedInterface extends JwtPayload {
  id: string;
  username: string;
  email: string;
}

export const isAuthenticated = (req: NextRequest) => {
  try {
    const token = req.cookies.get("uat")?.value || "";

    if (token) {
      const decoded: decodedInterface = jwt.verify(
        token,
        process.env.TOKEN_SECRET!
      ) as decodedInterface;
      return decoded.id;
    }

    //console.log("DECODED", decoded);
  } catch (error) {
    console.log("[AUTH TOKEN ERROR]", error);
  }
};
