import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPriceToINR(price: number) {
  return price.toLocaleString("en-IN", {
    style: "currency",
    currency: "INR",
  });
}
