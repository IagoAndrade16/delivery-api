import { Request, Response } from "express";
import { CreateDeliverymanUseCase } from "../useCases/CreateDeliverymanUseCase";

export class CreateDeliverymanController {
  async handle(req: Request, res: Response): Promise<Response> {
    const input = req.body;

    const createDeliverymanUseCase = new CreateDeliverymanUseCase();
    const result = await createDeliverymanUseCase.execute(input);

    return res.status(201).json(result);
  }
}