import {Link} from 'react-router-dom'
import {FaExclamationTriangle} from 'react-icons/fa'

export default function NotFound() {
  return (
    <>
        <section className="text-center flex flex-col justify-center items-center h-96">
            <FaExclamationTriangle className="text-yellow-500 text-6xl mb-4"/>
            <h1 className="text-6xl font-bold mb-4">404 Not Found</h1>
            <p className="text-xl mb-5">Essa página não existe</p>
            <Link
            to="/index.html"
            className="text-white bg-auburn-500 hover:bg-auburn-600 rounded-md px-3 py-2 mt-4"
            >
                Voltar
            </Link>
        </section>
    </>
  )
}
