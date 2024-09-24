import { Schema, model } from "mongoose";
import { TSlot } from "./slot.interface";

// create schema for slot
const slotSchema = new Schema<TSlot>({
  isDeleted: {
    type: Boolean,
    default: false,
  },
});

// create model for slot
export const SlotModel = model<TSlot>("Slot", slotSchema);
