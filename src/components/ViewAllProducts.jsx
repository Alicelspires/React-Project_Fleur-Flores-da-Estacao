import {Link} from 'react-router-dom'

export default function ViewAllProducts() {
  return (
    <>
        <section className="font-sans m-auto max-w-lg my-10 px-6">
          <Link
            to="/produtos"
            className="block bg-cookies-cream-700 text-white text-center py-4 px-6 rounded-xl hover:bg-cookies-cream-600 font-medium"
          >
            Ver Todas as Flores
          </Link>
        </section>
    </>
  )
}
