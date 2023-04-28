import { prisma } from "../../../database/PrismaClient";
import { hash , compare } from "bcrypt";
import { sign } from "jsonwebtoken"

export type AuthenticateUserInput = {
  username: string;
  password: string;
}

export class AuthenticateClientUseCase {
  async execute({ username, password }: AuthenticateUserInput) {
    const client = await prisma.clients.findFirst({
      where: {
        username
      }
    })

    if(!client) {
      throw new Error("Username or password invalid!");
    }

    const passwordMatch = await compare(password, client.password);

    if(!passwordMatch) {
      throw new Error("Username or password invalid!");
    }

    const token = sign({ username }, "1726ffff90e0c84126d0f734d8099dc9", {
      subject: client.id,
      expiresIn: "1d"
    })

    return token;

  } 
}