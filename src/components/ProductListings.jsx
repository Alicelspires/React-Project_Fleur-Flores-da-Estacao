import products from "../fleur.json"
import ProductListing from "./ProductListing"

export default function ProductsListings() {

  return (
    <>
      <section className="font-sans bg-gray-50 px-4 py-10">
          <div className="container-xl lg:container m-auto">
            <h2 className="text-3xl font-bold text-auburn-700 mb-6 text-center">
              Produtos em Destaque
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

              {products.slice(0, 3).map((product) => (
                <ProductListing key={product.id} product={product}/>
              ))}

            </div>
          </div>
        </section>
    </>
  )
}
