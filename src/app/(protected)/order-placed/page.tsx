"use client";

import Link from "next/link";
import Confetti from "react-dom-confetti";
import { useEffect, useState } from "react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function OrderPlaced() {
  const [showConfetti, setShowConfetti] = useState<boolean>(false);
  useEffect(() => setShowConfetti(true), []);

  return (
    <>
      <div
        aria-hidden="true"
        className="pointer-events-none select-none absolute inset-0 overflow-hidden flex justify-center"
      >
        <Confetti
          active={showConfetti}
          config={{ elementCount: 200, spread: 90 }}
        />
      </div>
      <div className="flex flex-col my-56 items-center justify-center">
        <h1 className="text-xl md:text-3xl lg:text-4xl font-bold mt-3 lg:mt-4 animate-bounce">
          Order Placed! 🎉
        </h1>
        <div className="flex flex-col items-center justify-center my-3 lg:my-5 max-w-screen-xl">
          <p className="text-zinc-500 font-semibold">
            Thank You for Shopping with Us!
          </p>
          <p className="text-zinc-500 font-semibold">
            Your Order will be Shipped Soon.
          </p>
          <p className="text-zinc-500">
            Go to{" "}
            <Link
              className={cn(
                buttonVariants({ variant: "link" }),
                "underline p-0"
              )}
              href="/products"
            >
              products
            </Link>{" "}
            to browse more.
          </p>
        </div>
      </div>
    </>
  );
}
