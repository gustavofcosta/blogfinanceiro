import Link from "next/link"
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa'
import { Prices } from '../typings'


interface Props {
    filteredCoins: [Prices]
}
export default function Header({ filteredCoins }: Props) {
    return (
        <>
            <div className='flex bg-black h-12 space-x-14 overflow-hidden  justify-center'>
                {filteredCoins.map((coin) => (
                    <div className="flex lg:justify-center items-center space-x-1 text-xs"
                        key={coin.id}>
                        <img className="h-6" src={coin.image} alt="" />
                        <p className="text-white">{coin.name}</p>
                        {coin.price_change_percentage_24h < 0 ? (
                            <p className="text-red-600">{coin.price_change_percentage_24h.toFixed(2)}%</p>
                        ) : (
                            <p className="text-green-600">{coin.price_change_percentage_24h.toFixed(2)}%</p>
                        )}
                    </div>
                ))}
            </div>
            <header className=" flex justify-between p-5 max-w-7xl mx-auto">
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

                <div className="flex items-center space-x-5   font-bold">
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
        </>
    )
}

