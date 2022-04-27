import { NextSeo } from "next-seo";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Price from "../components/Price";
import { Prices } from "../typings";
import { GiFlyingFlag, GiTrophyCup } from "react-icons/gi";
import { BsBullseye } from "react-icons/bs";

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
            <div className="max-w-7xl mx-auto">
                <div className="mt-20 space-y-16 p-5 text-center">
                    <div className="flex flex-col items-center">
                        <h1 className="text-3xl font-bold uppercase">Sobre a CoinInfo</h1>
                        <p className="text-xl p-4 lg:w-[800px] lg:h-10">A Coininfo atua no fornecimento de informação confíavel e educacional para o mercado de criptomoedas, proporcionando aos investidores um processo de tomada de decisão muito mais seguro.</p>
                    </div>
                    <div className="lg:flex space-y-20 lg:space-y-0 justify-center items-center lg:py-36 lg:space-x-16">
                        <div className="flex flex-col items-center">
                            <GiFlyingFlag className="text-7xl text-center mb-5 " />
                            <h1 className="font-bold text-3xl uppercase">Missão</h1>
                            <p className="text-xl p-4 w-[300px] lg:h-10">Fornecer compreensão e informação confiável com alta tecnologia.</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <BsBullseye className="text-7xl text-center mb-5" />
                            <h1 className="text-3xl font-bold uppercase">Visão</h1>
                            <p className="text-xl p-4  w-[300px] lg:h-10">Atingir o posto definitivo de maior portal educacional e noticiario para o mercado de criptomoedas.</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <GiTrophyCup className="text-7xl text-center mb-5" />
                            <h1 className="text-3xl font-bold uppercase">Valores</h1>
                            <p className="text-xl p-4  w-[300px] lg:h-10">Disseminar informação e conhecimento. Compromisso com a inovação. Excelência em toda e qualquer ação.</p>
                        </div>
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