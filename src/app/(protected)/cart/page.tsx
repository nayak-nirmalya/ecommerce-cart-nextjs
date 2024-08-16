import Link from "next/link";
import { auth } from "@clerk/nextjs/server";
import { eq, sql, sum } from "drizzle-orm";

import { db } from "@/db/drizzle";
import { cartItem, product } from "@/db/schema";
import { CartItem } from "@/components/cart-item";
import { Summary } from "@/components/summary";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

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
    .orderBy(product.id)
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
          <Summary itemsTotal={Number(totalSum.sumTotalPrice!)} />
        </>
      ) : (
        <div className="flex flex-col items-center justify-center">
          <p className="font-semibold text-zinc-500">Nothing in your cart!</p>
          <p className="text-zinc-500">
            Go to{" "}
            <Link
              className={cn(
                buttonVariants({ variant: "link" }),
                "underline p-0"
              )}
              href="/products"
            >
              products
            </Link>{" "}
            and add some to your cart.
          </p>
        </div>
      )}
    </>
  );
}
