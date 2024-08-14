"use client";

import React from "react";
import Image from "next/image";
import { Minus, Plus } from "lucide-react";
import { useTransition } from "react";
import { LoaderIcon } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { addToCart, removeFromCart } from "@/actions/cart";

export function CartItem({
  id,
  image,
  name,
  price,
  quantity,
}: {
  id: number;
  name: string;
  price: string;
  quantity: number;
  image: string;
}) {
  return (
    <div className="flex flex-row border-2 rounded-lg p-2 md:p-4 lg:p-6 items-center justify-evenly gap-2">
      <Image
        width={200}
        height={200}
        src={image}
        alt={name}
        className="w-20 h-20 object-cover rounded"
      />
      <h2 className="text-center text-lg font-bold w-80">{name}</h2>
      <div className="flex flex-row items-center justify-center">
        <RemoveFromCart id={id} />
        <p className="text-xl m-2.5 font-extrabold">{quantity}</p>
        <AddToCart id={id} />
      </div>
      <p className="text-sm font-bold items-center justify-center text-gray-500">
        ₹{parseInt(price) * quantity}
      </p>
    </div>
  );
}

function AddToCart({ id }: { id: number }) {
  const [isPending, startTransition] = useTransition();

  const handleAddToCart = () => {
    startTransition(async () => {
      await addToCart(id);
      toast("Item added to cart.");
    });
  };

  return (
    <Button
      disabled={isPending}
      onClick={handleAddToCart}
      variant="default"
      className="rounded-full"
      size="icon"
    >
      {isPending ? <LoaderIcon className="animate-spin" /> : <Plus />}
    </Button>
  );
}

function RemoveFromCart({ id }: { id: number }) {
  const [isPending, startTransition] = useTransition();

  const handleRemoveFromCart = () => {
    startTransition(async () => {
      await removeFromCart(id);
      toast("Item removed from cart.");
    });
  };

  return (
    <Button
      disabled={isPending}
      onClick={handleRemoveFromCart}
      variant="destructive"
      className="rounded-full"
      size="icon"
    >
      {isPending ? <LoaderIcon className="animate-spin" /> : <Minus />}
    </Button>
  );
}
