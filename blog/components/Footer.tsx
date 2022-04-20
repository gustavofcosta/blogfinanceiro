import React from 'react'
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa'
import Image from 'next/image'


function Footer() {
    return (
        <footer className='bg-[#0c0c0c] text-white mt-40'>
            <div className='max-w-6xl mx-auto px-4'>
                <div className='grid items-center justify-center grid-cols-2  p-8 ml-8 sm:grid-cols-2 sm:h-72 lg:grid-cols-4 gap-10 md:gap-6 lg:h-44 sm:ml-44 md:p-6 uppercase'>
                    <Image
                        className="object-contain "
                        src="https://cdn.sanity.io/images/gsl99a2h/production/0cbfe27bf016fd990aa0e58f4861ab70e00d3fc3-2400x1597.jpg"
                        alt="Logo CoinInfo"
                        width={80}
                        height={80}
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
                    <div className="flex items-center space-x-5 text-white  font-bold">
                        <FaFacebook className="h-8 w-8 cursor-pointer hover:text-blue-800" />
                        <FaInstagram className="h-8 w-8 cursor-pointer hover:text-blue-800" />
                        <FaTiktok className="h-8 w-8 cursor-pointer hover:text-blue-800" />
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
