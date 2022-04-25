import React from 'react'
import { FaFacebook, FaInstagram, FaTiktok, FaTwitter } from 'react-icons/fa'
import Image from 'next/image'
import Link from 'next/link'


function Footer() {
    return (
        <footer className='bg-[#0c0c0c] text-white mt-40'>
            <div className='max-w-6xl mx-auto px-4'>
                <div className='grid items-center justify-center grid-cols-2  p-8 ml-5 sm:grid-cols-2 sm:h-72 lg:grid-cols-3 gap-10 md:gap-8 lg:h-44 md:p-6 uppercase'>
                    <Image
                        className="object-contain"
                        src="https://cdn.sanity.io/images/gsl99a2h/production/cd6cc9dfb2b6b138aedbb7b1e8efa1cf6d767578-4501x4500.jpg?rect=714,1577,3231,1232&w=2000&fit=max&auto=format"
                        alt="Logo CoinInfo"
                        width={600}
                        height={150}
                    />
                    <div className='text-sm space-y-2 font-semibold'>
                        <p className='cursor-pointer hover:hover:text-blue-800'>Sobre</p>
                        <p className='cursor-pointer hover:hover:text-blue-800'>Cotação</p>
                        <p className='cursor-pointer hover:hover:text-blue-800'>Contate-nos</p>
                    </div>
                    {/* <div className='text-sm space-y-2 font-semibold'>
                        <p className='cursor-pointer hover:text-blue-800'></p>
                        <p className='cursor-pointer hover:hover:text-blue-800'></p>
                        <p className='cursor-pointer hover:hover:text-blue-800'></p>
                    </div> */}
                    <div className="flex items-center space-x-5 text-white  font-bold">
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
