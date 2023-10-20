'use client'
import React from "react";
import Link from "next/link";
// components

import IndexDropdownLigas from "../Dropdowns/IndexDropdownLigas";

export default function Navbar(props: any) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white shadow">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-between">

            <Link
              rel="noopener noreferrer"
              href="/"
              className="text-blueGray-700 text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
            >
              <div className="flex items-center">

                <img
                  className="h-8 w-auto ml-10"
                  src="/img/logo.png"
                  alt="..."
                />
                Virtual Tips
              </div>
            </Link>

            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
            
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none" +
              (navbarOpen ? " block" : " hidden")
            }
            id="example-navbar-warning"
          >
            
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            <li className="flex items-center">
            <IndexDropdownLigas/>
              </li>
            <li className="flex items-center">
              <Link
                  rel="noopener noreferrer"
                  className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="/token"
                >
                  Token VTIP
                </Link>
              </li>
              <li className="flex items-center">
              <Link
                  rel="noopener noreferrer"
                  className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="/sobre"
                >
                  Sobre
                </Link>
              </li>
              <li className="flex items-center">
                <Link
                  rel="noopener noreferrer"
                  className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="https://www.facebook.com/profile.php?id=61552688212480"
                  target="_blank"
                >
                  <i className="text-blueGray-400 fab fa-facebook text-lg leading-lg " />
                  <span className="lg:hidden inline-block ml-2">Share</span>
                </Link>
              </li>

              <li className="flex items-center">
                <Link
                  rel="noopener noreferrer"
                  className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="https://twitter.com/virtualtiptoken"
                  target="_blank"
                >
                  <i className="text-blueGray-400 fab fa-twitter text-lg leading-lg " />
                  <span className="lg:hidden inline-block ml-2">Tweet</span>
                </Link>
              </li>

              <li className="flex items-center">
                <Link
                  rel="noopener noreferrer"
                  className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="https://t.me/virtualtipss"
                  target="_blank"
                >
                  <i className="text-blueGray-400 fa-brands fa-telegram text-lg leading-lg " />
                  <span className="lg:hidden inline-block ml-2">Telegram</span>
                </Link>
              </li>

              <li className="flex items-center">
                <button
                  className="bg-lightBlue-500 text-white active:bg-lightBlue-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-3 lg:mb-0 ml-6 mb-3 ease-linear transition-all duration-150"
                  type="button"
                >
                  <i className="fa-solid fa-robot"></i> Crie Seu Bot
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
