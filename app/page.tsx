'use client'
import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import IndexNavbar from "./components/Navbars/IndexNavbar";
import Footer from "./components/Footers/Footer";
import ModalGetToken from "./components/ModalGetToken"

export default function Index() {
  const [modalOpen, setModalOpen] = useState(false);
  const [userIP, setUserIP] = useState(null);
  const cancelButtonRef = useRef(null);
  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    // Função para obter o endereço IP do cliente
    async function fetchUserIP() {
      try {
        const response = await fetch('/api/ip'); // Endpoint que criamos
        if (response.ok) {
          const data = await response.json();
          setUserIP(data.userIP);
        } else {
          console.error('Erro ao obter o endereço IP');
        }
      } catch (error) {
        console.error('Erro ao buscar o endereço IP', error);
      }
    }

    fetchUserIP(); // Chama a função para buscar o endereço IP ao montar o componente
  }, []);
  return (
    <>
      <IndexNavbar fixed />
      <section className="header relative pt-16 items-center flex h-screen max-h-860-px">
        <div className="container mx-auto items-center flex flex-wrap">
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
            <div className="pt-32 sm:pt-0">
              <h2 className="font-semibold text-4xl text-blueGray-600">
                Virtual Tips - Suas Dicas para Apostas Esportivas
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-blueGray-500">

                O Virtual Tips é uma ferramenta de dicas de apostas esportivas, oferecendo estatísticas em tempo real, análises de especialistas e informações valiosas para aprimorar suas estratégias.
              </p>
              <div className="mt-12">
                <Link
                  href="#"
                  rel="noopener noreferrer"
                  className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                >
                  Quero Começar!
                </Link>

              </div>
            </div>
          </div>
        </div>

        <img
          className="absolute top-0 b-auto right-0  sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-860px"
          src="/img/fundo.png"
          alt="..."
        />
      </section>

      <section className="mt-48 md:mt-40 pb-40 relative bg-blueGray-100">
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-blueGray-100 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-32">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-lightBlue-500">
                <img
                  alt="..."
                  src="/img/bot.png"
                  className="w-full align-middle rounded-t-lg"
                />
                <blockquote className="relative p-8 mb-4">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    className="absolute left-0 w-full block h-95-px -top-94-px"
                  >
                    <polygon
                      points="-30,95 583,95 583,65"
                      className="text-lightBlue-500 fill-current"
                    ></polygon>
                  </svg>
                  <h4 className="text-xl font-bold text-white">
                    Crie seu Bot com Sua Estratégia
                  </h4>
                  <p className="text-md font-light mt-2 text-white">
                    A criação do seu bot nunca foi tão fácil,
                    graças à combinação de dados capturado pelo nosso Robô.
                    você pode facilmente personalizar e construir seus bots
                    de acordo com a sua estratégia. Além disso,
                    você pode receber as dicas do seu bot via Telegram de forma fácil e automatizada.
                  </p>
                </blockquote>
              </div>
            </div>

            <div className="w-full md:w-6/12 px-4">
              <div className="flex flex-wrap">
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fa-brands fa-telegram"></i>
                      </div>
                      <h6 className="text-xl mb-1 text-blueGray-500 font-semibold">
                        Alertas via Telegram
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                        O bot enviará alertas personalizados diretamente para o seu canal no Telegram,
                        tornando a experiência ainda mais individualizada
                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fa-solid fa-hourglass-half"></i>
                      </div>
                      <h6 className="text-xl mb-1 text-blueGray-500 font-semibold">
                        Real Time
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                        O bot oferece informações em tempo real,
                        garantindo dados atualizados para tomadas de decisão precisas.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col min-w-0 mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fa-solid fa-gears"></i>
                      </div>
                      <h6 className="text-xl mb-1 text-blueGray-500 font-semibold">Configurações</h6>
                      <p className="mb-4 text-blueGray-500">
                        Crie um bot personalizado ajustando diversos parâmetros,
                        tornando-o único e eficaz para suas metas
                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fa-solid fa-circle-chevron-down"></i>
                      </div>
                      <h6 className="text-xl mb-1 text-blueGray-500 font-semibold">
                        Comprovação
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                        O bot pode apresentar evidências sólidas dos dados e resultados obtidos.
                        direto no site da bet365
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="container mx-auto overflow-hidden pb-20">
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48">
              <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                <i className="fas fa-sitemap text-xl"></i>
              </div>
              <h3 className="text-3xl mb-2 text-blueGray-600 font-semibold leading-normal">
                Multiligas
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                O bot rastreia e obtém dados de quatro ligas: Copa do Mundo, Euro Cup,
                Super Liga Sul-Americana e Premier League. Fique informado sobre todas
                essas competições.
              </p>
              <div className="block pb-6">
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Copa
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Euro
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Super Liga
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Premier
                </span>

              </div>
              <Link
                rel="noopener noreferrer"
                href="https://www.bet365.com/#/AVR/B146/R^1/"
                target="_blank"
                className="font-bold text-blueGray-700 hover:text-blueGray-500 ease-linear transition-all duration-150"
              >
                Acessar Ligas{" "}
                <i className="fa fa-angle-double-right ml-1 leading-relaxed"></i>
              </Link>
            </div>

            <div className="w-full md:w-5/12 px-4 mr-auto ml-auto mt-32">
              <div className="relative flex flex-col min-w-0 w-full mb-6 mt-48 md:mt-0">
                <img
                  alt="..."
                  src="/img/over2_5.png"
                  className="w-full align-middle rounded absolute shadow-lg max-w-100-px z-3 left-145-px -top-29-px"
                />
                <img
                  alt="..."
                  src="/img/futebol.png"
                  className="w-full align-middle rounded-lg absolute shadow-lg -top-160-px left-260-px max-w-210-px"
                />
                <img
                  alt="..."
                  src="/img/futebol_virtual.png"
                  className="w-full align-middle rounded-lg absolute shadow-lg max-w-180-px -top-225-px left-40-px z-2"
                />
                <img
                  alt="..."
                  src="/img/word.png"
                  className="w-full align-middle rounded-lg absolute shadow-2xl max-w-150-px -left-50-px top-25-px"
                />
                <img
                  alt="..."
                  src="/img/bet365.png"
                  className="w-full align-middle rounded absolute shadow-xl max-w-120-px left-195-px top-95-px"
                />
              </div>
            </div>
          </div>


        </div> */}

        <div className="container mx-auto px-4 pb-32 pt-2">
          <div className="items-center flex flex-wrap">
            <div className="w-full md:w-5/12 ml-auto px-12 md:px-4">
              <div className="md:pr-12">
                <h3 className="text-3xl text-blueGray-500 font-semibold">
                  Acesso aos Dados Bet365
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                  O bot Virtualtips acessa o site da Bet365, mas as informações são
                  responsabilidade exclusiva da Bet365. O bot apenas disponibiliza os dados,
                  sem controle sobre precisão ou autenticidade. Utilize com discernimento e responsabilidade.
                </p>
                <ul className="list-none mt-6">
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                          <i className="fas fa-fingerprint"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                          Diferencial único ao acessar o site da Bet365
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">

                          <i className="fa-solid fa-money-bill-wave"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                          Token VTIP de recompensas e vantagens
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                          <i className="fa-solid fa-users-rays"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                          Desenvolvimento e Personalização de Bots
                        </h4>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0">
              <img
                alt="..."
                className="max-w-full rounded-lg shadow-xl"
                style={{
                  transform:
                    "scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)",
                }}
                src="/img/resultado_final.png"
              />
            </div>
          </div>
        </div>

      </section>


      {/* <section className="py-20 bg-blueGray-600 overflow-hidden">
        <div className="container mx-auto pb-64">
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-5/12 px-12 md:px-4 ml-auto mr-auto md:mt-64">
              <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                <i className="fas fa-code-branch text-xl"></i>
              </div>
              <h3 className="text-3xl mb-2 font-semibold leading-normal text-white">
                Open Source
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-400">
                Since{" "}
                <Link
                  rel="noopener noreferrer"
                  href="https://tailwindcss.com/?ref=creativetim"
                  className="text-blueGray-300"
                  target="_blank"
                >
                  Tailwind CSS
                </Link>{" "}
                is an open source project we wanted to continue this movement
                too. You can give this version a try to feel the design and also
                test the quality of the code!
              </p>
              <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-400">
                Get it free on Github and please help us spread the news with a
                Star!
              </p>
              <Link
                rel="noopener noreferrer"
                href="https://github.com/creativetimofficial/notus-react?ref=nr-index"
                target="_blank"
                className="github-star mt-4 inline-block text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg"
              >
                Github Star
              </Link>
            </div>

            <div className="w-full md:w-4/12 px-4 mr-auto ml-auto mt-32 relative">
              <i className="fab fa-github text-blueGray-700 absolute -top-150-px -right-100 left-auto opacity-80 text-55"></i>
            </div>
          </div>
        </div>
      </section> */}

      <section className="pb-16 bg-blueGray-200 relative pt-32">


        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center bg-white shadow-xl rounded-lg -mt-64 py-16 px-12 relative z-10">
            <div className="w-full text-center lg:w-8/12">
              <p className="text-4xl text-center">
                <span role="img" aria-label="love">
                  😍
                </span>
              </p>
              <h3 className="font-semibold text-blueGray-500 text-3xl">
                Curta nossas redes Sociais e Ganhe token VTIP Grátis
              </h3>
              <p className="text-blueGray-500 text-lg leading-relaxed mt-4 mb-4">
                O nosso bot, Virtualtips, é alimentado pelo token VTIP na rede Polygon,
                a chave para desbloquear recursos exclusivos. Com o VTIP na rede Polygon,
                você pode ter acesso a informações privilegiadas e aproveitar os benefícios
                adicionais que o token oferece. Além disso, a rede Polygon é conhecida por
                suas taxas incrivelmente baixas, chegando a ser apenas centavos,
                tornando sua experiência com o bot ainda mais vantajosa.
              </p>
              <div className="sm:block flex flex-col mt-10">
                <Link
                  rel="noopener noreferrer"
                  href="#"
                  onClick={openModal}
                  className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-2 bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                >
                  Ganhe VTIP Grátis
                </Link>
                <ModalGetToken open={modalOpen} setOpen={closeModal} cancelButtonRef={cancelButtonRef} />
                <Link
                  rel="noopener noreferrer"
                  href="https://polygonscan.com/token/0x975b5fee213d48364a87f580d7565cce80ab3f3d"
                  target="_blank"
                  className="github-star sm:ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg"
                >
                  <i className="fa-solid fa-key text-lg mr-1"></i>
                  <span>VTIP</span>
                </Link>
              </div>
              <div className="text-center mt-16"></div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}