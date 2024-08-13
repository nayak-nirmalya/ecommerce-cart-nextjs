import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <SignedOut>
        <SignInButton mode="modal" forceRedirectUrl="/products" />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
      <Button>Click Me</Button>
    </div>
  );
}
