import { NavLink } from 'react-router-dom'
import { FaPlus } from "react-icons/fa";
import imgLogo from '../assets/logo.png';

export default function Navbar() {

  const linkClass = ({isActive}) => 
    isActive ? 'text-white bg-auburn-500 hover:bg-auburn-400 rounded-md px-3 py-2' :
   'text-white bg-auburn-600 hover:bg-auburn-600 rounded-md px-3 py-2'

  return (
    <>
        <nav className="bg-auburn-600 border-b border-auburn-500 font-sans">
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="flex h-20 items-center justify-between">
              <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
                <NavLink className="flex flex-shrink-0 items-center mr-4" to="/">
                  <img
                    className="h-10 w-auto"
                    src={imgLogo}
                    alt="Fleur"
                  />
                  <span className="hidden md:block text-white text-2xl font-bold ml-2">
                    Fleur 
                  </span>
                </NavLink>
                
                <div className="md:ml-auto">
                  <div className="flex space-x-2">
                    <NavLink
                      to="/"
                      className={linkClass}>
                      Início
                    </NavLink>
                    <NavLink
                      to="/produtos"
                      className={linkClass}>
                      Produtos
                    </NavLink>
                    <NavLink
                      to="/adicionar-produto"
                      className={linkClass}>
                      <FaPlus className="text-white text-xl pt-1"/>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
    </>
  )
}
