import { Suspense } from "react";
import Link from "next/link";
import { UserButton, ClerkLoading, ClerkLoaded } from "@clerk/nextjs";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";

import { CartIcon } from "@/components/cart-icon";
import { Skeleton } from "@/components/ui/skeleton";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 px-2 flex items-center justify-center border-b-2 border-dotted border-gray-400 bg-white/75 backdrop-blur-lg transition-all py-4 md:mx-6 lg:mx-20">
      <div className="w-screen max-w-screen-2xl justify-between flex items-center">
        <Link
          className="flex items-center justify-center gap-2 font-bold text-lg"
          href="/"
        >
          <Image
            width={30}
            height={30}
            src="/profile.svg"
            alt="logo"
            className="object-cover"
          />
          Profile E-Commerce
        </Link>
        <div className="flex gap-x-5 items-center">
          <Suspense fallback={<ShoppingCart />}>
            <CartIcon />
          </Suspense>
          <ClerkLoading>
            <Skeleton className="h-7 w-7 rounded-full" />
          </ClerkLoading>
          <ClerkLoaded>
            <UserButton />
          </ClerkLoaded>
        </div>
      </div>
    </nav>
  );
}
