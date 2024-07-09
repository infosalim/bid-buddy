import { database } from "@/db/database";
import { ItemCard } from "@/app/item-card";


export default async function Home() {

  const allItems = await database.query.items.findMany();

  return (
    <main className="container mx-auto py-12 space-y-6">
      <h2 className="text-2xl font-bold">Items for Sale</h2>
      <div className="grid grid-cols-4 gap-8">
        {allItems.map((item) => (
          <ItemCard
            key={item.id}
            item={item}
          />
        ))}
      </div>

    </main>
  );
}
