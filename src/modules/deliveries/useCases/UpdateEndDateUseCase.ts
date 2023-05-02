import { prisma } from "../../../database/PrismaClient";

export type UpdateEndDateInput = {
  id_deliveryman: string;
  id_delivery: string;
}

export class UpdateEndDateUseCase {
  async execute({ id_delivery, id_deliveryman}: UpdateEndDateInput) {
    const result = await prisma.deliveries.updateMany({
      where: {
        id: id_delivery,
        id_deliveryman
      },
      data: {
        end_at: new Date()
      }
    })

    return result;
  }
}