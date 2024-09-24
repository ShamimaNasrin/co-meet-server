import { Schema, model } from "mongoose";
import { TUser } from "./user.interface";

// create schema for User
const userSchema = new Schema<TUser>({
  isDeleted: {
    type: Boolean,
    default: false,
  },
});

// create model for User
export const UserModel = model<TUser>("User", userSchema);
