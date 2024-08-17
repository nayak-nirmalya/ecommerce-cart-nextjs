"use client";

import { toast } from "sonner";
import { useTransition } from "react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { DISCOUNT, GST, HANDLING_CHARGE, SHIPPING_COST } from "@/constants";
import { formatPriceToINR } from "@/lib/utils";
import { clearCart } from "@/actions/cart";

export function Summary({ itemsTotal }: { itemsTotal: number }) {
  const total = itemsTotal + SHIPPING_COST + HANDLING_CHARGE + GST - DISCOUNT;

  const [isPending, startTransition] = useTransition();

  const handleCheckout = () => {
    startTransition(async () => {
      await clearCart();
      toast("Order Placed.");
    });
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex gap-1 flex-col items-center justify-center w-96 border-2 rounded-lg">
        <p className="text-xl md:text-2xl lg:text-3xl font-bold mt-2">
          Summary
        </p>
        <Separator className="w-4/5 my-2" />
        <div className="flex w-full px-5 flex-row items-center justify-between">
          <p>Items total:</p>
          <p>{formatPriceToINR(itemsTotal)}</p>
        </div>
        <div className="flex w-full px-5 flex-row items-center justify-between">
          <p>Shipping cost:</p>
          <p>+ {formatPriceToINR(SHIPPING_COST)}</p>
        </div>
        <div className="flex w-full px-5 flex-row items-center justify-between">
          <p>Handling charge:</p>
          <p>+ {formatPriceToINR(HANDLING_CHARGE)}</p>
        </div>
        <Separator className="w-4/5" />
        <div className="flex w-full px-5 flex-row items-center justify-between">
          <p>GST:</p>
          <p>+ {formatPriceToINR(GST)}</p>
        </div>
        <Separator className="w-4/5" />
        <div className="flex w-full px-5 flex-row items-center justify-between">
          <p>Discount:</p>
          <p>- {formatPriceToINR(DISCOUNT)}</p>
        </div>
        <Separator className="w-4/5" />
        <div className="flex font-bold w-full px-5 flex-row items-center justify-between">
          <p>Order total:</p>
          <p>{formatPriceToINR(total)}</p>
        </div>
        <Button
          onClick={handleCheckout}
          disabled={isPending}
          className="w-4/6 m-2"
        >
          {isPending ? "Checking Out..." : "Checkout"}
        </Button>
      </div>
    </div>
  );
}
