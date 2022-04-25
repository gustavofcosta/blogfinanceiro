export default function SubHeader() {
    return (
        <>
            <div className='flex justify-between items-center bg-yellow-500  border-y border-black py-10 lg:py-0 mt-6'>
                <div className="px-10 space-y-5">
                    <h1 className="text-5xl max-w-xl font-serif">Investir em conhecimento rende sempre os melhores juros.</h1>
                    <h2>
                        - Benjamin Franklin
                    </h2>
                </div>

                <img
                    height={400}
                    width={400}
                    className="hidden md:inline-flex h-32 lg:h-80 lg:pr-40 sm:h-60 sm:pr-28 object-cover"
                    src="https://cdn.sanity.io/images/gsl99a2h/production/181d9a7862f626f17fd22dfc74785eda93095d41-1346x1921.png?w=2000&fit=max&auto=format" alt="logo letra Ic"
                />
            </div>
        </>
    )
}
