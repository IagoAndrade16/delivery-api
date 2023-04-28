import { Request, Response } from "express";
import { CreateDeliveryUseCase } from "../useCases/CreateDeliveryUseCase";

export class CreateDeliveryController {
  async handle(req: Request, res: Response): Promise<Response> {
    const createDeliveryUseCase = new CreateDeliveryUseCase();
    const input = req.body;

    const delivery = await createDeliveryUseCase.execute(input)

    return res.status(201).json(delivery);
  }
}