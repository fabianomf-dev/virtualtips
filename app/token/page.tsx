'use client';
import React, { useRef, useState } from 'react'
import Link from "next/link";
import IndexNavbar from "../components/Navbars/IndexNavbar";
import Footer from "../components/Footers/Footer";
import ModalGetToken from "../components/ModalGetToken"

export default function Termos() {
    const [modalOpen, setModalOpen] = useState(false);
    const cancelButtonRef = useRef(null);
    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };
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
                                Token VirtualTips(VTIP)
                            </h3>
                            <p className="text-blueGray-500 text-left text-lg leading-relaxed mt-4 mb-4">
                                O token VTIP, vinculado ao projeto VirtualTips,
                                é uma parte essencial de nossa plataforma.
                                Esse token opera na rede Polygon (anteriormente conhecida como Matic)
                                e é representado pelo símbolo VTIP. Seu contrato inteligente específico é
                                identificado como <strong>0x975b5fee213d48364a87f580d7565cce80ab3f3d</strong> .
                            </p>
                            <p className="text-blueGray-500 text-left text-lg leading-relaxed mt-4 mb-4">
                                Com um suprimento total de 1,000,000,000 (1 bilhão) de tokens VTIP, essa criptomoeda
                                desempenha um papel vital em nossa comunidade. Para monitorar e
                                explorar todas as informações relevantes sobre o token VTIP,
                                você pode acessar o Polygonscan no seguinte link:
                            </p>
                            <p className="text-blueGray-500 text-lg text-left leading-relaxed mt-4 mb-4">

                                <Link
                                    rel="noopener noreferrer"
                                    className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                                    href="https://polygonscan.com/token/0x975b5fee213d48364a87f580d7565cce80ab3f3d"
                                    target="_blank"
                                >
                                    Polygonscan VTIP
                                </Link>
                            </p>
                            <p className="text-blueGray-500 text-left text-lg leading-relaxed mt-4 mb-4">
                                O token VTIP é um ativo digital que pode ser usado em nossa plataforma
                                para acesso a recursos exclusivos e recompensas. Como parte da comunidade
                                VirtualTips, seu uso pode trazer benefícios adicionais. Lembre-se de
                                que as informações sobre o token VTIP podem estar sujeitas a atualizações e mudanças.
                            </p>
                            <p className="text-blueGray-500 text-left text-lg leading-relaxed mt-4 mb-4">
                                Quanto à listagem do token VTIP em CEX (Centralized Exchanges)
                                e DEX (Decentralized Exchanges), isso dependerá das negociações
                                da equipe de desenvolvimento do VirtualTips com várias plataformas
                                de câmbio. Normalmente, a listagem em CEXs pode acontecer quando
                                o token ganha reconhecimento e liquidez significativa. Por outro
                                lado, a inclusão em DEXs é muitas vezes mais flexível e pode ser
                                realizada por meio de contratos inteligentes em blockchains como
                                a Polygon.
                            </p>
                            <p className="text-blueGray-500 text-left text-lg leading-relaxed mt-4 mb-4">
                                Para obter informações atualizadas sobre a listagem do VTIP
                                em diferentes exchanges, recomenda-se verificar as atualizações
                                diretamente nos canais oficiais do projeto VirtualTips ou nas
                                redes sociais relacionadas. Essas informações podem estar
                                sujeitas a mudanças com ba
                            </p>



                            <div className="text-center mt-16"></div>
                        </div>
                    </div>
                </div>
            </section>
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
