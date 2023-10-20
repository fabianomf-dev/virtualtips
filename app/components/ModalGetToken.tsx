'use client';
import { Fragment, useRef, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import Link from "next/link";
import axios from "axios"
export default function Example(props: { open: any; setOpen: any; cancelButtonRef: any; }) {
    const { open, setOpen, cancelButtonRef } = props;
    const [checkPerfilFacebook, setCheckPerfilFacebook] = useState(false)
    const [checkPerfilX, setCheckPerfilX] = useState(false)
    const [checkPerfilTelegram, setCheckPerfilTelegram] = useState(false)
    const [facebook, setFacebook] = useState<string>('')
    const [telegram, setTelegram] = useState<string>('')
    const [x, setX] = useState<string>('')

    const [email, setEmail] = useState<string>('')
    const [carteira, setCarteira] = useState<string>('')


    const sendDados = async () => {
        // Verifique se pelo menos um checkbox está marcado
        if (!checkPerfilFacebook && !checkPerfilX && !checkPerfilTelegram) {
            alert('Pelo menos um perfil deve ser selecionado.');
            return; // Impede que a função continue
        }
        else if (facebook === "" && checkPerfilFacebook) {
            alert('Por favor, preencha o perfil do Facebook.');
            return; // Impede que a função continue
        }
        else if (x === "" && checkPerfilX) {
            alert('Por favor, preencha o perfil do X(Twitter).');
            return; // Impede que a função continue
        }
        else if (telegram === "" && checkPerfilTelegram) {
            alert('Por favor, preencha perfil do Telegram.');
            return; // Impede que a função continue
        }
        else if (email === "") {
            alert('Por favor, preencha o campo de e-mail.');
            return; // Impede que a função continue
        }

        else if (carteira === "") {
            alert('Por favor, preencha o campo de carteira.');
            return; // Impede que a função continue
        }
        const dados = {
            "email": email,
            "carteira": carteira,
            "facebook": facebook,
            "twitter": x,
            "telegram": telegram

        }
        console.log(dados)
        await axios.post("https://apibotcrypto.fabiano.dev.br/token-free", dados)
            .then(response => {
                // Manipule a resposta de sucesso aqui
                console.log('Resposta de sucesso:', response.data);
                if (response.data) {

                    alert('Dados enviados com sucesso!\n assim que os dados forem verificados você receberá um\n email com o hash da transferência.\n ou se completou a tarefa do telegram receberá uma messagem no Telegram confirmando seus tokens');
                    setOpen(false)
                    setCheckPerfilFacebook(false)
                    setCheckPerfilTelegram(false)
                    setCheckPerfilX(false)
                } else {
                    alert("verifique seus dados algumas informações que você forneceu já foram usadas!")
                }
            })
            .catch(error => {
                // Manipule erros aqui
                console.error('Erro:', error);
            });

    };


    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={() => setOpen(false)}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                    <div className="sm:flex sm:items-start">
                                        <div className="w-full  px-2 items-center justify-center">

                                            <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-4">
                                                <h1 className="text-2xl text-blueGray-600 font-semibold mb-4">Lista de Tarefas</h1>
                                                <h4 className="text-1xl text-blueGray-600 font-semibold mb-4">para cada tarefa realizada você receberá 10 mil VTIP</h4>
                                                <ul>
                                                    <li className="flex items-center justify-between p-2 border-b">
                                                        <div className="flex items-center">
                                                            <Link
                                                                rel="noopener noreferrer"
                                                                target='_blank'
                                                                className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                                                href="https://www.facebook.com/profile.php?id=61552688212480"
                                                            >
                                                                <i className="fas fa-thumbs-up text-blue-500 mr-2"></i>
                                                                <span className="text-blueGray-600">Siga nossa página no Facebook</span>
                                                            </Link>

                                                        </div>
                                                        <input id='checkbox_facebook'
                                                            onChange={() => setCheckPerfilFacebook(!checkPerfilFacebook)}
                                                            checked={checkPerfilFacebook}
                                                            type="checkbox"
                                                            className="form-checkbox text-blue-500"
                                                        />
                                                    </li>
                                                    <li className="flex items-center justify-between p-2 border-b">
                                                        <div className="flex items-center">
                                                            <Link
                                                                rel="noopener noreferrer"
                                                                target='_blank'
                                                                className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                                                href="https://twitter.com/virtualtiptoken"
                                                            >
                                                                <i className="fab fa-twitter text-blue-400 mr-2"></i>
                                                                <span className="text-blueGray-600">Siga nosso perfil no X (Twitter)</span>
                                                            </Link>

                                                        </div>
                                                        <input
                                                            type="checkbox"
                                                            onChange={() => setCheckPerfilX(!checkPerfilX)}
                                                            checked={checkPerfilX}
                                                            className="form-checkbox text-blue-500"
                                                        />
                                                    </li>
                                                    <li className="flex items-center justify-between p-2">
                                                        <div className="flex items-center">
                                                            <Link
                                                                rel="noopener noreferrer"
                                                                target='_blank'
                                                                className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                                                href="https://t.me/virtualtipss"
                                                            >
                                                                <i className="fab fa-telegram-plane text-blue-400 mr-2"></i>
                                                                <span className="text-blueGray-600">Enscreva-se em nosso canal do Telegram</span>
                                                            </Link>

                                                        </div>
                                                        <input
                                                            type="checkbox"
                                                            onChange={() => setCheckPerfilTelegram(!checkPerfilTelegram)}
                                                            checked={checkPerfilTelegram}
                                                            className="form-checkbox text-blue-500"
                                                        />
                                                    </li>
                                                </ul>

                                                <div className="mt-4">
                                                    <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">
                                                        Perfil do Facebook:
                                                    </label>
                                                    <div className="relative mt-2 rounded-md shadow-sm">

                                                        <input
                                                            type="text"
                                                            onChange={(event) => setFacebook(event.target.value)}
                                                            required
                                                            className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                            placeholder="meufacebook"
                                                        />


                                                    </div>
                                                </div>


                                                <div className="mt-4">
                                                    <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">
                                                        Perfil X(Twitter):
                                                    </label>
                                                    <div className="relative mt-2 rounded-md shadow-sm">

                                                        <input
                                                            type="text"
                                                            onChange={(event) => setX(event.target.value)}
                                                            required
                                                            className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                            placeholder="@perfiltwiiter"
                                                        />


                                                    </div>
                                                </div>


                                                <div className="mt-4">
                                                    <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">
                                                        Perfil do Telegram:
                                                    </label>
                                                    <div className="relative mt-2 rounded-md shadow-sm">

                                                        <input
                                                            type="text"
                                                            onChange={(event) => setTelegram(event.target.value)}
                                                            required
                                                            className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                            placeholder="@exemplo"
                                                        />


                                                    </div>
                                                </div>


                                                <div className="mt-4">
                                                    <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">
                                                        Email:
                                                    </label>
                                                    <div className="relative mt-2 rounded-md shadow-sm">

                                                        <input
                                                            type="text"
                                                            onChange={(event) => setEmail(event.target.value)}
                                                            required
                                                            className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                            placeholder="meuemail@gmail.com"
                                                        />


                                                    </div>
                                                </div>
                                                <div className="mt-4">
                                                    <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">
                                                        Carteira da Rede Polygon :
                                                    </label>
                                                    <div className="relative mt-2 rounded-md shadow-sm">

                                                        <input
                                                            type="text"
                                                            onChange={(event) => setCarteira(event.target.value)}
                                                            required
                                                            className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                            placeholder="0x4454sfgfd...."
                                                        />


                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                    <button
                                        type="button"
                                        className="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-900 sm:ml-3 sm:w-auto"
                                        onClick={() => sendDados()}
                                    >
                                        Já fiz todas as tarefas
                                    </button>
                                    <button
                                        type="button"
                                        className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover-bg-gray-50 sm:mt-0 sm:w-auto"
                                        onClick={() => setOpen(false)}
                                        ref={cancelButtonRef}
                                    >
                                        Fechar
                                    </button>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    );
}
