import { Router } from "express";
import { CreateClientController } from "./modules/clients/controllers/CreateClientController";
import { AuthenticateClientController } from "./modules/auth/controllers/AuthenticateClientController";
import { CreateDeliverymanController } from "./modules/deliveryman/controllers/CreateDeliverymanController";
import { AuthenticateDeliverymanController } from "./modules/auth/controllers/AuthenticateDeliverymanController";
import { CreateDeliveryController } from "./modules/deliveries/controllers/CreateDeliveryController";

const routes = Router();

const createClientController = new CreateClientController();
const authenticateClientController = new AuthenticateClientController();
const createDeliverymanController = new CreateDeliverymanController();
const authenticateDeliverymanController = new AuthenticateDeliverymanController();
const createDeliverymController = new CreateDeliveryController();

routes.post("/client/auth", authenticateClientController.handle)
routes.post("/deliveryman/auth", authenticateDeliverymanController.handle)

routes.post("/client", createClientController.handle)
routes.post("/deliveryman", createDeliverymanController.handle)
routes.post("/delivery", createDeliverymController.handle)


export { routes };