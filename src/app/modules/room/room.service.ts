/* eslint-disable @typescript-eslint/no-explicit-any */
import { Types } from "mongoose";
import { TRoom } from "./room.interface";
import { RoomModel } from "./room.model";
import QueryBuilder from "./room.utils";

// create room function
const createARoom = async (payload: TRoom) => {
  const result = await RoomModel.create(payload);
  console.log("result:", result);
  return result;
};

// get all room inclusding sorting, searching, filtering
const getAllRoom = async (queryParams: Record<string, unknown>) => {
  const roomQueryBuilder = new QueryBuilder(
    RoomModel.find({ isDeleted: false }),
    queryParams
  );

  roomQueryBuilder.search(["name"]).filter().sort().paginate().fields();

  const result = await roomQueryBuilder.modelQuery;
  const paginationMeta = await roomQueryBuilder.countTotal();

  return {
    result,
    paginationMeta,
  };
};

// get a single room
const getSingleRoom = async (_id: string) => {
  const result = await RoomModel.findOne({ _id });
  return result;
};

// delete a room
const deleteARoom = async (_id: string) => {
  const result = await RoomModel.findByIdAndUpdate(
    _id,
    { isDeleted: true },
    { new: true }
  );
  return result;
};

// update a single room
const updateARoom = async (
  _id: Types.ObjectId,
  data: Partial<TRoom>
): Promise<TRoom | null> => {
  const result = await RoomModel.findByIdAndUpdate(_id, data, {
    new: true,
  });
  return result;
};

export const RoomServices = {
  createARoom,
  getAllRoom,
  getSingleRoom,
  deleteARoom,
  updateARoom,
};
