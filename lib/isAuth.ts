import jwt, { JwtPayload, TokenExpiredError } from "jsonwebtoken";
import { NextRequest } from "next/server";

interface DecodedInterface extends JwtPayload {
  id: string;
  username: string;
  email: string;
}

export const isAuthenticated = (req: NextRequest) => {
  try {
    const token = req.cookies.get("uat")?.value || "";

    const decoded: DecodedInterface = jwt.verify(
      token,
      process.env.TOKEN_SECRET as string
    ) as DecodedInterface;

    // Token is valid, return the user ID
    return decoded.id;
  } catch (error) {
    if (error instanceof TokenExpiredError) {
      // Token is expired, redirect to login page
      console.log("TOKEN EXPIRED");
      return false; // Return false when token is expired
    } else {
      // Handle other errors
      console.log("[AUTH TOKEN ERROR]", error);
      // Redirect to login page or handle the error in an appropriate way
      return false; // Return false for other errors
    }
  }
};
