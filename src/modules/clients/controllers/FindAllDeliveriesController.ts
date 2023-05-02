import { Request, Response } from "express";
import { FindAllDeliveriesUseCase } from "../useCases/FindAllDeliveriesUseCase";

export class FindAllDeliveriesController {
  async handle(req: Request, res: Response) {
    const findAllDeliveriesUseCase = new FindAllDeliveriesUseCase();

    const { id_client } = req;

    const deliveries = await findAllDeliveriesUseCase.execute(id_client);

    return res.json(deliveries);
  }
}