import { user, product, cartItem } from "@/db/schema";

export type User = typeof user.$inferSelect;
export type Product = typeof product.$inferSelect;
export type CartItem = typeof cartItem.$inferSelect;
