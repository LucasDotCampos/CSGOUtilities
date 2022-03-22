import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

import { TokenPayload } from "../interfaces";

export default function isAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
): void {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new Error("JWT Token is missing.");
  }

  const [, token] = authHeader.split(" ");

  try {
    const secret = process.env.SECRET;
    const decodedToken = verify(token, `${secret}`);
    const { id } = decodedToken as TokenPayload;

    request.userId = id;

    return next();
  } catch {
    throw new Error("Invalid JWT Token.");
  }
}
