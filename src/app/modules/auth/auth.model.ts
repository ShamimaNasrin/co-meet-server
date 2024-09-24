import { Schema, model } from "mongoose";
import { TAuth } from "./auth.interface";

// create schema for auth
const authSchema = new Schema<TAuth>({
  isDeleted: {
    type: Boolean,
    default: false,
  },
});

// create model for auth
export const AuthModel = model<TAuth>("Authing", authSchema);
