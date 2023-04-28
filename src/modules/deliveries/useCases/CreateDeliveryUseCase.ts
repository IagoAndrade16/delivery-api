import { prisma } from "../../../database/PrismaClient";

export type CreateDeliveryInput = {
  item_name: string;
  id_client: string;
}

export class CreateDeliveryUseCase {
  async execute({ item_name, id_client }: CreateDeliveryInput) {
    const delivery = await prisma.deliveries.create({
      data: {
        item_name,
        id_client
      }
    })

    return delivery;
  }
}