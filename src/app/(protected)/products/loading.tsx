import { ProductCardSkeleton } from "@/components/product-card";

export default function ProductsLoading() {
  return (
    <>
      {Array.from({ length: 10 }).map((_, index) => (
        <ProductCardSkeleton key={index} />
      ))}
    </>
  );
}
