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

  const secret = process.env.SECRET;
  const decodedToken = verify(token, `${secret}`);

  if (!decodedToken) {
    throw new Error("Invalid JWT token");
  }

  const paramsId = request.params.userId;

  const { id } = decodedToken as TokenPayload;

  if (request.originalUrl.includes("/users/update") && paramsId !== id) {
    throw new Error("You're not able to do it");
  }

  request.userId = id;

  return next();
}
