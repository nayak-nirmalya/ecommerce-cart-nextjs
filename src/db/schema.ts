import {
  pgTable,
  serial,
  text,
  integer,
  decimal,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

export const product = pgTable("product", {
  id: serial("product_id").primaryKey(),
  name: text("name").notNull(),
  image: text("image").notNull(),
  description: text("description").notNull(),
  price: decimal("price", { precision: 10, scale: 2 }).notNull(),
});

export const user = pgTable("user", {
  id: varchar("user_id", { length: 64 }).primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
});

export const cartItem = pgTable("cart_item", {
  id: serial("cart_id").primaryKey(),
  userId: varchar("user_id", { length: 64 })
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
  productId: integer("product_id")
    .notNull()
    .references(() => product.id, { onDelete: "cascade" }),
  quantity: integer("quantity").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});
