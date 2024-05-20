import { Router } from "express";

import validationMiddleware from "../middleware/validationMiddleware";
import clientValidator from "../validators/clientValidator";
import { createClient } from "../use-cases/clients/createClient";
import { getClients } from "../use-cases/clients/getClients";
import { getClient } from "../use-cases/clients/getClient";
import { deleteClient } from "../use-cases/clients/deleteClient";
import { updateClient } from "../use-cases/clients/updateClients";
import { authMiddleware } from "../middleware/authMiddleware";

const router = Router();

router.post(
  "/",
  authMiddleware,
  validationMiddleware(clientValidator.create),
  createClient,
);
router.get("/", authMiddleware, getClients);
router.get("/:id", authMiddleware, getClient);
router.patch(
  "/:id",
  authMiddleware,
  validationMiddleware(clientValidator.update),
  updateClient,
);
router.delete("/:id", authMiddleware, deleteClient);

export default router;
