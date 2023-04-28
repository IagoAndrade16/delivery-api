import { Request, Response } from "express";
import { CreateClientUseCase } from "../useCases/CreateClientUseCase";

export class CreateClientController {
  async handle(req: Request, res: Response) {
    const createClientUseCase = new CreateClientUseCase();

    const { username, password } = req.body;

    const result = await createClientUseCase.execute({
      username,
      password
    })

    return res.status(201).json(result);
  }
}