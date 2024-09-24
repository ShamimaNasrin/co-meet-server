import { z } from "zod";

// Define the slot schema
const slotValidationSchema = z.object({
  isDeleted: z.boolean().default(false),
});

export { slotValidationSchema };
