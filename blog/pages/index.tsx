import Head from 'next/head'
import { sanityClient, urlFor } from "../sanity"
import { Post, Prices } from '../typings'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Price from '../components/Price'
import Link from 'next/link'
import { BsArrowDownCircle } from 'react-icons/bs'
// import Image from "next/image"



interface Props {
  posts: [Post]
  filteredCoins: [Prices]
}

export default function Home({ posts, filteredCoins }: Props) {
  return (
    <div>
      <Price filteredCoins={filteredCoins} />
      <div className="max-w-7xl mx-auto">
        <Head>
          <title>CoinInfo</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>


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

        {/* NEWS */}
        <h1 className='uppercase text-2xl font-bold ml-5 mt-16'>Notícias</h1>
        <div className='border-y border-gray-400 mt-5 flex flex-col justify-center items-center px-10 space-y-5'>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-6 p-4 md:p-6 '>
            {posts.map((post) => (
              <Link key={post._id} href={`/post/${post.slug.current}`}>
                <div className='border rounded-lg group cursor-pointer overflow-hidden'>
                  <img className='h-60 w-full object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out' src={urlFor(post.mainImage).url()!} alt="" />
                  <div className='flex justify-between p-5 bg-white'>
                    <div>
                      <p className='text-lg font-bold'>{post.title}</p>
                      <p className='text-xs'>{post.description} by {post.author.name}</p>
                    </div>
                    <img className='h-12 w-12 rounded-full' src={urlFor(post.author.image).url()!} alt="" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <button className='animate-bounce text-3xl py-6'><BsArrowDownCircle /></button>
        </div>

        {/* Educacional */}
        <h1 className='uppercase text-2xl font-bold ml-5 mt-16'>Educacional</h1>
        <div className='border-y border-gray-400 mt-5 flex flex-col justify-center items-center px-10 space-y-5'>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-6 p-4 md:p-6 '>
            {posts.map((post) => (
              <Link key={post._id} href={`/post/${post.slug.current}`}>
                <div className='border rounded-lg group cursor-pointer overflow-hidden'>
                  <img className='h-60 w-full object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out' src={urlFor(post.mainImage).url()!} alt="" />
                  <div className='flex justify-between p-5 bg-white'>
                    <div>
                      <p className='text-lg font-bold'>{post.title}</p>
                      <p className='text-xs'>{post.description} by {post.author.name}</p>
                    </div>
                    <img className='h-12 w-12 rounded-full' src={urlFor(post.author.image).url()!} alt="" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <button className='animate-bounce text-3xl py-6'><BsArrowDownCircle /></button>
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

  const posts = await sanityClient.fetch(query)

  const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=brl&order=market_cap_desc&per_page=50&page=1&sparkline=false')

  const filteredCoins = await res.json()

  return {
    props: {
      posts,
      filteredCoins
    },
  }
}
