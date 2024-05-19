import { Router } from "express";

import validationMiddleware from "../middleware/validationMiddleware";
import clientValidator from "../validators/clientValidator";
import { createClient } from "../use-cases/clients/createClient";
import { getClients } from "../use-cases/clients/getClients";
import { getClient } from "../use-cases/clients/getClient";
import { deleteClient } from "../use-cases/clients/deleteClient";
import { updateClient } from "../use-cases/clients/updateClients";

const router = Router();

router.post("/", validationMiddleware(clientValidator.create), createClient);
router.get("/", getClients);
router.get("/:id", getClient);
router.patch("/:id", validationMiddleware(clientValidator.update), updateClient);
router.delete("/:id", deleteClient);

export default router;
