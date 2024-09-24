import { z } from "zod";

// Define the Auth schema
const authValidationSchema = z.object({
  isDeleted: z.boolean().default(false),
});

export { authValidationSchema };
