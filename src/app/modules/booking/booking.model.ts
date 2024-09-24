import { Schema, model } from "mongoose";
import { TBooking } from "./booking.interface";

// create schema for booking
const bookingSchema = new Schema<TBooking>({
  isDeleted: {
    type: Boolean,
    default: false,
  },
});

// create model for booking
export const BookingModel = model<TBooking>("Booking", bookingSchema);
