import catchAsync from "../../utils/catchAsync";
import { UserServices } from "./user.service";
import httpStatus from "http-status";
import sendResponse from "../../utils/sendResponse";

const signUp = catchAsync(async (req, res) => {
  const result = await UserServices.createUser(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "User registered successfully",
    data: result,
  });
});

export const UserControllers = { signUp };
