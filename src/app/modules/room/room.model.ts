import { Schema, model } from "mongoose";
import { TRoom } from "./room.interface";

// create schema for room
const roomSchema = new Schema<TRoom>({
  isDeleted: {
    type: Boolean,
    default: false,
  },
});

// create model for room
export const RoomModel = model<TRoom>("Room", roomSchema);
