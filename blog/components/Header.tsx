import Link from "next/link"

function Header() {
    return (
        <header className=" flex justify-between p-5 max-w-7xl mx-auto">
            <div className="flex items-center space-x-5">
                <Link href="/">
                    <img className="w-44 object-contain cursor-pointer" src="https://links.papareact.com/yvf" alt="" />
                </Link>
                <div className="hidden md:inline-flex items-center space-x-5">
                    <h3>Sobre</h3>
                    <h3>Contate-nos</h3>
                    <h3 className="text-white bg-blue-700 px-4 py-1 rounded-full">Seguir</h3>
                </div>
            </div>

            <div className="flex items-center space-x-5 text-blue-700">
                <h3>
                    Sing In
                </h3>
                <h3 className="border px-4 py-1 rounded-full border-blue-700">
                    Get Started
                </h3>
            </div>
        </header>
    )
}

export default Header