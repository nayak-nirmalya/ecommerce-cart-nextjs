import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products",
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-center">
      <div className="my-6 mx-1 max-w-screen-2xl grid grid-cols-2 md:grid-cols-3 md:w-4/5 lg:grid-cols-3 lg:w-3/5 gap-2 md:gap-4 lg:gap-6">
        {children}
      </div>
    </div>
  );
}
