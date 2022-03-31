import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Head>
        <title>Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <div className='flex justify-between items-center bg-yellow-600  border-y border-black py-10 lg:py-0'>
        <div className="px-10 space-y-5">
          <h1 className="text-6xl max-w-xl font-serif"><span className="underline decoration-black decoration-4">Blog</span> é um lugar para ficar expert em finanças</h1>
          <h2>
            A verdadeira medida da riqueza é o patrimônio líquido e não os rendimentos.
          </h2>
        </div>

        <img className="hidden md:inline-flex h-32 lg:h-full"
          src="https://accountabilitylab.org/wp-content/uploads/2020/03/Medium-logo.png" alt="" />
      </div>

      {/* posts */}
    </div>
  )
}

export default Home
