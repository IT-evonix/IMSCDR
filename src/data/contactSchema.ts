import { z } from "zod";

export const contactSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(2, "First name is required.")
    .regex(/^[a-zA-Z\s]+$/, "First name must contain only alphabets."),

  lastName: z
    .string()
    .trim()
    .min(2, "Last name is required.")
    .regex(/^[a-zA-Z\s]+$/, "Last name must contain only alphabets."),

  email: z
    .string()
    .trim()
    .email("Please enter a valid email address."),

  mobile: z
    .string()
    .trim()
    .regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit mobile number."),

  subject: z
    .string()
    .trim()
    .min(5, "Subject must be at least 5 characters."),

  message: z
    .string()
    .trim()
    .min(10, "Message should be at least 10 characters."),
});

export type ContactFormData = z.infer<typeof contactSchema>;