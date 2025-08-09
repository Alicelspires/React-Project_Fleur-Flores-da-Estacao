import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HomeCards from './components/HomeCards'
import ProductListings from './components/ProductListings'
import ViewAllProducts from './components/ViewAllProducts'

export default function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <HomeCards />
      <ProductListings />
      <ViewAllProducts />
    </>
  )
}
