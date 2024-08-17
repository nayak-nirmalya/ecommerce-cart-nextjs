"use client";

import Image from "next/image";
import { Minus, Plus, LoaderIcon, Trash2 } from "lucide-react";
import { useTransition } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import {
  addToCart,
  deleteProductFromCart,
  removeFromCart,
} from "@/actions/cart";
import { formatPriceToINR } from "@/lib/utils";

export function CartItem({
  id,
  image,
  name,
  price,
  quantity,
  totalPriceByProduct,
}: {
  id: number;
  name: string;
  price: string;
  quantity: number;
  totalPriceByProduct: number;
  image: string;
}) {
  return (
    <div className="flex max-w-screen-lg flex-row border-2 rounded-lg p-2 md:p-4 lg:p-6 items-center justify-evenly gap-2">
      <Image
        width={200}
        height={200}
        src={image}
        alt={name}
        className="w-20 h-20 object-cover rounded"
      />
      <div className="flex flex-col text-center w-40 lg:w-96 md:w-80 gap-1">
        <h2 className="line-clamp-2 text-sm lg:text-lg md:text-lg font-bold flex-1">
          {name}
        </h2>
        <p className="text-sm text-gray-500">
          {formatPriceToINR(Number(price))}
        </p>
      </div>
      <div className="flex flex-row gap-2 justify-center items-center">
        <div className="flex flex-col-reverse md:flex-row lg:flex-row items-center justify-center">
          <RemoveFromCart id={id} />
          <p className="text-base lg:text-xl m-1.5 lg:m-2.5 font-semibold md:font-bold lg:font-extrabold">
            {quantity}
          </p>
          <AddToCart id={id} />
        </div>
        <DeleteFromCart id={id} />
      </div>
      <p className="text-sm font-semibold text-center w-[80px] lg:font-bold items-center justify-center text-gray-500">
        {formatPriceToINR(Number(totalPriceByProduct))}
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
      className="rounded-full h-6 w-6 lg:h-8 lg:w-8"
      size="icon"
    >
      {isPending ? (
        <LoaderIcon className="animate-spin h-3 w-3 lg:h-4 lg:w-4" />
      ) : (
        <Plus className="h-3 w-3 lg:h-4 lg:w-4" />
      )}
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
      className="rounded-full h-6 w-6 lg:h-8 lg:w-8"
      size="icon"
    >
      {isPending ? (
        <LoaderIcon className="animate-spin h-3 w-3 lg:h-4 lg:w-4" />
      ) : (
        <Minus className="h-3 w-3 lg:h-4 lg:w-4" />
      )}
    </Button>
  );
}

function DeleteFromCart({ id }: { id: number }) {
  const [isPending, startTransition] = useTransition();

  const handleDeleteFromCart = () => {
    startTransition(async () => {
      await deleteProductFromCart(id);
      toast("Item deleted from cart.");
    });
  };

  return (
    <Button
      disabled={isPending}
      onClick={handleDeleteFromCart}
      variant="destructive"
      className="rounded-full h-6 w-6 lg:h-8 lg:w-8"
      size="icon"
    >
      {isPending ? (
        <LoaderIcon className="animate-spin h-3 w-3 lg:h-4 lg:w-4" />
      ) : (
        <Trash2 className="h-3 w-3 lg:h-4 lg:w-4" />
      )}
    </Button>
  );
}

export function CartItemSkeleton() {
  return (
    <div className="flex max-w-screen-lg flex-row border-2 rounded-lg p-2 md:p-4 lg:p-6 items-center justify-evenly gap-2">
      <Skeleton className="w-20 h-20" />
      <div className="flex flex-col items-center justify-center w-40 lg:w-96 md:w-80 gap-2">
        <Skeleton className="w-36 h-7 lg:h-8 lg:w-64" />
        <Skeleton className="w-16 h-5 lg:w-28 lg:h-6" />
      </div>
      <div className="flex flex-row gap-2 justify-center items-center">
        <div className="flex flex-col-reverse md:flex-row lg:flex-row items-center justify-center gap-1">
          <Skeleton className="rounded-full h-6 w-6 lg:h-8 lg:w-8" />
          <Skeleton className="rounded-full h-6 w-6 lg:h-8 lg:w-8" />
          <Skeleton className="rounded-full h-6 w-6 lg:h-8 lg:w-8" />
        </div>
        <Skeleton className="rounded-full h-6 w-6 lg:h-8 lg:w-8" />
      </div>
      <Skeleton className="w-16 h-5 lg:w-28 lg:h-6" />
    </div>
  );
}
