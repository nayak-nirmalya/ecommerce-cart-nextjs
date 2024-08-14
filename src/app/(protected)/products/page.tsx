import { ProductCard } from "@/components/product-card";
import { db } from "@/db/drizzle";
import { product } from "@/db/schema";

export default async function ProductsPage() {
  const products = await db.select().from(product);

  return (
    <div className="flex items-center justify-center">
      <div className="my-6 mx-1 max-w-screen-2xl grid grid-cols-2 md:grid-cols-3 md:w-4/5 lg:grid-cols-3 lg:w-3/5 gap-2 md:gap-4 lg:gap-6">
        {products.map(({ id, name, image, description, price }) => (
          <ProductCard
            key={id}
            id={id}
            name={name}
            image={image}
            description={description}
            price={price}
          />
        ))}
      </div>
    </div>
  );
}
