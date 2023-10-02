import { z } from "zod";
export const formSchema = z.object({
  email: z.string().email(),
  message: z.string()
});
export type FormSchema = typeof formSchema;