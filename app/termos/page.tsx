'use client';
import React from "react";
import Link from "next/link";
import IndexNavbar from "../components/Navbars/IndexNavbar";
import Footer from "../components/Footers/Footer";

export default function Termos() {
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
                Termos e Condições de Uso!
              </h3>
              <p className="text-blueGray-500 text-lg leading-relaxed mt-4 mb-4">
                <strong>1.</strong> Ao utilizar os serviços do bot Virtualtips, o usuário concorda com os seguintes termos e condições. É importante ler atentamente e compreender as disposições a seguir antes de continuar:
              </p>
              <p className="text-blueGray-500 text-lg leading-relaxed mt-4 mb-4">
                <strong>2.</strong>O bot Virtualtips é uma ferramenta que fornece informações e dados coletados de fontes externas, como o site da Bet365 e outras fontes. Essas informações são disponibilizadas para fins informativos e não constituem aconselhamento financeiro ou recomendação de investimento.
              </p>
              <p className="text-blueGray-500 text-lg leading-relaxed mt-4 mb-4">
                <strong>3.</strong>O usuário reconhece que todas as atividades financeiras, incluindo investimentos, apostas e quaisquer outras decisões relacionadas ao capital, são de sua responsabilidade exclusiva. O bot Virtualtips não se responsabiliza por quaisquer perdas de capital, danos financeiros ou decisões financeiras incorretas tomadas com base nas informações fornecidas.
              </p>
              <p className="text-blueGray-500 text-lg leading-relaxed mt-4 mb-4">
                <strong>4.</strong>O bot Virtualtips não tem controle sobre a precisão, atualidade ou autenticidade das informações obtidas de fontes externas, e não pode garantir a qualidade ou a confiabilidade desses dados.
              </p>
              <p className="text-blueGray-500 text-lg leading-relaxed mt-4 mb-4">
                <strong>5.</strong>O usuário concorda em usar o serviço com discernimento e responsabilidade, compreendendo que todas as informações disponibilizadas são fornecidas {'"como estão"'} e por sua própria conta e risco.
              </p>
              <p className="text-blueGray-500 text-lg leading-relaxed mt-4 mb-4">
                <strong>6.</strong>O bot Virtualtips reserva-se o direito de fazer alterações nos serviços, incluindo a interrupção temporária ou permanente do acesso, a seu critério, sem aviso prévio.
              </p>
              <p className="text-blueGray-500 text-lg leading-relaxed mt-4 mb-4">
                <strong>7.</strong>Estes termos e condições são regidos pelas leis do local onde o bot Virtualtips opera. Qualquer disputa que surja em relação a estes termos será resolvida no âmbito das jurisdições competentes desse local.
              </p>
              <p className="text-blueGray-500 text-lg leading-relaxed mt-4 mb-4">
                Ao utilizar o bot Virtualtips, o usuário concorda com estes termos e condições. Se não concordar com esses termos, pedimos que interrompa o uso dos serviços.
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
