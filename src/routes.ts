import { Router } from "express";
import { CreateClientController } from "./modules/clients/controllers/CreateClientController";
import { AuthenticateClientController } from "./modules/auth/controllers/AuthenticateClientController";

const routes = Router();

const createClientController = new CreateClientController();
const authenticateClientController = new AuthenticateClientController();

routes.post("/client", createClientController.handle)
routes.post("/auth", authenticateClientController.handle)

export { routes };