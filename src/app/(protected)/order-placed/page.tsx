"use client";

export default function OrderPlaced() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-xl md:text-3xl lg:text-4xl font-bold mt-3 lg:mt-4">
        Shopping Cart
      </h1>
      <div className="flex flex-col my-3 lg:my-5 mx-1 max-w-screen-2xl md:w-4/5 lg:w-3/5 gap-2 md:gap-4 lg:gap-6">
        Thank you for shopping with us!
      </div>
    </div>
  );
}
