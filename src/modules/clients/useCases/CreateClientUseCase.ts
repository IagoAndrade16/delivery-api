import { prisma } from "../../../database/PrismaClient";
import { hash } from "bcrypt"

export type CreateClientInput = {
  username: string;
  password: string;
}

export class CreateClientUseCase {
  async execute({ username, password }: CreateClientInput) {
    const clientExists = await prisma.clients.findFirst({
      where: {
        username: {
          mode: "insensitive"
        }
      }
    })

    if(clientExists) {
      throw new Error("Client already exists!")
    }

    const hashPassword = await hash(password, 10);

    const client = await prisma.clients.create({
      data: {
        username,
        password: hashPassword
      }
    })

    return client;

  }
}