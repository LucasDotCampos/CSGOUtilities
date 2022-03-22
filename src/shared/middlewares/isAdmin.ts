import { NextFunction, Request, Response } from "express";

export default function isAdmin(
  request: Request,
  response: Response,
  next: NextFunction
): void {
  request.userId === process.env.USERID;

  if (request.userId !== process.env.USERID) {
    throw new Error("You're not allowed to use this route");
  }
  return next();
}
