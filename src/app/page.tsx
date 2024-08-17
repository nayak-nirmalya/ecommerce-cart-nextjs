import Link from "next/link";
import {
  ClerkLoaded,
  ClerkLoading,
  SignInButton,
  SignedIn,
  SignedOut,
} from "@clerk/nextjs";

import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-14 -mt-16">
      <ClerkLoading>
        <Button disabled>Sign In to View Products</Button>
      </ClerkLoading>
      <ClerkLoaded>
        <SignedOut>
          <SignInButton mode="modal" forceRedirectUrl="/products">
            <Button>Sign In to View Products</Button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <Link
            className={cn(buttonVariants({ size: "lg" }), "h-10 px-10")}
            href="/products"
          >
            Browse Products
          </Link>
        </SignedIn>
      </ClerkLoaded>

      <div className="flex flex-col items-center justify-center text-zinc-500">
        <p>
          Made with ❤️ by{" "}
          <a
            className="underline text-zinc-600"
            href="https://www.nirmalya.xyz/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Nirmalya
          </a>
        </p>
      </div>
    </div>
  );
}
