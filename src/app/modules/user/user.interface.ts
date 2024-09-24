import { USER_ROLE } from "./user.constant";

// User Interface
export interface TUser {
  name: string;
  email: string;
  password: string;
  phone: string;
  address: string;
  role: "user" | "admin";
  isDeleted: boolean;
}

export type TUserRole = keyof typeof USER_ROLE;
