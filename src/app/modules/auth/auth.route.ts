import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { AuthControllers } from "./auth.controller";
import { AuthValidation } from "./auth.validation";
import { userValidationSchema } from "../user/user.validation";
import { UserControllers } from "../user/user.controller";

const router = express.Router();

// login route
router.post(
  "/login",
  validateRequest(AuthValidation.loginValidationSchema),
  AuthControllers.loginUser
);

router.post(
  "/refresh-token",
  validateRequest(AuthValidation.refreshTokenValidationSchema),
  AuthControllers.refreshToken
);

// create user
router.post(
  "/signup",
  validateRequest(userValidationSchema),
  UserControllers.signUp
);

export const AuthRoutes = router;
