import { sanityClient } from "../sanity"
import { Post, Prices } from '../typings'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Price from '../components/Price'
import useWindowDimensions from '../components/UserWindow'
import { NextSeo } from 'next-seo'
import SubHeader from "../components/SubHeader"
import Educacional from "../components/Educacional"



interface Props {
  posts: [Post]
  filteredCoins: [Prices]
  title: string
  url: string
}

export default function Home({ posts, filteredCoins, title, url }: Props) {

  const { width } = useWindowDimensions()

  let itensShow = 2

  if (width < 870) {
    itensShow = 1
  }

  return (
    <>
      <NextSeo
        title='CoinInfo: Bitcoin, Ethereum, Investimento, Criptomoedas e MarketCap'
        description='Educacional sobre criptomoedas | Bitcoin, Ethereum, blockchain, DeFi, Finanças digitais e Web 3.0.'
        canonical='https://coininfo.com.br'
        openGraph={{
          url,
          title,
        }}
      />
      <Price filteredCoins={filteredCoins} />
      <div className="max-w-7xl mx-auto">
        <Header />
        <SubHeader />
        <Educacional posts={posts} />
      </div>
      <Footer />
    </>


  )
}


export const getStaticProps = async () => {
  const query = `*[_type == "post"] {
    _id,
    _createdAt,
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

  const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=brl&order=market_cap_desc&per_page=30&page=1&sparkline=false')

  const filteredCoins = await res.json()
  
  const posts = await sanityClient.fetch(query)
  
//   posts.sort((a, b) => a.position > b.position ? 1 : -1)

  return {
    props: {
      posts,
      filteredCoins,
    },
    revalidate: 60,
  }
}
