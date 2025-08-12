import { useParams, useLoaderData, Link, useNavigate} from 'react-router-dom'
import { FaArrowLeft, FaMapMarkerAlt } from "react-icons/fa";
import {toast} from 'react-toastify';

export default function ProductPage({deleteProduct}) {
  const { id } = useParams();
  const product = useLoaderData();
  const productId = product.find((prod) => prod.id === id)
  const navegate = useNavigate()

  const onDeleteClick = (prodId) => {
    let confirm = window.confirm('Você tem certeza que deseja deletar esse item?')

    if(!confirm) return;

    deleteProduct(prodId)
    toast.success('Produto deletado!')
    navegate('/produtos')
  }

  return ( 
    <>
        <section className="bg-gray-50">
        <div className="container m-auto py-6 px-6 ">
          <a
            href="/produtos"
            className="text-cookies-cream-800 hover:text-cookies-cream-700 flex items-center">
            <FaArrowLeft className='mr-2 mt-1'/> Voltar para produtos
          </a>
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="container m-auto py-10 px-6">
          <div className="grid grid-cols-1 md-p:grid-cols-[70%_30%] w-full gap-6">
            <main>
              <div
                className="bg-white p-6 rounded-lg shadow-md text-center md:text-left">
                <div className="text-gray-500 mb-4">{productId.type}</div>
                <h1 className="text-3xl font-bold mb-4">
                  {productId.title}
                </h1>
                <div
                  className="text-gray-500 mb-4 flex align-middle justify-center md:justify-start"
                >
                  <FaMapMarkerAlt className="text-lg text-orange-700 mr-2 mt-1"/>
                  <p className="text-orange-700">{productId.location}</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                <h3 className="text-black text-lg font-bold mb-6">
                  Descrição
                </h3>

                <p className="mb-4">
                  {productId.description}
                </p>

                <h3 className="text-black-80 text-lg font-bold mb-2">Preço</h3>

                <p className="mb-4">{productId.price}</p>
              </div>
            </main>

            <aside>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-6">Empresa</h3>

                <h2 className="text-2xl">{productId.company.name}</h2>

                <p className="my-2">
                  {productId.company.description}
                </p>

                <hr className="my-4" />

                <h3 className="text-xl">Email:</h3>

                <p className="my-2 bg-cookies-cream-300 p-2 font-bold rounded-md">
                  {productId.company.contactEmail}
                </p>

                <h3 className="text-xl">Telefone:</h3>

                <p className="my-2 bg-cookies-cream-300 p-2 font-bold rounded-md">{productId.company.contactPhone}</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                <h3 className="text-xl font-bold mb-6">Atualizar informações</h3>
                <Link
                  to={`/editar-produto/${productId.id}`}
                  className="bg-cookies-cream-600 hover:bg-cookies-cream-500 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block">
                  Editar</Link>
                <button
                  onClick={ () => onDeleteClick(productId.id)}
                  className="bg-auburn-600 hover:bg-auburn-500 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block">
                  Deletar
                </button>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}

// const productLoader = async ({params}) => {
//   const res = await fetch(`/api/produtos/${params.id}`);
//   const data = await res.json();
//   return data;
// }

// export {ProductPage as default, productLoader}