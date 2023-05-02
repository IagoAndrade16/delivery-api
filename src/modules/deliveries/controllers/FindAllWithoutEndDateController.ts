import { Request, Response } from "express";
import { FindAllWithoutEndDateUseCase } from "../useCases/FindAllWithoutEndDateUseCase";

export class FindALLWithoutEndDateController {
  async handle(req: Request, res: Response) {
    const findAllWithoutEndDateUseCase = new FindAllWithoutEndDateUseCase();

    const deliveries = await findAllWithoutEndDateUseCase.execute();

    return res.json(deliveries);
  }
}