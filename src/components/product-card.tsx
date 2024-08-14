"use client";

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogImage,
  DialogSubtitle,
  DialogClose,
  DialogDescription,
  DialogContainer,
} from "@/components/core/dialog";
import { useTransition } from "react";
import { LoaderIcon } from "lucide-react";
import { toast } from "sonner";

import { Product } from "@/types";
import { addToCart } from "@/actions/cart";
import { Button } from "@/components/ui/button";

export function ProductCard({ id, name, image, description, price }: Product) {
  const [isPending, startTransition] = useTransition();

  const handleAddToCart = () => {
    startTransition(async () => {
      await addToCart(id);
      toast("Item added to cart.");
    });
  };

  return (
    <Dialog
      transition={{
        type: "spring",
        bounce: 0.05,
        duration: 0.25,
      }}
    >
      <DialogTrigger
        style={{
          borderRadius: "12px",
        }}
        className="flex drop-shadow-lg max-w-[270px] flex-col overflow-hidden border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900"
      >
        <DialogImage
          src={image}
          alt={name}
          className="h-48 w-full object-cover"
        />
        <div className="flex flex-grow flex-row items-end justify-between p-2">
          <div>
            <DialogTitle className="text-zinc-950 dark:text-zinc-50 line-clamp-1">
              {name}
            </DialogTitle>
            <DialogSubtitle className="text-zinc-700 dark:text-zinc-400 line-clamp-1">
              ₹{price}
            </DialogSubtitle>
          </div>
        </div>
      </DialogTrigger>
      <DialogContainer>
        <DialogContent
          style={{
            borderRadius: "24px",
          }}
          className="mx-1 pointer-events-auto relative flex w-full md:w-[450px] lg:w-[450px] flex-col overflow-hidden border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900"
        >
          <DialogImage
            src={image}
            alt={description}
            className="h-full w-full"
          />
          <div className="p-4 relative">
            <Button
              disabled={isPending}
              onClick={handleAddToCart}
              aria-label="Add to cart"
              className="absolute -top-14 right-6"
            >
              {isPending ? "Adding..." : "Add to Cart"}
              {isPending && (
                <LoaderIcon className="ml-2 h-4 w-4 animate-spin" />
              )}
            </Button>
            <DialogTitle className="text-xl text-zinc-950 dark:text-zinc-50">
              {name}
            </DialogTitle>
            <DialogSubtitle className="text-zinc-700 font-semibold dark:text-zinc-400">
              ₹{price}
            </DialogSubtitle>
            <DialogDescription
              disableLayoutAnimation
              variants={{
                initial: { opacity: 0, scale: 0.8, y: 100 },
                animate: { opacity: 1, scale: 1, y: 0 },
                exit: { opacity: 0, scale: 0.8, y: 100 },
              }}
            >
              <p className="text-zinc-500">{description}</p>
            </DialogDescription>
          </div>
          <DialogClose className="text-zinc-50" />
        </DialogContent>
      </DialogContainer>
    </Dialog>
  );
}
