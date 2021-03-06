import Link from 'next/link'
import Image from 'next/image'
import { Noticia } from '../typings'
import { urlFor } from "../sanity"
import { BsArrowDownCircle } from 'react-icons/bs'


interface Props {
    noticias: [Noticia]
}


export default function Noticias({ noticias }: Props) {
    return (
        <>
            <h1 className='uppercase text-2xl font-bold ml-5 mt-16'>Últimas Notícias</h1>
            <div className='border-y border-gray-400 mt-5 flex flex-col justify-center items-center px-10 space-y-5'>
                <div
                    className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-6 p-4 md:p-6'>
                    {noticias.map((noticia) => (
                        <Link key={noticia._id} href={`/noticia/${noticia.slugnews.current}`}>
                            <div className='border rounded-lg group cursor-pointer overflow-hidden shadow-xl'>
                                <Image
                                    className='object-cover h-44 group-hover:scale-105 transition-transform duration-200 ease-in-out'
                                    src={urlFor(noticia.mainImage).url()!}
                                    alt={noticia.title}
                                    width={580}
                                    height={240}
                                />
                                <div className='flex justify-between p-3 bg-white'>
                                    <div>
                                        <p className='text-xl font-bold'>{noticia.title}</p>
                                        <p className='text-base'>{noticia.description}...</p>
                                    </div>

                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
                <button className='animate-bounce text-3xl py-6' aria-label='carregar mais'><BsArrowDownCircle /></button>
            </div>
        </>
    )
}

