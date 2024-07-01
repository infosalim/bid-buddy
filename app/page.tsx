import { database } from "@/db/database";
import { auth } from "@/app/auth";

export default async function Home() {

  const allItems = await database.query.items.findMany();

  return (
    <main className="container mx-auto py-12 space-y-6">
      <h2 className="text-2xl font-bold">Items for Sale</h2>
      <div className="grid grid-cols-4 gap-8">
        {allItems.map((item) => (
          <div className="flex flex-col gap-2 border p-8 rounded-lg" key={item.id}>
            <div className="font-bold">{item.name}</div>
            <div className="text-sm">Starting Price: {item.startingPrice / 100}</div>
          </div>
        ))}
      </div>

    </main>
  );
}
