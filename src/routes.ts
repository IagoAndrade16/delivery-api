import { Router } from "express";
import { CreateClientController } from "./modules/clients/controllers/CreateClientController";
import { AuthenticateClientController } from "./modules/auth/controllers/AuthenticateClientController";
import { CreateDeliverymanController } from "./modules/deliveryman/controllers/CreateDeliverymanController";
import { AuthenticateDeliverymanController } from "./modules/auth/controllers/AuthenticateDeliverymanController";
import { CreateDeliveryController } from "./modules/deliveries/controllers/CreateDeliveryController";
import { ensureAuthenticateClient } from "./middlewares/ensureAuthenticateClient";
import { FindALLWithoutEndDateController } from "./modules/deliveries/controllers/FindAllWithoutEndDateController";
import { ensureAuthenticateDeliveryman } from "./middlewares/ensureAuthenticateDeliveryman";
import { UpdateDeliverymanController } from "./modules/deliveries/controllers/UpdateDeliverymanController";
import { FindAllDeliveriesController } from "./modules/clients/controllers/FindAllDeliveriesController";
import { FindAllDeliveriesDeliverymanController } from "./modules/deliveryman/controllers/FindAllDeliveriesController";

const routes = Router();

const createClientController = new CreateClientController();
const authenticateClientController = new AuthenticateClientController();
const createDeliverymanController = new CreateDeliverymanController();
const authenticateDeliverymanController = new AuthenticateDeliverymanController();
const createDeliverymController = new CreateDeliveryController();
const findAllWithoutEndDateController = new FindALLWithoutEndDateController()
const updateDeliverymanController = new UpdateDeliverymanController()
const findAllDeliveriesClientController = new FindAllDeliveriesController();
const findAllDeliveriesDeliverymanController = new FindAllDeliveriesDeliverymanController();

routes.post("/client/auth", authenticateClientController.handle)
routes.post("/deliveryman/auth", authenticateDeliverymanController.handle)

routes.post("/client", createClientController.handle)
routes.post("/deliveryman", createDeliverymanController.handle)
routes.post("/delivery", ensureAuthenticateClient, createDeliverymController.handle)


routes.get("/delivery/available", ensureAuthenticateDeliveryman, findAllWithoutEndDateController.handle)
routes.get("/client/deliveries", ensureAuthenticateClient, findAllDeliveriesClientController.handle)
routes.get("/deliveryman/deliveries", ensureAuthenticateDeliveryman, findAllDeliveriesDeliverymanController.handle)

routes.put("/delivery/update-deliveryman/:id_delivery", ensureAuthenticateDeliveryman, updateDeliverymanController.handle)


export { routes };