"use client";

import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { DISCOUNT, GST, HANDLING_CHARGE, SHIPPING_COST } from "@/constants";

export function Summary({ itemsTotal }: { itemsTotal: number }) {
  const total = itemsTotal + SHIPPING_COST + HANDLING_CHARGE + GST - DISCOUNT;

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex gap-1 flex-col items-center justify-center w-96 border-2 rounded-lg">
        <p className="text-xl md:text-2xl lg:text-3xl font-bold mt-2">
          Summary
        </p>
        <Separator className="w-4/5 my-2" />
        <div className="flex w-full px-5 flex-row items-center justify-between">
          <p>Items total:</p>
          <p>₹{itemsTotal.toFixed(2)}</p>
        </div>
        <div className="flex w-full px-5 flex-row items-center justify-between">
          <p>Shipping cost:</p>
          <p>+ ₹{SHIPPING_COST.toFixed(2)}</p>
        </div>
        <div className="flex w-full px-5 flex-row items-center justify-between">
          <p>Handling charge:</p>
          <p>+ ₹{HANDLING_CHARGE.toFixed(2)}</p>
        </div>
        <Separator className="w-4/5" />
        <div className="flex w-full px-5 flex-row items-center justify-between">
          <p>GST:</p>
          <p>+ ₹{GST.toFixed(2)}</p>
        </div>
        <Separator className="w-4/5" />
        <div className="flex w-full px-5 flex-row items-center justify-between">
          <p>Discount:</p>
          <p>- ₹{DISCOUNT.toFixed(2)}</p>
        </div>
        <Separator className="w-4/5" />
        <div className="flex font-bold w-full px-5 flex-row items-center justify-between">
          <p>Order total:</p>
          <p>₹{total.toFixed(2)}</p>
        </div>
        <Button onClick={() => toast("Order Placed!")} className="w-4/6 m-2">
          Checkout
        </Button>
      </div>
    </div>
  );
}
