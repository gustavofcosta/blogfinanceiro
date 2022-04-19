import { Prices } from '../typings'
import Carousel from 'react-elastic-carousel'
import useWindowDimensions from './UserWindow'


interface Props {
    filteredCoins: [Prices]
}


export default function Price({ filteredCoins }: Props) {

    const { width } = useWindowDimensions()

    let itensShow = 9

    if (width < 1200) {
        itensShow = 8
    }

    if (width < 920) {
        itensShow = 7
    }

    if (width < 870) {
        itensShow = 6
    }

    if (width < 730) {
        itensShow = 5
    }

    if (width < 644) {
        itensShow = 4
    }

    if (width < 520) {
        itensShow = 3
    }


    return (
        <Carousel
            isRTL={false}
            pagination={false}
            enableAutoPlay={true}
            autoPlaySpeed={900}
            itemsToShow={itensShow}
            transitionMs={3000}
            easing={'ease'}
            showArrows={false}

            className='flex bg-gray-800 h-14 justify-start fixed w-[19999px] text-[11px] z-10'>
            {filteredCoins.map((coin) => (
                <div className="flex font-bold flex-col justify-center items-center space-y-1"
                    key={coin.id}>
                    <div className="flex justify-center items-center  pt-2">
                        <img className="h-4 w-4 mr-2" src={coin.image} alt={coin.name} />
                        <p className="text-white uppercase">{coin.symbol}</p>
                    </div>

                    <div className="flex justify-center items-center ">
                        {coin.price_change_percentage_24h < 0 ? (
                            <>
                                <p className="text-red-500  mr-2">R$ {coin.current_price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</p>
                                <p className="text-red-500">{coin.price_change_percentage_24h.toFixed(2)}%</p>
                            </>

                        ) : (
                            <>
                                <p className="text-green-500  mr-2">R$ {coin.current_price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</p>
                                <p className="text-green-500">{coin.price_change_percentage_24h.toFixed(2)}%</p>
                            </>
                        )}
                    </div>
                </div>
            ))}
        </ Carousel>
    )
}
