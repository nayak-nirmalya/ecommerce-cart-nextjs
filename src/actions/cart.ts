"use server";

import { currentUser } from "@clerk/nextjs/server";
import { and, eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

import { cartItem } from "@/db/schema";
import { db } from "@/db/drizzle";

export async function addToCart(productId: number) {
  const signedInUser = await currentUser();
  if (!signedInUser) {
    throw new Error("Unauthorized!");
  }
  const userId = signedInUser.id;

  const [cart] = await db
    .select()
    .from(cartItem)
    .where(and(eq(cartItem.userId, userId), eq(cartItem.productId, productId)));

  if (!cart) {
    await db.insert(cartItem).values({
      userId,
      productId,
      quantity: 1,
    });
  } else {
    await db
      .update(cartItem)
      .set({
        quantity: cart.quantity + 1,
      })
      .where(
        and(eq(cartItem.userId, userId), eq(cartItem.productId, productId))
      );
  }

  revalidatePath("/products");
}
