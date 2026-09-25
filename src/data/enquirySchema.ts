import { z } from "zod";

export const enquirySchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Full name is required.")
    .regex(/^[a-zA-Z\s.]+$/, "Name must contain only alphabets."),

  phone: z
    .string()
    .trim()
    .regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit mobile number."),

  email: z
    .string()
    .trim()
    .email("Please enter a valid email address."),

  course: z
    .string()
    .trim()
    .min(1, "Please select a program / course."),

  address: z
    .string()
    .trim()
    .optional()
    .or(z.literal("")),

  message: z
    .string()
    .trim()
    .min(10, "Please describe your enquiry in detail (at least 10 characters)."),
});

export type EnquiryFormData = z.infer<typeof enquirySchema>;
