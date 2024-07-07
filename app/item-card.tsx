import { getImageUrl } from "@/util/files";
import Image from "next/image";
import { Item } from '@/db/schema';


export function ItemCard({ item }: { item: Item }) {
    return (
        <div className="flex flex-col gap-2 border p-8 rounded-lg space-y-2" key={item.id}>
            <Image
                src={getImageUrl('milas.jpg')}
                alt='thubm'
                width={200}
                height={300}
            />
            <h2 className="text-lg font-bold">{item.name}</h2>
            <p className="text-sm">Starting Price: {item.startingPrice / 100}</p>
        </div>
    );
}