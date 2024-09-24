import { z } from "zod";

// Define the Product schema
const userValidationSchema = z.object({
  isDeleted: z.boolean().default(false),
});

export { userValidationSchema };
