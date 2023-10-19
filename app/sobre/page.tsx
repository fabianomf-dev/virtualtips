'use client';
import React from "react";
import Link from "next/link";
import IndexNavbar from "../components/Navbars/IndexNavbar";
import Footer from "../components/Footers/Footer";

export default function Sobre() {
    return (
        <>
            <IndexNavbar fixed />
            <section className="header relative pt-16 items-center flex h-screen max-h-760-px">
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
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                                >
                                    Quero Começar!
                                </Link>

                            </div>
                        </div>
                    </div>
                </div>

                <img
                    className="absolute top-0 b-auto right-0  sm:w-6/12 -mt-40 sm:mt-0 w-10/12 max-h-860px"
                    src="/img/fundo.png"
                    alt="..."
                />
            </section>



            <section className="mt-48 md:mt-40 pb-40 relative bg-blueGray-100">


                <div className="container mx-auto">
                    <div className="flex flex-wrap justify-center bg-white shadow-xl rounded-lg -mt-64 py-10 px-12 relative z-10">
                        <div className="w-full text-center lg:w-8/12">

                            <h3 className="font-semibold text-blueGray-500 text-3xl">
                                Virtual Tips?
                            </h3>

                            <p className="text-blueGray-500 text-left text-lg leading-relaxed mt-4 mb-4">
                                O Bot VirtualTips é uma plataforma inovadora que
                                se destaca por oferecer informações em tempo real,
                                com foco especial em análises detalhadas de eventos esportivos,
                                especialmente ao acessar o site da renomada casa de apostas Bet365.
                                Suas funcionalidades abrangem desde a minuciosa coleta até a
                                rápida disponibilização de dados extremamente precisos e
                                consistentemente atualizados, estabelecendo-se assim como
                                uma ferramenta inestimável para entusiastas que exploram
                                tanto apostas esportivas quanto análises de informações
                                esportivas. Ademais, o Bot VirtualTips apresenta o token VTIP,
                                uma criptomoeda que desempenha um papel fundamental para desbloquear
                                vantagens verdadeiramente exclusivas. Os detentores do VTIP têm a
                                oportunidade de acumular esse token valioso por meio de uma participação
                                ativa na comunidade, o que acrescenta um incentivo adicional e estimulante
                                para a interação. A integração cuidadosa e perfeitamente sintonizada com
                                a rede Polygon é uma característica notável, garantindo transações
                                extremamente eficazes e eficientes com taxas excepcionalmente baixas.
                                Contudo, é fundamental salientar que todas as informações disponibilizadas
                                pelo Bot VirtualTips são provenientes de fontes externas respeitáveis e
                                confiáveis. Portanto, é crucial que os usuários façam uso desses dados
                                com discernimento e responsabilidade ao tomarem decisões financeiras.
                            </p>



                            <div className="text-center mt-16"></div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}
