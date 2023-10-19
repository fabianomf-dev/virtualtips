'use client';
import React from "react";
import Link from "next/link";
import IndexNavbar from "../components/Navbars/IndexNavbar";
import Footer from "../components/Footers/Footer";

export default function Politica() {
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
                                Política de Privacidade do Bot Virtualtips!
                            </h3>
                            <p className="text-blueGray-500 text-lg leading-relaxed mt-4 mb-4">
                                Última atualização: Outubro 2023
                            </p>
                            <p className="text-blueGray-500 text-lg leading-relaxed mt-4 mb-4">
                                A Política de Privacidade do Bot Virtualtips descreve como coletamos, usamos e protegemos suas informações pessoais quando você utiliza nossos serviços. Ao utilizar o bot Virtualtips, você concorda com esta política.
                            </p>

                            <p className="text-blueGray-500 text-left  text-lg leading-relaxed mt-4 mb-4">
                                <h4 className="font-semibold text-left text-blueGray-500 text-1xl">Coleta de Informações:</h4>
                                O bot Virtualtips coleta informações que você fornece voluntariamente, como nome de usuário, informações de perfil ou interações com o bot. Também podemos coletar informações técnicas, como endereço IP e dados de uso.
                            </p>
                            <p className="text-blueGray-500 text-left  text-lg leading-relaxed mt-4 mb-4">
                                <h4 className="font-semibold text-left text-blueGray-500 ">
                                    Uso de Informações:
                                </h4>
                                As informações coletadas são utilizadas para melhorar nossos serviços, personalizar sua experiência e fornecer informações relevantes. Não compartilhamos suas informações com terceiros, a menos que seja necessário para cumprir com obrigações legais ou melhorar os serviços
                            </p>
                            <p className="text-blueGray-500 text-left  text-lg leading-relaxed mt-4 mb-4">
                                <h4 className="font-semibold text-left text-blueGray-500 ">
                                    Cookies e Tecnologias Semelhantes:
                                </h4>
                                O bot Virtualtips pode usar cookies e tecnologias semelhantes para melhorar a funcionalidade do serviço e entender como você interage com ele.
                            </p>

                            <p className="text-blueGray-500 text-left  text-lg leading-relaxed mt-4 mb-4">
                                <h4 className="font-semibold text-left text-blueGray-500 ">
                                    Proteção de Dados:
                                </h4>
                                Adotamos medidas de segurança para proteger suas informações pessoais, mas não podemos garantir a segurança completa. Recomendamos que você mantenha suas credenciais de acesso em segurança.
                            </p>
                            <p className="text-blueGray-500 text-left  text-lg leading-relaxed mt-4 mb-4">
                                <h4 className="font-semibold text-left text-blueGray-500 ">
                                    Direitos do Usuário:
                                </h4>
                                Você tem o direito de acessar, corrigir e excluir suas informações pessoais. Para exercer esses direitos ou fazer perguntas sobre nossa política de privacidade, entre em contato conosco.
                            </p>
                            <p className="text-blueGray-500 text-left  text-lg leading-relaxed mt-4 mb-4">
                                <h4 className="font-semibold text-left text-blueGray-500 ">
                                    Mudanças na Política de Privacidade:
                                </h4>
                                Esta política de privacidade pode ser atualizada periodicamente. A versão mais recente estará disponível no bot Virtualtips.
                            </p>
                            <p className="text-blueGray-500 text-left  text-lg leading-relaxed mt-4 mb-4">
                                <h4 className="font-semibold text-left text-blueGray-500 ">
                                    Aceitação dos Termos:
                                </h4>
                                Ao usar o bot Virtualtips, você concorda com esta política de privacidade. Se você não concordar, não continue utilizando nossos serviços.
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
