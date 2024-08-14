"use server";

import { auth } from "@clerk/nextjs/server";
import { and, eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

import { cartItem } from "@/db/schema";
import { db } from "@/db/drizzle";

export async function addToCart(productId: number) {
  const { userId } = auth();
  if (!userId) {
    throw new Error("Unauthorized!");
  }

  const [cart] = await db
    .select({ quantity: cartItem.quantity })
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

  revalidatePath("/(protected)", "layout");
}

export async function removeFromCart(productId: number) {
  const { userId } = auth();
  if (!userId) {
    throw new Error("Unauthorized!");
  }

  const [cart] = await db
    .select({ quantity: cartItem.quantity })
    .from(cartItem)
    .where(and(eq(cartItem.userId, userId), eq(cartItem.productId, productId)));

  if (cart.quantity === 1) {
    await db
      .delete(cartItem)
      .where(
        and(eq(cartItem.userId, userId), eq(cartItem.productId, productId))
      );
  } else {
    await db
      .update(cartItem)
      .set({
        quantity: cart.quantity - 1,
      })
      .where(
        and(eq(cartItem.userId, userId), eq(cartItem.productId, productId))
      );
  }

  revalidatePath("/(protected)", "layout");
}
