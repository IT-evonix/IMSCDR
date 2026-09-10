import { z } from "zod";

export const grievanceSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Full name is required.")
    .regex(/^[a-zA-Z\s.]+$/, "Name must contain only alphabets."),

  mobile: z
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
    .min(1, "Please select your course."),

  complaintShort: z
    .string()
    .trim()
    .min(3, "Complaint in short must be at least 3 characters.")
    .max(200, "Complaint in short must not exceed 200 characters."),

  complaintDetail: z
    .string()
    .trim()
    .min(10, "Please describe your complaint in detail (at least 10 characters)."),
});

export type GrievanceFormData = z.infer<typeof grievanceSchema>;
