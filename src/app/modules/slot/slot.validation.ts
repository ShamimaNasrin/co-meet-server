import { z } from "zod";

const objectIdRegex = /^[a-f\d]{24}$/i;
const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
const timeRegex = /^\d{2}:\d{2}$/;

// Define the slot schema
const createSlotValidationSchema = z.object({
  body: z.object({
    room: z
      .string()
      .regex(objectIdRegex, { message: "Invalid room ID" })
      .nonempty({ message: "Room ID is required" }),
    date: z.string().regex(dateRegex, {
      message: "Date must be in YYYY-MM-DD format",
    }),
    startTime: z.string().regex(timeRegex, {
      message: "Start Time is required",
    }),
    endTime: z.string().regex(timeRegex, {
      message: "End Time is required",
    }),
    isBooked: z.boolean().default(false),
    isDeleted: z.boolean().default(false),
  }),
});

const updateSlotValidationSchema = z.object({
  body: z.object({
    room: z
      .string()
      .regex(objectIdRegex, { message: "Invalid room ID" })
      .nonempty({ message: "Room ID is required" })
      .optional(),
    date: z
      .string()
      .regex(dateRegex, {
        message: "Date must be in YYYY-MM-DD format",
      })
      .optional(),
    startTime: z
      .string()
      .regex(timeRegex, {
        message: "Start Time is required",
      })
      .optional(),
    endTime: z
      .string()
      .regex(timeRegex, {
        message: "End Time is required",
      })
      .optional(),
    isBooked: z.boolean().default(false).optional(),
    isDeleted: z.boolean().default(false).optional(),
  }),
});
export { updateSlotValidationSchema, createSlotValidationSchema };
