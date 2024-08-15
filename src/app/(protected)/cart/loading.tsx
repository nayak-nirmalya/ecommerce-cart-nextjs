import { CartItemSkeleton } from "@/components/cart-item";

export default function CartLoading() {
  return (
    <>
      {Array.from({ length: 4 }).map((_, index) => (
        <CartItemSkeleton key={index} />
      ))}
    </>
  );
}
