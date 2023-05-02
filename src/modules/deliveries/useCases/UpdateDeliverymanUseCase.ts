import { prisma } from "../../../database/PrismaClient";

export type UpdateDeliverymanInput = {
  id_deliveryman: string;
  id_delivery: string;
}

export class UpdateDeliverymanUseCase {
  async execute({ id_delivery, id_deliveryman}: UpdateDeliverymanInput) {
    const result = await prisma.deliveries.update({
      where: {
        id: id_delivery
      },
      data: {
        id_deliveryman
      }
    })

    return result;
  }
}