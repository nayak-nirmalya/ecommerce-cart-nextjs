import { db } from "@/db/drizzle";
import { product } from "@/db/schema";
import products from "@/db/products.json";

const main = async () => {
  console.log("Seeding Starting...");

  try {
    await db.insert(product).values(products);
    console.log("Seeding Complete!");
  } catch {
    console.error("Error!");
  }
};

main();
