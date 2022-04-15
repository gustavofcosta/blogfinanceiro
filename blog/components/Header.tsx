import Link from "next/link"
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa'


export default function Header() {
    return (
        <header className=" flex justify-between p-5 max-w-7xl mx-auto pt-16">
            <div className="flex items-center space-x-5">
                <Link href='/'>
                    <img
                        className="w-44 object-contain"
                        src="https://links.papareact.com/yvf"
                        alt="Logo InfoCoin"
                    />
                </Link>
                <div className="hidden md:inline-flex items-center space-x-5">
                    {/* <h3>Sobre</h3>
                    <h3>Contate-nos</h3>
                    <h3 className="text-white bg-blue-500 font-bold px-4 py-1 rounded-full">Seguir</h3> */}
                </div>
            </div>

            <div className="flex items-center space-x-5 text-gray-900  font-bold">
                <FaFacebook className="h-8 w-8 cursor-pointer hover:text-blue-800" />
                <FaInstagram className="h-8 w-8 cursor-pointer hover:text-blue-800" />
                <FaTiktok className="h-8 w-8 cursor-pointer hover:text-blue-800" />

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

