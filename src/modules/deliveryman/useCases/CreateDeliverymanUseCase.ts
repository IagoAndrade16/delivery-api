import { hash } from "bcrypt";
import { prisma } from "../../../database/PrismaClient";

export type CreateDeliverymanInput = {
  username: string;
  password: string;
}

export class CreateDeliverymanUseCase {
  async execute({ username, password }: CreateDeliverymanInput){
    const deliverymanExist = await prisma.deliveryman.findFirst({
      where: {
        username: {
          equals: username,
          mode: "insensitive"
        }
      }
    })

    if(deliverymanExist) {
      throw new Error("Deliveryman already exists!")
    }

    const hashPassword = await hash(password, 10);

    const deliveryman = await prisma.deliveryman.create({
      data: {
        username,
        password: hashPassword
      }
    })

    return deliveryman;
  }
}