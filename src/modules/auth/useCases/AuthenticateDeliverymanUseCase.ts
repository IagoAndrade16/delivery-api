import { prisma } from "../../../database/PrismaClient";
import { hash , compare } from "bcrypt";
import { sign } from "jsonwebtoken"

export type AuthenticateDeliverymanInput = {
  username: string;
  password: string;
}

export class AuthenticateDeliverymanUseCase {
  async execute({ username, password }: AuthenticateDeliverymanInput) {
    const deliveryman = await prisma.deliveryman.findFirst({
      where: {
        username
      }
    })

    if(!deliveryman) {
      throw new Error("Username or password invalid!");
    }

    const passwordMatch = await compare(password, deliveryman.password);

    if(!passwordMatch) {
      throw new Error("Username or password invalid!");
    }

    const token = sign({ username }, "1726ffff90e0c84226d0f734d8099dc9", {
      subject: deliveryman.id,
      expiresIn: "1d"
    })

    return token;

  } 
}