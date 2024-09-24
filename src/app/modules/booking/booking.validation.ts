import { z } from "zod";

// Define the Product schema
const bookingValidationSchema = z.object({
  isDeleted: z.boolean().default(false),
});

export { bookingValidationSchema };
