import logo from "@/public/logo.png";
import Image from "next/image";

import SignIn from "@/components/sign-in";
import SignOut from "@/components/sign-out";
import { auth } from "@/app/auth";
import Link from "next/link";

export default async function Header() {

    const session = await auth();

    return (
        <div className="bg-gray-100">
            <div className="container flex items-center justify-between">
                <div className="flex items-center gap-12">
                    <Link href='/' className="flex items-center gap-1 py-4">
                        <Image src={logo} className="w-20" alt="logo" />
                        BidBuddy
                    </Link>
                    <Link href='/bids/create' className="flex items-center gap-1 py-4 hover:underline">
                        Auction Item
                    </Link>
                </div>

                <div className="flex items-center gap-4">
                    {session?.user?.name}
                    {session ? <SignOut /> : <SignIn />}
                </div>
            </div>
        </div >
    )
}
