import { z } from "zod";

// Define the room schema
const roomValidationSchema = z.object({
  isDeleted: z.boolean().default(false),
});

export { roomValidationSchema };
