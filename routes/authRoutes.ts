import { Router } from "express";

import validationMiddleware from "../middleware/validationMiddleware";
import userValidator from "../validators/userValidator";
import { createUser } from "../use-cases/register/createUser";

const router = Router();

router.post(
  "/register",
  validationMiddleware(userValidator.create),
  createUser,
);

export default router;
