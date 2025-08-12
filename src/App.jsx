import {
    Route, 
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider
} from 'react-router-dom'

import MainLayout from './layouts/MainLayout'
import HomePage from './pages/HomePage'
import ProductsPage from './pages/ProductsPage'
import NotFound from './pages/NotFound'
import ProductPage from './pages/ProductPage'
import AddProductPage from './pages/AddProduct'
import EditProductPage from './pages/EditProductPage'
import { productLoader, addProductSubmit, deleteProduct, updateProduct} from './api/productsAPI';

export default function App() {

  const router = createBrowserRouter(
    createRoutesFromElements([
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />}/>
        <Route path="/produtos" element={<ProductsPage />} />
        <Route path="/editar-produto/:id" element={<EditProductPage updateProductSubmit={updateProduct}/>} loader={productLoader}/>
        <Route path="/adicionar-produto" element={<AddProductPage addProduct={addProductSubmit}/>} />
        <Route path="/produtos/:id" element={<ProductPage deleteProduct={deleteProduct}/>} loader={productLoader}/>
        <Route path="*" element={<NotFound />} />
      </Route>
    ])
  )

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}
