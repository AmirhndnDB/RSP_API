import express, { Router} from "express";
import { authController } from "./controller.js";
import { validator } from "./validator.js";

const router: Router = express.Router();

router.post(
  "/register",
  ...validator.registerValidator(),
  authController.validate,
  authController.register
);

router.post(
  "/login",
  ...validator.loginValidator(),
  authController.validate,
  authController.login
);

export default router;
