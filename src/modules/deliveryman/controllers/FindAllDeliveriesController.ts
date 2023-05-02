import { Request, Response } from "express";
import { FindAllDeliveriesDeliverymanUseCase } from "../useCases/FindAllDeliveriesUseCase";

export class FindAllDeliveriesDeliverymanController {
  async handle(req: Request, res: Response) {
    const findAllDeliveriesUseCase = new FindAllDeliveriesDeliverymanUseCase();

    const { id_deliveryman } = req;

    const deliveries = await findAllDeliveriesUseCase.execute(id_deliveryman);

    return res.json(deliveries);
  }
}