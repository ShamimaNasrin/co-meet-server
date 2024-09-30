import express from "express";
import { UserControllers } from "./user.controller";
import validateRequest from "../../middlewares/validateRequest";
import { userValidationSchema } from "./user.validation";

const router = express.Router();

// // create user
// router.post(
//   "/signup",
//   validateRequest(userValidationSchema),
//   UserControllers.signUp
// );

export const UserRoutes = router;
