"use client"

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiShoppingCart } from "react-icons/fi";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <header>
            <nav className="bg-white shadow dark:bg-gray-900">
                <div className="container px-6 py-2 mx-auto">
                    <div className="lg:flex lg:items-center lg:justify-between">
                        <div className="flex items-center justify-between">
                            <Link href="" className="mx-auto">
                                <Image
                                    className="rounded-xl"
                                    src="https://i.ibb.co/wz2VQJQ/Purple-Pink-Pastel-Baby-Blocks-Toys-Store-Logo.png"
                                    alt="Logo"
                                    width={144}
                                    height={36}
                                    priority
                                />
                            </Link>

                            {/* Mobile menu button */}
                            <div className="flex lg:hidden">
                                <button
                                    type="button"
                                    className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                                    aria-label="toggle menu"
                                    onClick={() => setIsOpen(!isOpen)}
                                >
                                    {isOpen ? (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M6 18L18 6M6 6l12 12"
                                            />
                                        </svg>
                                    ) : (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M4 8h16M4 16h16"
                                            />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* Mobile Menu */}
                        <div
                            className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white shadow-md lg:bg-transparent lg:dark:bg-transparent lg:shadow-none dark:bg-gray-900 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:w-auto lg:opacity-100 lg:translate-x-0 ${isOpen
                                ? "translate-x-0 opacity-100"
                                : "opacity-0 -translate-x-full"
                                }`}
                        >
                            <div className="-mx-4 lg:flex lg:items-center">
                                <Link
                                    href=""
                                    className="block mx-4 text-gray-700 capitalize dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
                                >
                                    Home
                                </Link>
                                <Link
                                    href=""
                                    className="block mx-4 mt-4 text-gray-700 capitalize lg:mt-0 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
                                >
                                    Products
                                </Link>
                                <Link
                                    href=""
                                    className="block mx-4 mt-4 text-gray-700 capitalize lg:mt-0 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
                                >
                                    Categories
                                </Link>
                                <Link
                                    href=""
                                    className="block mx-4 mt-4 text-gray-700 capitalize lg:mt-0 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
                                >
                                    Features
                                </Link>
                                <div className="flex justify-center items-center space-x-5">
                                    <FiShoppingCart className="w-8 h-8" />
                                    <div className="relative mt-4 md:mt-0">
                                        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                            <svg
                                                className="w-5 h-5 text-gray-400"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                            >
                                                <path
                                                    d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                ></path>
                                            </svg>
                                        </span>

                                        <input
                                            type="text"
                                            className="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
                                            placeholder="Search"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <div
                className="w-full h-[30rem] sm:h-[36rem] md:h-[42rem] lg:h-[46rem] bg-center bg-cover"
                style={{
                    backgroundImage: "url('https://i.ibb.co.com/V9vtjPx/Rectangle-40.png')",
                }}
            >
                <div className="flex items-center justify-end h-full pr-10">
                    <div className="text-right">
                        <h1
                            className="text-3xl font-extrabold italic text-white lg:text-4xl"
                            style={{ textShadow: "2px 2px 5px rgba(0, 0, 0, 0.75)" }}
                        >
                            <span className="text-sky-800">Buy</span>{" "}
                            <span className="text-sky-800">Play</span>{" "}
                            <span className="text-sky-800">Enjoy</span>{" "}
                        </h1>
                        <div className="relative inline-block mt-4">
                            <Link href="" class="relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-sky-600 border-2 border-sky-600 rounded-full hover:text-white group hover:bg-gray-50">
                                <span class="absolute left-0 block w-full h-0 transition-all bg-sky-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                                <span class="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                </span>
                                <span class="relative text-lg font-semibold">BUY NOW</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>



        </header >
    );
};

export default Header;