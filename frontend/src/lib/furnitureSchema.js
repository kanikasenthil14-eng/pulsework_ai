
import { z } from "zod";

const furnitureSchema = z.object({

    Name: z.string()
        .min(3, "Furniture name must be at least 3 characters")
        .max(50, "Furniture name is too long")
        .trim(),

    condition: z.enum(["Excellent", "Good", "Fair"], {
        message: "Please select the furniture condition"
    }),

    material: z.string()
        .min(2, "Please enter the material")
        .trim(),

    price: z.coerce.number({
        message: "Price must be a number"
    })
        .positive("Price must be greater than 0"),

    dimensions: z.string()
        .min(3, "Please enter the furniture dimensions")
        .trim()

});

export default furnitureSchema;
