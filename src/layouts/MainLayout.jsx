import Navbar from '../components/Navbar'
import Footer from  '../components/Footer'
import {ToastContainer} from 'react-toastify'

import { Outlet } from 'react-router-dom'

export default function MainLayout() {
  return (
    <>
        <Navbar />
        <ToastContainer />
        <Outlet />
        <Footer />
    </>
  )
}
