import { auth } from "@clerk/nextjs/server";
import { eq, sql, sum } from "drizzle-orm";

import { db } from "@/db/drizzle";
import { cartItem, product } from "@/db/schema";
import { CartItem } from "@/components/cart-item";
import { Summary } from "@/components/summary";

export default async function CartPage() {
  const { userId } = auth();
  if (!userId) {
    throw new Error("Unauthorized!");
  }

  const cartItemsQuery = db
    .select({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: cartItem.quantity,
      image: product.image,
      totalPriceByProduct: sql<number>`${product.price} * ${cartItem.quantity}`,
    })
    .from(cartItem)
    .where(eq(cartItem.userId, userId))
    .innerJoin(product, eq(cartItem.productId, product.id));

  const sumQuery = db
    .select({
      sumTotalPrice: sum(sql<number>`${product.price} * ${cartItem.quantity}`),
    })
    .from(cartItem)
    .where(eq(cartItem.userId, userId))
    .innerJoin(product, eq(cartItem.productId, product.id));

  const [cartItems, [totalSum]] = await Promise.all([cartItemsQuery, sumQuery]);

  return (
    <>
      {cartItems.length >= 1 ? (
        <>
          {cartItems.map(
            ({ id, name, price, quantity, image, totalPriceByProduct }) => (
              <CartItem
                key={id}
                id={id}
                name={name}
                price={price}
                quantity={quantity}
                image={image}
                totalPriceByProduct={totalPriceByProduct}
              />
            )
          )}
          <Summary itemsTotal={totalSum.sumTotalPrice!} />
        </>
      ) : (
        "Empty"
      )}
    </>
  );
}
