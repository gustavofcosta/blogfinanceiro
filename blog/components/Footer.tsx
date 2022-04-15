import React from 'react'

function Footer() {
    return (
        <footer className='bg-gray-900 text-white mt-40'>
            <div className='max-w-6xl mx-auto px-4'>
                <div className='grid justify-center space-y-10 py-10 sm:justify-center sm:flex sm:space-x-44 uppercase'>
                    <img
                        className="w-20 object-contain "
                        src="https://cdn.sanity.io/images/gsl99a2h/production/0cbfe27bf016fd990aa0e58f4861ab70e00d3fc3-2400x1597.jpg"
                        alt="Logo CoinInfo"
                    />
                    <div className='text-sm space-y-2 font-semibold'>
                        <p className='cursor-pointer hover:hover:text-blue-800'>Sobre</p>
                        <p className='cursor-pointer hover:hover:text-blue-800'>Contate-nos</p>
                        <p className='cursor-pointer hover:hover:text-blue-800'>Anunciar</p>
                    </div>
                    <div className='text-sm space-y-2 font-semibold'>
                        <p className='cursor-pointer hover:text-blue-800'>Facebook</p>
                        <p className='cursor-pointer hover:hover:text-blue-800'>Instagram</p>
                        <p className='cursor-pointer hover:hover:text-blue-800'>TikTok</p>
                    </div>
                </div>
                <hr className='max-w-full my-1 mx-auto border border-white' />
                <div className='flex justify-center py-1 text-xs lg:text-sm'>
                    <p>InfoCoin criptomoedas. ©2022 Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer