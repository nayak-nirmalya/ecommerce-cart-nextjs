import { auth } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";

import { db } from "@/db/drizzle";
import { cartItem, product } from "@/db/schema";
import { CartItem } from "@/components/cart-item";

export default async function CartPage() {
  const { userId } = auth();
  if (!userId) {
    throw new Error("Unauthorized!");
  }

  const cartItems = await db
    .select({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: cartItem.quantity,
      image: product.image,
    })
    .from(cartItem)
    .where(eq(cartItem.userId, userId))
    .innerJoin(product, eq(cartItem.productId, product.id));

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mt-2">Shopping Cart</h1>
      <div className="flex flex-col my-6 mx-1 max-w-screen-2xl md:w-4/5 lg:w-3/5 gap-2 md:gap-4 lg:gap-6">
        {cartItems.length >= 1
          ? cartItems.map(({ id, name, price, quantity, image }) => (
              <CartItem
                key={id}
                id={id}
                name={name}
                price={price}
                quantity={quantity}
                image={image}
              />
            ))
          : "Empty"}
      </div>
    </div>
  );
}
