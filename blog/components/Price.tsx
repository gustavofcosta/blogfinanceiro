import React from 'react'
import { Prices } from '../typings'


interface Props {
    filteredCoins: [Prices]
}


export default function Price({ filteredCoins }: Props) {
    return (
        <div className='flex bg-gray-900 h-14 space-x-14  justify-start pl-10 fixed  w-[19999px] text-xs z-10'>
            {filteredCoins.map((coin) => (
                <div className="flex font-semibold flex-col justify-center items-center space-y-1"
                    key={coin.id}>
                    <div className="flex justify-center items-center">
                        <img className="h-4 w-4 mr-2" src={coin.image} alt="" />
                        <p className="text-white uppercase">{coin.name}</p>
                    </div>

                    <div className="flex justify-center items-center">
                        <p className="text-white  mr-2">R$ {coin.current_price}</p>
                        {coin.price_change_percentage_24h < 0 ? (
                            <p className="text-red-600">{coin.price_change_percentage_24h.toFixed(2)}%</p>
                        ) : (
                            <p className="text-green-600">{coin.price_change_percentage_24h.toFixed(2)}%</p>
                        )}
                    </div>
                </div>
            ))}
        </div>
    )
}
