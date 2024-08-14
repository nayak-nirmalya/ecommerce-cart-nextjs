import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { auth } from "@clerk/nextjs/server";
import { eq, sum } from "drizzle-orm";

import { cartItem } from "@/db/schema";
import { db } from "@/db/drizzle";

export async function CartIcon() {
  const { userId } = auth();
  if (!userId) {
    throw new Error("Unauthorized!");
  }

  const [items] = await db
    .select({ count: sum(cartItem.quantity) })
    .from(cartItem)
    .where(eq(cartItem.userId, userId));
  const cartItemCount = parseInt(items?.count || "0", 10);

  return (
    <Link href="/cart">
      <ShoppingCart className="relative" />
      {cartItemCount > 0 && (
        <div className="absolute top-2 text-xs right-12 rounded-full bg-primary text-white w-5 h-5 flex items-center justify-center">
          {cartItemCount}
        </div>
      )}
    </Link>
  );
}
