import Link from "next/link";
import { SignInButton, SignedIn, SignedOut } from "@clerk/nextjs";

import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <SignedOut>
        <SignInButton mode="modal" forceRedirectUrl="/products">
          <Button>Sign In to View Products</Button>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <Link className={cn(buttonVariants({ size: "lg" }))} href="/products">
          Browse Products
        </Link>
      </SignedIn>
      <div className="flex flex-col items-center justify-center gap-4 text-zinc-500">
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
