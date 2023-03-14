import React from 'react'
import { IProduct } from "../model"

interface ProductProps {
    product: IProduct
}

export function Product({ product }: ProductProps) {
    const [details, setDetails] = React.useState(false)

    const btnBgClassName = details ? 'bg-yellow-400' : 'bg-blue-400'
    const btnClasses = ['py-2 px-4 border', btnBgClassName]


    return (
        <div className="border py-2 px-4 rounded flex flex-col items-center mb-2">
            <img src={product.image} className="w-1/6" alt={ product.title} />
            <p> {product.title}</p>
            <p className="font-bold">{product.price}</p>
            <button
                className={btnClasses.join(' ')}
                //className={'py-2 px-4 border '+ (details ? 'bg-yellow-400' : 'bg-blue-400') }
                onClick={() => setDetails(prev => !prev)}>
                {details ? 'Hide all details' : 'Show all details'}
            </button>
            {/* <button
                className="py-2 px-4 border bg-blue-400"
                onClick={() => setDetails(prev => !prev)}>
                Hide details
            </button> */}

            {details && <div>
                <p>{product.description}</p>
                <p>Rate: <span style={{fontWeight: 'bold'}}>{product.rating.rate}</span></p>
            </div>}
        </div>
    )
}