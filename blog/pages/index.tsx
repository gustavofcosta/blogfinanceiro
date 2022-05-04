import { sanityClient } from "../sanity"
import { Post, Prices } from '../typings'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Price from '../components/Price'
import useWindowDimensions from '../components/UserWindow'
import { NextSeo } from 'next-seo'
import SubHeader from "../components/SubHeader"
import Posts from "../components/Posts"
import { useCallback, useEffect, useState } from "react"
import TextInput from "../components/TextInput"
import Button from "../components/Button"


interface Props {
  loadPosts: [Post]
  filteredCoins: [Prices]
  title: string
  url: string
}

export default function Home({ loadPosts, filteredCoins, title, url }: Props) {

  const [posts, setPosts] = useState<any[]>([])
  const [allPosts, setAllPosts] = useState<any[]>([])
  const [page, setPage] = useState(0)
  const [postsPerPage] = useState(10)
  const [searchValue, setSearchValue] = useState('')


  const loadP = async () => {

    const postsAndPhotos = loadPosts.map((post) => {
      return { ...post }
    })

    return postsAndPhotos
  }

  const handleLoadPosts = useCallback(async (page, postsPerPage) => {
    const postsAndPhotos = await loadP()

    setPosts(postsAndPhotos.slice(page, postsPerPage))
    setAllPosts(postsAndPhotos)
  }, [])

  useEffect(() => {
    handleLoadPosts(0, postsPerPage)
  }, [handleLoadPosts, postsPerPage])

  const loadMorePosts = () => {
    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
    posts.push(...nextPosts);

    setPosts(posts);
    setPage(nextPage);
  };

  const handleChange = (e: any) => {
    const { value } = e.target
    setSearchValue(value)
  }


  const noMorePosts = page + postsPerPage >= allPosts.length
  const filteredPosts = searchValue
    ? allPosts.filter((post) => {
      return post.title.toLowerCase().includes(searchValue.toLowerCase())
    }) : posts


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
      <div className="max-w-7xl mx-auto ">
        <Header />
        <SubHeader />
        <div className="flex justify-center">
          {/* {!!searchValue && <h1> Search value: {searchValue}</h1>} */}
          <TextInput searchValue={searchValue} handleChange={handleChange} />
        </div>

        {filteredPosts.length > 0 && <Posts posts={filteredPosts} />}

        {filteredPosts.length === 0 && <p className="mt-5 text-lg text-gray-500 font-semibold flex justify-center text-center px-4">Sua pesquisa não encontrou nenhuma postagem correspondente</p>}

        <div className="flex justify-center">
          {!searchValue && <Button onClick={loadMorePosts} disabled={noMorePosts} />}
        </div>

      </div>
      <Footer />
    </>
  )
}


export const getStaticProps = async () => {

  const query = `*[_type == "post" ]  {
      _id,
      _createdAt,
      title,
      order,
      author-> {
        name,
        image
    },
      description,
      video,
      mainImage,
      slug
   }`

  const loadPosts = await sanityClient.fetch(query)


  const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=brl&order=market_cap_desc&per_page=30&page=1&sparkline=false')

  const filteredCoins = await res.json()


  return {
    props: {
      loadPosts,
      filteredCoins,
    },
    revalidate: 60,
  }
}
