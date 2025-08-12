import { useParams, useLoaderData, useNavigate} from 'react-router-dom'
import {useState} from "react"
import {toast} from 'react-toastify';

export default function EditProductPage({updateProductSubmit}) {
    const { id } = useParams();
    const product = useLoaderData();
    const productId = product.find((prod) => prod.id === id);

    const [title, setTitle] = useState(productId.title);
    const [type, setType] = useState(productId.type);
    const [location, setLocation] = useState(productId.location);
    const [description, setDescription] = useState(productId.description);
    const [price, setPrice] = useState(productId.price);
    const [companyName, setCompanyName] = useState(productId.company.name);
    const [contactEmail, setCompanyEmail] = useState(productId.company.contactEmail);
    const [contactPhone, setCompanyPhone] = useState(productId.company.contactPhone);
    const [companyDescription, setCompanyDescription] = useState(productId.company.description);

    const navigate = useNavigate();

    const submitForm = (e) => {
        e.preventDefault();

        const updatedProduct = {
            id,
            title,
            type,
            location,
            description,
            price,
            company: {
                name: companyName,
                description: companyDescription,
                contactEmail,
                contactPhone,
            }
        }

        updateProductSubmit(updatedProduct)
        toast.success('Produto atualizado!')
        return navigate(`/produtos/${id}`)
    }

  return (
    <>
        <section className="bg-gray-100">
            <div className="container m-auto max-w-2xl py-24">
                <div
                className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
                <form onSubmit={submitForm}>
                    <h2 className="text-3xl text-center font-semibold mb-6 text-cookies-cream-800">Atualizar produto</h2>

                    <div className="mb-4">
                        <label htmlFor="type" className="block text-black font-bold mb-2">Tipo</label>
                        <select
                            id="type"
                            name="type"
                            className="border rounded w-full py-2 px-3"
                            required
                            value={type}
                            onChange={(e) => setType(e.target.value)}>

                            <option value="Flor Natural">Flor Natural</option>
                            <option value="Planta em Vaso">Planta em Vaso</option>
                            <option value="Ferramentas de Jardinagem">Ferramentas de Jardinagem</option>
                            <option value="Planta artificial">Planta artificial</option>
                        </select>
                    </div>

                    <div className="mb-4">
                    <label className="block text-black font-bold mb-2">Nome</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        className="border rounded w-full py-2 px-3 mb-2"
                        placeholder="Red Roses"
                        required
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    </div>
                    <div className="mb-4">
                    <label
                        htmlFor="description"
                        className="block text-black font-bold mb-2">Descrição</label>
                    <textarea
                        id="description"
                        name="description"
                        className="border rounded w-full py-2 px-3"
                        rows="4"
                        placeholder="Adicione informações sobre o produto "
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}></textarea>
                    </div>

                    <div className="mb-4">
                    <label htmlFor="type" className="block text-black font-bold mb-2">Preço</label>
                    <select
                        id="price"
                        name="price"
                        className="border rounded w-full py-2 px-3"
                        required
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}>
                        <option value="R$ 120,00">R$ 120,00</option>
                        <option value="R$ 100,00">R$ 100,00</option>
                        <option value="R$ 95,00">R$ 95,00</option>
                        <option value="R$ 90,00">R$ 90,00</option>
                        <option value="R$ 90,00">R$ 90,00</option>
                        <option value="R$ 70,00">R$ 70,00</option>
                        <option value="R$ 65,00">R$ 65,00</option>
                        <option value="R$ 50,00">R$ 50,00</option>
                        <option value="R$ 46,00">R$ 46,00</option>
                        <option value="R$ 32,00">R$ 32,00</option>
                        <option value="R$ 25,00">R$ 25,00</option>
                    </select>
                    </div>

                    <div className='mb-4'>
                    <label className='block text-black font-bold mb-2'>
                        Local
                    </label>
                    <input
                        type='text'
                        id='location'
                        name='location'
                        className='border rounded w-full py-2 px-3 mb-2'
                        placeholder='Local'
                        required
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                    />
                    </div>

                    <h3 className="text-2xl mb-5">Informações do fornecedor</h3>

                    <div className="mb-4">
                    <label htmlFor="company" className="block text-black font-bold mb-2">Nome da empresa</label>
                    <input
                        type="text"
                        id="company"
                        name="company"
                        className="border rounded w-full py-2 px-3"
                        placeholder="Nome da empresa"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}/>
                    </div>

                    <div className="mb-4">
                    <label
                        htmlFor="company_description"
                        className="block text-black font-bold mb-2">Descrição da empresa</label>
                    <textarea
                        id="company_description"
                        name="company_description"
                        className="border rounded w-full py-2 px-3"
                        rows="4"
                        placeholder="Quais são os principais fornecimentos..."
                        value={companyDescription}
                        onChange={(e) => setCompanyDescription(e.target.value)}></textarea>
                    </div>

                    <div className="mb-4">
                    <label
                        htmlFor="contact_email"
                        className="block text-black font-bold mb-2">Email</label>
                    <input
                        type="email"
                        id="contact_email"
                        name="contact_email"
                        className="border rounded w-full py-2 px-3"
                        placeholder="Endereço de email"
                        required
                        value={contactEmail}
                        onChange={(e) => setCompanyEmail(e.target.value)}/>
                    </div>
                    <div className="mb-4">
                    <label
                        htmlFor="contact_phone"
                        className="block text-black font-bold mb-2">Telefone</label>
                    <input
                        type="tel"
                        id="contact_phone"
                        name="contact_phone"
                        className="border rounded w-full py-2 px-3"
                        placeholder="Telefone (opcional)"
                        value={contactPhone}
                        onChange={(e) => setCompanyPhone(e.target.value)}/>
                    </div>

                    <div>
                    <button
                        className="bg-auburn-700 hover:bg-auburn-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                        type="submit">
                        Atualizar produto
                    </button>
                    </div>
                </form>
                </div>
            </div>
        </section>
    </>
  )
}
