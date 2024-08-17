import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cart",
};

export default function CartLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-xl md:text-3xl lg:text-4xl font-bold mt-3 lg:mt-4">
        Shopping Cart
      </h1>
      <div className="flex flex-col items-center justify-center my-3 lg:my-5 max-w-screen-xl gap-2 md:gap-4 lg:gap-6">
        {children}
      </div>
    </div>
  );
}
