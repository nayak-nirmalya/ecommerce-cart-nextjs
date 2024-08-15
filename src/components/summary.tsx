"use client";

import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { DISCOUNT, GST, HANDLING_CHARGE, SHIPPING_COST } from "@/constants";

export function Summary({ itemsTotal }: { itemsTotal: string }) {
  const total =
    Number(itemsTotal) +
    Number(SHIPPING_COST) +
    Number(HANDLING_CHARGE) +
    Number(GST) -
    Number(DISCOUNT);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex gap-1 flex-col items-center justify-center w-96 border-2 rounded-lg">
        <p className="text-xl md:text-2xl lg:text-3xl font-bold mt-2">
          Summary
        </p>
        <Separator className="w-4/5 my-2" />
        <div className="flex w-full px-5 flex-row items-center justify-between">
          <p>Items total:</p>
          <p>₹{itemsTotal}</p>
        </div>
        <div className="flex w-full px-5 flex-row items-center justify-between">
          <p>Shipping cost:</p>
          <p>+ ₹{SHIPPING_COST}</p>
        </div>
        <div className="flex w-full px-5 flex-row items-center justify-between">
          <p>Handling charge:</p>
          <p>+ ₹{HANDLING_CHARGE}</p>
        </div>
        <Separator className="w-4/5" />
        <div className="flex w-full px-5 flex-row items-center justify-between">
          <p>GST:</p>
          <p>+ ₹{GST}</p>
        </div>
        <Separator className="w-4/5" />
        <div className="flex w-full px-5 flex-row items-center justify-between">
          <p>Discount:</p>
          <p>- ₹{DISCOUNT}</p>
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
