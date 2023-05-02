import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken"

interface IPayload {
  sub: string;
}

export async function ensureAuthenticateClient(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;

  if(!authHeader) {
    return res.status(401).json({
      json: 'Token missing!'
    })
  }

  const [, token] = authHeader.split(" ");

  try{
    const { sub } = verify(token, '1726ffff90e0c84126d0f734d8099dc9') as IPayload;

    req.id_client = sub;
    return next();
  } catch(err) {
    return res.status(401).json({
      message: 'Invalid token!'
    })
  }
}