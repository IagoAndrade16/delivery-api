import { prisma } from "../../../database/PrismaClient";

export class FindAllWithoutEndDateUseCase {
  async execute() {
    const deliveries = await prisma.deliveries.findMany({
      where: {
        end_at: null
      }
    })

    return deliveries
  }
}