import Layout from "../../components/layout";

const Feature = () => {
  return (
    <main>
      <Layout>
        <section>
          <div className="max-w-6xl mx-auto px-2 sm:px-3">
            <div className="py-5 md:py-10 border-t border-gray-400">
              {/* Section header */}
              <div className="max-w-3xl mx-auto text-center pb-5 md:pb-20">
                <p className="text-xl text-gray-400">
                  A gestão eficiente do fluxo de mercadorias, desde o ponto de
                  origem até o ponto de consumo, é crucial para nossas operações
                  logísticas
                </p>
              </div>

              {/* Testimonials */}
              <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none">
                {/* 1st testimonial */}
                <div
                  className="flex flex-col h-full p-6 bg-gray-800"
                  data-aos="fade-up"
                >
                  <div>
                    <div className="relative inline-flex flex-col mb-4">
                      <svg
                        className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-purple-600"
                        viewBox="0 0 24 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                      </svg>
                    </div>
                  </div>
                  <blockquote className="text-lg text-gray-400 grow">
                    — Nosso objetivo é garantir que as mercadorias sejam
                    entregues da maneira mais econômica e oportuna, contribuindo
                    para a satisfação do cliente e o crescimento dos negócios.
                  </blockquote>
                  <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                    <cite className="text-gray-200 not-italic">
                      Anastasia Dan
                    </cite>{" "}
                    -{" "}
                    <a
                      className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out"
                      href="#0"
                    >
                      UX Board
                    </a>
                  </div>
                </div>

                {/* 2nd testimonial */}
                <div
                  className="flex flex-col h-full p-6 bg-gray-800"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div>
                    <div className="relative inline-flex flex-col mb-4">
                      <svg
                        className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-purple-600"
                        viewBox="0 0 24 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                      </svg>
                    </div>
                  </div>
                  <blockquote className="text-lg text-gray-400 grow">
                    — Nossa equipe dedicada garante o transporte e armazenamento
                    perfeitos de mercadorias. Nos esforçamos pela excelência em
                    cada etapa de nossa cadeia de suprimentos, desde a gestão de
                    estoque até a realização de pedidos.
                  </blockquote>
                  <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                    <cite className="text-gray-200 not-italic">
                      Anastasia Dan
                    </cite>{" "}
                    -{" "}
                    <a
                      className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out"
                      href="#0"
                    >
                      UX Board
                    </a>
                  </div>
                </div>

                {/* 3rd testimonial */}
                <div
                  className="flex flex-col h-full p-6 bg-gray-800"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <div>
                    <div className="relative inline-flex flex-col mb-4">
                      <svg
                        className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-purple-600"
                        viewBox="0 0 24 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                      </svg>
                    </div>
                  </div>
                  <blockquote className="text-lg text-gray-400 grow">
                    — Com foco no futuro, estamos desenvolvendo processos de
                    entrega inteligentes que prometem transformar a maneira como
                    o mundo percebe o transporte e a entrega de mercadorias.
                  </blockquote>
                  <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                    <cite className="text-gray-200 not-italic">
                      Anastasia Dan
                    </cite>{" "}
                    -{" "}
                    <a
                      className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out"
                      href="#0"
                    >
                      UX Board
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </main>
  );
};

export default Feature;
