import { database } from "@/db/database";
import { ItemCard } from "@/app/item-card";
import { auth } from "@/app/auth";
import { eq } from "drizzle-orm";
import { items } from "@/db/schema";
import { EmptyState } from "./empty-state";
import SignIn from "@/components/sign-in";



export default async function MyAcutionPage() {
    const session = await auth();
    let hadItems;
    let renderContent;
    if (!session || !session.user) {
        // throw new Error('Unauthorized');
        renderContent = (
            <div className="flex flex-col items-center gap-8">
                <h2 className="text-2xl font-bold">Please Sign in to View your Autions</h2>
                <SignIn />
            </div>
        );


    } else {
        const allItems = await database.query.items.findMany({
            where: eq(items.userId, session.user.id!)
        });
        hadItems = allItems.length > 0;

        renderContent = (
            <>
                <h2 className="text-2xl font-bold text-center mb-12">Your Current Autions</h2>
                {hadItems ? (allItems.map((item) => (
                    <div
                        key={item.id}
                        className="grid grid-cols-4 gap-8">
                        <ItemCard
                            item={item}
                        />
                    </div>
                ))) :
                    <EmptyState />
                }

            </>
        );

    }

    return (
        <main className="container mx-auto py-12 space-y-6">
            {renderContent}
        </main>
    );
}
