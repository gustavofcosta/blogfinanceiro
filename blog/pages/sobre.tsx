import { NextSeo } from "next-seo";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Price from "../components/Price";
import { Prices } from "../typings";

interface Props {
    filteredCoins: [Prices]
    title: string
    url: string
}


export default function Sobre({ filteredCoins, title, url }: Props) {
    return (
        <>
            <NextSeo
                title='Sobre CoinInfo'
                description='A Coininfo atua no fornecimento de informação confíavel e educacional para o mercado de criptomoedas'
                canonical={url}
                openGraph={{
                    url,
                    title,
                }}
            />


            <Price filteredCoins={filteredCoins} />
            <Header />
            <div className="max-w-3xl mx-auto">
                <div className="mt-20 text-center space-y-12 border-y border-black py-5">
                    <div>
                        <h1 className="text-3xl font-bold uppercase">Sobre a CoinInfo</h1>
                        <p className="font-semibold text-2xl p-4">A Coininfo atua no fornecimento de informação confíavel e educacional para o mercado de criptomoedas, proporcionando aos investidores um processo de tomada de decisão muito mais seguro.</p>
                    </div>
                    <div>
                        <h1 className="text-3xl font-bold uppercase">Missão</h1>
                        <p className="font-semibold text-2xl p-4">Fornecer compreensão e informação confiável com alta tecnologia.</p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export const getServerSideProps = async () => {
    const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=brl&order=market_cap_desc&per_page=250&page=1&sparkline=false')

    const filteredCoins = await res.json()

    return {
        props: {
            filteredCoins,
        },
    }
}