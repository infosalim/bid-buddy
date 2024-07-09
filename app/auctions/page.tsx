import { database } from "@/db/database";
import { ItemCard } from "@/app/item-card";
import { auth } from "@/app/auth";
import { eq } from "drizzle-orm";
import { items } from "@/db/schema";



export default async function MyAcutionPage() {
    const session = await auth();
    if (!session || !session.user) {
        throw new Error('Unauthorized');
    }

    const allItems = await database.query.items.findMany({
        where: eq(items.userId, session.user.id!)
    });

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
