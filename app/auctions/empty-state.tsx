import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export function EmptyState() {
    return (
        <div className="flex items-center justify-center flex-col gap-6">
            <Image src='/package.svg' height={200} width={200} alt='package' />
            <h2 className="text-lg font-bold">You have no Acutions yet!!!</h2>
            <Button asChild>
                <Link href='/items/create'>Create Auction</Link>
            </Button>
        </div>
    );
}