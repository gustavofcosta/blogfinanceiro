import Link from "next/link"

function Header() {
    return (
        <header className=" flex justify-between p-5 max-w-7xl mx-auto">
            <div className="flex items-center space-x-5">
                <div>
                    <img className="w-44 object-contain" src="https://links.papareact.com/yvf" alt="" />
                </div>
                {/* <div className="hidden md:inline-flex items-center space-x-5">
                    <h3>Sobre</h3>
                    <h3>Contate-nos</h3>
                    <h3 className="text-white bg-red-500 px-4 py-1 rounded-full">Seguir</h3>
                </div> */}
            </div>

            <div className="flex items-center space-x-5 text-red-500">
                {/* <h3>
                    Sing In
                </h3> */}
                <h3 className="border px-4 py-1 rounded-full border-red-500 cursor-pointer hover:text-white hover:bg-red-500">
                    Sobre
                </h3>
            </div>
        </header>
    )
}

export default Header