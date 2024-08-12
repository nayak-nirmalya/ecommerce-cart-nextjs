import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return <SignIn afterSignOutUrl="/" forceRedirectUrl="/products" />;
}
