import Link from "next/link"
import { FaFacebook, FaInstagram, FaTiktok, FaTwitter } from 'react-icons/fa'
import Image from "next/image"



export default function Header() {
    return (
        <header className=" flex justify-between p-5 max-w-7xl mx-auto pt-16">
            <div className="flex items-center space-x-5 cursor-pointer">
                <Link href='/'>
                    {/* <Image
                        className="object-contain"
                        src="https://cdn.sanity.io/images/gsl99a2h/production/9f8ef7c7132f06398c9ad9a798911910670777f5-4501x4500.jpg?rect=748,1736,3141,1130&w=2000&fit=max&auto=format"
                        alt="Logo CoinInfo"
                        width={150}
                        height={150}
                    /> */}
                    <p className="font-bold text-3xl font-serif">Coin<span className="text-yellow-500">Info</span></p>
                </Link>
                <div className="hidden md:inline-flex items-center space-x-5">
                    {/* <h3>Sobre</h3>
                    <h3>Contate-nos</h3>
                    <h3 className="text-white bg-blue-500 font-bold px-4 py-1 rounded-full">Seguir</h3> */}
                </div>
            </div>

            <div className="flex items-center space-x-5 text-gray-900  font-bold">
                <Link href='https://www.facebook.com/profile.php?id=100080416249241'>
                    <a target="_blank" rel="noreferrer" aria-label='Facebook'>
                        <FaFacebook className="h-8 w-8 cursor-pointer hover:text-blue-800" title="Facebook" />
                    </a>
                </Link>
                <Link href='https://www.instagram.com/coininfo_/'>
                    <a target="_blank" rel="noreferrer" aria-label='Instagram'>
                        <FaInstagram className="h-8 w-8 cursor-pointer hover:text-blue-800" title="Instagram" />
                    </a>
                </Link>
                <Link href='https://www.tiktok.com/@coininfo_'>
                    <a target="_blank" rel="noreferrer" aria-label='Tiktok'>
                        <FaTiktok className="h-8 w-8 cursor-pointer hover:text-blue-800" title="Tiktok" />
                    </a>
                </Link>
                <Link href='https://twitter.com/coininfo__'>
                    <a target="_blank" rel="noreferrer" aria-label='Twitter'>
                        <FaTwitter className="h-8 w-8 cursor-pointer hover:text-blue-800" title="Twitter" />
                    </a>
                </Link>
                {/* <h3>
                    Sobre
                </h3>
                <h3 className="border px-4 py-1 rounded-full border-blue-500 font-bold cursor-pointer hover:bg-blue-500 hover:text-white">
                    Entrar
                </h3> */}
            </div>
        </header>
    )
}

