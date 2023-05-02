import { Request, Response } from "express";
import { CreateDeliveryUseCase } from "../useCases/CreateDeliveryUseCase";

export class CreateDeliveryController {
  async handle(req: Request, res: Response): Promise<Response> {
    const createDeliveryUseCase = new CreateDeliveryUseCase();
    const { item_name } = req.body;
    const { id_client } = req;

    const delivery = await createDeliveryUseCase.execute({
      item_name,
      id_client
    })

    return res.status(201).json(delivery);
  }
}