/* eslint-disable @typescript-eslint/no-explicit-any */
import { TUser } from "./user.interface";
import { User } from "./user.model";

// create User function
const createUser = async (userData: any) => {
  const role = userData.role || "user";
  const result = await User.create({ ...userData, role });

  return {
    _id: result._id,
    name: result.name,
    email: result.email,
    phone: result.phone,
    address: result.address,
    role: result.role,
  };
};

// get a single User

// get all Users inclusding sorting, searching, filtering

// delete a User

// update a single User

export const UserServices = { createUser };
