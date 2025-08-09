import { useState } from "react"
import { FaHistory } from "react-icons/fa"

export default function ProductListing({product}) {
    const [showFullDescription, setShowFullDescription] = useState(false);

    let description = product.description;
    if(!showFullDescription){
        description = description.substring(0, 90) + "..."
    }

    return (
        <>
            <div className="bg-white rounded-xl shadow-md relative">
                <div className="p-4">
                <div className="mb-6">
                    <div className="text-gray-600 my-2">{product.type}</div>
                    <h3 className="text-xl font-bold">{product.title}</h3>
                </div>
                <div className="mb-5">
                    {description}
                </div>
                <button 
                    className="text-gray-600 mb-5 cursor-pointer" 
                    onClick={() => setShowFullDescription((prevState) => !prevState)}>
                    {showFullDescription ? 'Less': 'More'}
                </button>
                <h3 className="text-auburn-600 mb-2">{product.price}</h3>
                <div className="border border-gray-100 mb-5"></div>
                <div className="flex flex-col lg:flex-row justify-between mb-4">
                    <div className="text-gray-700 mb-3">
                    <FaHistory className="inline text-lg mb-1 mr-1"/>
                    {product.delivery}
                    </div>
                    <a
                    href={`/products/${product.id}`}
                    className="h-[36px] bg-auburn-600 hover:bg-auburn-700 text-white px-4 py-2 rounded-lg text-center text-sm"
                    >
                    Comprar
                    </a>
                </div>
                </div>
            </div>
        </>
    )
}
