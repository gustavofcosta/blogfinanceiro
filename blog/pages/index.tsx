import Head from 'next/head'
import { sanityClient, urlFor } from "../sanity"
import { Post, Prices, Noticia } from '../typings'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Price from '../components/Price'
import Link from 'next/link'
import { BsArrowDownCircle } from 'react-icons/bs'
import Carousel from 'react-elastic-carousel'
import useWindowDimensions from '../components/UserWindow'
import { NextSeo } from 'next-seo'
import Image from 'next/image'



interface Props {
  posts: [Post]
  filteredCoins: [Prices]
  noticias: [Noticia]
  title: string
  url: string
}

export default function Home({ posts, filteredCoins, noticias, title, url }: Props) {

  const { width } = useWindowDimensions()

  let itensShow = 2

  if (width < 870) {
    itensShow = 1
  }


  return (
    <div>

      <NextSeo
        title='CoinInfo: Bitcoin, Ethereum, Investimento e Notícias sobre Criptomoedas e Preços'
        description='Notícia, Educacional sobre Biticoin, Ethereum, blockchain, DeFi, Finanças digitais e notícias da Web 3.0.'
        canonical='https://coininfo.com.br'
        openGraph={{
          url,
          title,
        }}
      />


      <Price filteredCoins={filteredCoins} />

      <div className="max-w-7xl mx-auto">

        <Header />

        <div className='flex justify-between items-center bg-yellow-500  border-y border-black py-10 lg:py-0'>
          <div className="px-10 space-y-5">
            <h1 className="text-5xl max-w-xl font-serif">Investir em conhecimento rende sempre os melhores juros.</h1>
            <h2>
              - Benjamin Franklin
            </h2>
          </div>

          <img className="hidden md:inline-flex h-32 lg:h-96"
            src="https://accountabilitylab.org/wp-content/uploads/2020/03/Medium-logo.png" alt="logo letra Ic" />

        </div>

        {/* 4 ultimas NEWS */}
        {/* <h1 className='uppercase text-2xl font-bold ml-5 mt-16'>4 Notícias</h1> */}
        <div className='mt-20 flex flex-col justify-center items-center px-1'>
          <Carousel
            isRTL={false}
            pagination={true}
            itemsToShow={itensShow}
            itemPadding={[0, 40]}
            enableAutoPlay={true}
            autoPlaySpeed={6000}
            transitionMs={3000}
            showArrows={false}
            className='flex justify-center items-center'>
            {noticias.map((noticia) => (
              <Link key={noticia._id} href={`/noticia/${noticia.slugnews.current}`}>
                <div className='border rounded-lg group cursor-pointer overflow-hidden gap-4'>
                  <Image 
                    className='object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out' 
                    src={urlFor(noticia.mainImage).url()!} 
                    alt={noticia.title}
                    width={580}
                    height={240}
                  />
                  <div className='flex justify-between p-5 bg-white'>
                    <div>
                      <p className='text-lg font-bold'>{noticia.title}</p>
                      <p className='text-xs'>{noticia.description} por {noticia.author.name}</p>
                    </div>
                     
                    <Image
                      className='h-12 w-12 rounded-full'
                      src={urlFor(noticia.author.image).url()!} 
                      alt={noticia.author.name}
                      width={48}
                      height={48}
                    />
                   
                  </div>
                </div>
              </Link>
            ))}
          </Carousel>
          {/* <button className='animate-bounce text-3xl py-6'><BsArrowDownCircle /></button> */}
        </div>

        {/* All */}
        <h1 className='uppercase text-2xl font-bold ml-5 mt-16'>Últimas Notícias</h1>
        <div className='border-y border-gray-400 mt-5 flex flex-col justify-center items-center px-10 space-y-5'>
          <div
            className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-5 md:gap-5 p-4 md:p-5 '>
            {noticias.map((noticia) => (
              <Link key={noticia._id} href={`/noticia/${noticia.slugnews.current}`}>
                <div className='border rounded-lg group cursor-pointer overflow-hidden'>
                  <Image 
                    className='object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out' 
                    src={urlFor(noticia.mainImage).url()!} 
                    alt={noticia.title} 
                    width={214}
                    height={96}
                  />
                  <div className='flex justify-between p-5 bg-white'>
                    <div>
                      <p className='text-base font-bold'>{noticia.title}</p>
                      <p className='text-xs'>{noticia.description} por {noticia.author.name}</p>
                    </div>
                   
                    <Image
                      className='h-12 w-12 rounded-full'
                      src={urlFor(noticia.author.image).url()!} 
                      alt={noticia.author.name}
                      width={48}
                      height={48}
                    />
                   
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <button className='animate-bounce text-3xl py-6' aria-label='carregar mais'><BsArrowDownCircle /></button>
        </div>


        {/* Educacional */}
        <h1 className='uppercase text-2xl font-bold ml-5 mt-16'>Educacional</h1>
        <div className='border-y border-gray-400 mt-5 flex flex-col justify-center items-center px-10 space-y-5'>
          <div
            className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-6 p-4 md:p-6 '>
            {posts.map((post) => (
              <Link key={post._id} href={`/post/${post.slug.current}`}>
                <div className='border rounded-lg group cursor-pointer overflow-hidden'>
                  <Image 
                    className='object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out' 
                    src={urlFor(post.mainImage).url()!} 
                    alt={post.title} 
                    width={366}
                    height={240}
                    />
                  <div className='flex justify-between p-5 bg-white'>
                    <div>
                      <p className='text-lg font-bold'>{post.title}</p>
                      <p className='text-xs'>{post.description} por {post.author.name}</p>
                    </div>
               
                    <Image
                      className='h-12 w-12 rounded-full'
                      src={urlFor(post.author.image).url()!} 
                      alt={post.author.name}
                      width={48}
                      height={48}
                    />
             
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <button className='animate-bounce text-3xl py-6' aria-label='carregar mais'><BsArrowDownCircle /></button>
        </div>
      </div>
      <Footer />
    </div >


  )
}

export const getServerSideProps = async () => {
  const query = `*[_type == "post"] {
    _id,
    title,
    author-> {
      name,
      image
  },
    description,
    video,
    mainImage,
    slug
 }`;

  const querynews = `*[_type == "noticia"] {
    _id,
    title,
    author-> {
      name,
      image
  },
    description,
    video,
    mainImage,
    slugnews
  }`;



  const posts = await sanityClient.fetch(query)

  const noticias = await sanityClient.fetch(querynews)

  const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=brl&order=market_cap_desc&per_page=250&page=1&sparkline=false')

  const filteredCoins = await res.json()

  return {
    props: {
      posts,
      filteredCoins,
      noticias
    },
  }
}
