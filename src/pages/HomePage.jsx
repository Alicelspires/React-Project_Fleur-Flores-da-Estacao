import Hero from '../components/Hero'
import HomeCards from '../components/HomeCards'
import ProductListings from '../components/ProductListings'
import ViewAllProducts from '../components/ViewAllProducts'

export default function Home() {
  return (
    <>
      <Hero />
      <HomeCards />
      <ProductListings isHome={true}/>
      <ViewAllProducts />
    </>
  )
}
