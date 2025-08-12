
export default function Hero(props) {
  return (
    <>
        <section className="py-20 mb-4 bg-[linear-gradient(to_right,rgba(0,0,0,0.3),rgba(0,0,0,0.3)),url(./assets/img-bg.jpg)] bg-cover bg-fixed bg-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
                Flores da Estação
              </h1>
              <p className="my-4 text-xl text-cookies-cream-300">
                Entrega rápida em toda São Paulo
              </p>
            </div>
          </div>
        </section>
    </>
  )
}
