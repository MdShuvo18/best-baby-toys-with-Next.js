import Image from "next/image";


const Footer = () => {
    return (
        <footer className="bg-white dark:bg-gray-900">
            <div className="container px-6 py-8 mx-auto">
                <div className="flex flex-col items-center text-center">
                    <a href="">
                        <Image
                            className="rounded-xl"
                            src="https://i.ibb.co/wz2VQJQ/Purple-Pink-Pastel-Baby-Blocks-Toys-Store-Logo.png"
                            alt="Logo"
                            width={144}
                            height={64}
                            priority
                        />
                    </a>

                    <p className="max-w-md mx-auto mt-4 text-gray-500 dark:text-gray-400">
                        Find Your Best Baby's Toddler's And Toy's
                    </p>

                    <div className="flex flex-col mt-4 sm:flex-row sm:items-center sm:justify-center">
                  
               
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

                <hr className="my-10 border-gray-200 dark:border-gray-700" />

                <div className="flex flex-col items-center sm:flex-row sm:justify-between">
                    <p className="text-sm text-gray-500">© Copyright 2024. All Rights Reserved.</p>

                    <div className="flex mt-3 -mx-2 sm:mt-0">
                        <a
                            href=""
                            className="mx-2 text-sm text-gray-500 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300"
                            aria-label="Teams"
                        >
                            Home
                        </a>

                        <a
                            href=""
                            className="mx-2 text-sm text-gray-500 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300"
                            aria-label="Privacy"
                        >
                            Products
                        </a>

                        <a
                            href=""
                            className="mx-2 text-sm text-gray-500 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300"
                            aria-label="Cookies"
                        >
                            Categories
                        </a>
                    </div>
                </div>
            </div>
        </footer>

    );
};

export default Footer;