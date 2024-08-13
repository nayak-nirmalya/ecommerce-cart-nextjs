import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { ShoppingCart } from "lucide-react";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 px-2 flex items-center justify-center border-b-2 border-dotted border-gray-400 bg-white py-4 md:mx-6 lg:mx-20">
      <div className="w-screen max-w-screen-2xl justify-between flex items-center">
        <Link className="font-bold text-lg" href="/">
          Profile
        </Link>
        <div className="flex gap-x-5 items-center">
          <Link href="/cart">
            <ShoppingCart />
          </Link>
          <UserButton />
        </div>
      </div>
    </nav>
  );
}
