import Link from "next/link";

export default function sidebar() {
    return (
        <div className="grid max-w-xl space-y-10 p-10 items-center
        ">
            <Link href='/'>
                <p className="font-bold text-3xl font-serif cursor-pointer">Coin<span className="text-yellow-500">Info</span></p>
            </Link>
            <div className=" space-y-7">
                <Link href='/'>
                    <p className="font-bold text-2xl font-serif cursor-pointer">Home</p>
                </Link>
                <Link href='/sobre'>
                    <p className="font-bold text-2xl font-serif cursor-pointer">Sobre</p>
                </Link>
                <Link href='/'>
                    <p className="font-bold text-2xl font-serif cursor-pointer">Marketcap</p>
                </Link>
            </div>
        </div>
    )
}
