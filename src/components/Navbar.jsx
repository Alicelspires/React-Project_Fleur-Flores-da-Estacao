import React from 'react'
import imgLogo from '../assets/logo.png';

export default function Navbar() {
  return (
    <>
        <nav className="bg-auburn-600 border-b border-auburn-500 font-sans">
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="flex h-20 items-center justify-between">
              <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
                <a className="flex flex-shrink-0 items-center mr-4" href="/">
                  <img
                    className="h-10 w-auto"
                    src={imgLogo}
                    alt="Fleur"
                  />
                  <span className="hidden md:block text-white text-2xl font-bold ml-2">
                    Fleur 
                  </span>
                </a>
                
                <div className="md:ml-auto">
                  <div className="flex space-x-2">
                    <a
                      href="/"
                      className="text-white bg-auburn-500 hover:bg-auburn-400 rounded-md px-3 py-2">
                      Início
                    </a>
                    <a
                      href="/flores"
                      className="text-white hover:bg-auburn-400 rounded-md px-3 py-2">
                      Flores
                    </a>
                    <a
                      href="/carrinho"
                      className="text-white hover:bg-auburn-400 rounded-md px-3 py-2">
                      Meu Carrinho
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
    </>
  )
}
