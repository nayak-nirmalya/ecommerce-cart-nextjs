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
import { PlusIcon } from "lucide-react";

import { Button } from "./ui/button";

interface ProductCardProps {
  id: number;
  image: string;
  name: string;
  description: string;
  price: string;
}

export function ProductCard({
  id,
  name,
  image,
  description,
  price,
}: ProductCardProps) {
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
          <button
            type="button"
            className="relative ml-1 flex h-6 w-6 shrink-0 scale-100 select-none appearance-none items-center justify-center rounded-lg border border-zinc-950/10 text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-800 focus-visible:ring-2 active:scale-[0.98] dark:border-zinc-50/10 dark:bg-zinc-900 dark:text-zinc-500 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:focus-visible:ring-zinc-500"
            aria-label="Add to cart"
          >
            <PlusIcon size={12} />
          </button>
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
          <div className="p-4">
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
              <Button className="mt-1">Add to Cart</Button>
            </DialogDescription>
          </div>
          <DialogClose className="text-zinc-50" />
        </DialogContent>
      </DialogContainer>
    </Dialog>
  );
}
