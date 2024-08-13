import Link from "next/link";
import { SignInButton, SignedIn, SignedOut } from "@clerk/nextjs";

import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <SignedOut>
        <SignInButton mode="modal" forceRedirectUrl="/products">
          <Button>Sign In</Button>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <Link className={cn(buttonVariants({ size: "lg" }))} href="/products">
          Go to Products
        </Link>
      </SignedIn>
    </div>
  );
}
