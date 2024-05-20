import { Router } from "express";

import validationMiddleware from "../middleware/validationMiddleware";
import userValidator from "../validators/userValidator";
import { createUser } from "../use-cases/users/createUser";
import { login } from "../use-cases/login/login";

const router = Router();

router.post(
  "/register",
  validationMiddleware(userValidator.create),
  createUser,
);
router.post("/login", login);

export default router;
