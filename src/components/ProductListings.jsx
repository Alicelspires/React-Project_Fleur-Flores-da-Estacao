// import products from "../fleur.json"
import { useEffect, useState } from 'react'
import ProductListing from "./ProductListing"
import Spinner from './Spinner'

export default function ProductsListings({isHome = false}) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const apiUrl = isHome 
        ? '/api/produtos?_limit=3' 
        : '/api/produtos/';

      try {
        const res = await fetch(apiUrl)
        const data = await res.json();

        setProducts(data)

      } catch (error) {
        console.error("Error fetching", error)

      } finally {

        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  return (
    <>
      <section className="font-sans bg-gray-50 px-4 py-10">
          <div className="container-xl lg:container m-auto">
            <h2 className="text-3xl font-bold text-cookies-cream-800 mb-6 text-center">
              {isHome ? "Produtos em Destaque" : "Conheça nossos produtos"}
            </h2>
              {loading ? (
                <Spinner loading={loading}/>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {products.map((product) => (
                    <ProductListing key={product.id} product={product}/>
                  ))}
                </div>
              )}
          </div>
        </section>
    </>
  )
}
