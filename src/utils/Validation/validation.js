import z from "zod";

export const productSchema = z.object({
  name: z.string().min(1, "Product name is required"),
  description: z.string().min(1, "Description is required"),
  price: z
    .number({ invalid_type_error: "Price must be a number" })
    .positive("Price must be greater than 0"),
  category: z.string().min(1, "Category is required"),
  stock: z
    .number({ invalid_type_error: "Stock must be a number" })
    .nonnegative("Stock cannot be negative"),
  section: z.string().min(1, "Section is required"), // ✅ section validation
  images: z
    .any()
    .refine((files) => files && files.length > 0, {
      message: "At least one image is required",
    })
    .refine((files) => files && files.length <= 4, {
      message: "You can only upload a maximum of 4 images",
    }),
});
export const loginSchema = z.object({
  email: z
    .string()
    .nonempty("Email is required")
    .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid email format"),
  password: z
    .string()
    .nonempty("Password is required")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Password must be at least 8 characters, include uppercase, lowercase, number, and special character"
    ),
});
