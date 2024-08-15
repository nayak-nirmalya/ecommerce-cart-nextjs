import { ProductCard } from "@/components/product-card";
import { db } from "@/db/drizzle";
import { product } from "@/db/schema";

export default async function ProductsPage() {
  const products = await db.select().from(product);

  return (
    <>
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
    </>
  );
}
