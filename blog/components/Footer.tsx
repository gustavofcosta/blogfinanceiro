import React from 'react'

function Footer() {
    return (
        <footer className='bg-black text-white'>
            <div className='max-w-6xl mx-auto'>
                <div className='flex flex-col-2 space-x-32 py-10 items-center justify-center'>
                    <img
                        className="w-20 object-contain"
                        src="https://cdn.sanity.io/images/gsl99a2h/production/0cbfe27bf016fd990aa0e58f4861ab70e00d3fc3-2400x1597.jpg"
                        alt="Logo InfoCoin"
                    />
                    <div className='text-base space-y-2'>
                        <p className='cursor-pointer hover:text-blue-800'>Facebook</p>
                        <p className='cursor-pointer hover:hover:text-blue-800'>Instagram</p>
                        <p className='cursor-pointer hover:hover:text-blue-800'>TikTok</p>
                    </div>
                    <div className='text-base space-y-2'>
                        <p className='cursor-pointer hover:hover:text-blue-800'>Sobre</p>
                        <p className='cursor-pointer hover:hover:text-blue-800'>Entre em contato conosco</p>
                        <p className='cursor-pointer hover:hover:text-blue-800'>Anunciar</p>
                    </div>
                </div>
                <hr className='max-w-full my-1 mx-auto border border-white' />
                <div className='flex justify-center py-1 text-sm'>
                    <p>InfoCoin criptomoedas. ©2022 Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer