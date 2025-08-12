import Card from "./Card"
import {Link} from 'react-router-dom'

export default function HomeCards() {
  return (
    <>
        <section className="font-sans py-4">
          <div className="container-xl lg:container m-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">

              <Card>
                <h2 className="text-2xl font-bold">Presentes</h2>
                <p className="mt-2 mb-4">
                    Arranjos especiais para todas as ocasiões
                </p>
                <Link  to="/produtos"
                    className="inline-block bg-auburn-600 text-white rounded-lg px-4 py-2 hover:bg-auburn-700">
                    Ver Opções
                </Link>
              </Card>
              
              <Card bg='bg-cookies-cream-300'>
                <h2 className="text-2xl font-bold">Assinatura Mensal</h2>
                <p className="mt-2 mb-4">
                  Receba flores frescas todo mês na sua casa
                </p>
                <Link
                  to="/assinatura"
                  className="inline-block bg-auburn-600 text-white rounded-lg px-4 py-2 hover:bg-auburn-700"
                >
                  Assinar
                </Link>
              </Card>

            </div>
          </div>
        </section>
    </>
  )
}
