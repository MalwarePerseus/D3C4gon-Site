import React from 'react';

const Navbar = () => {
    return(
        <>
        <nav className="flex items-center justify-between flex-wrap p-2">
            <div className="flex items-center flex-shrink-0 mr-6">
                <span className="font-semibold text-xl tracking-tight">D3C4G0N</span>
            </div>
            <div className="block lg:hidden">
                <button>
                <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                </button>
            </div>
            <div className="w-full flex-grow block lg:flex lg:w-auto lg:items-center">
                <div className="text-md lg:flex-grow">
                    <a href='#' className="block mt-4 lg:inline-block lg:mt-0 text-purple-200 hover:text-white mr-4">
                        Home
                    </a>
                
                    <a href='#' className="block mt-4 lg:inline-block lg:mt-0 text-purple-200 hover:text-white mr-4">
                            Home
                    </a>
                    <a href='#' className="block mt-4 lg:inline-block lg:mt-0 text-purple-200 hover:text-white mr-4">
                            Home
                    </a>
                    <a href='#' className="block mt-4 lg:inline-block lg:mt-0 text-purple-200 hover:text-white mr-4">
                            Home
                    </a>
                </div>
                <div>
                    <a className="inline-block text-sm px-4 py-2 leading-none border rounded text-green-200 border-purple-600 hover:border-transparent hover:text-purple-900 hover:bg-white mt-4 lg:mt-0" href="https://discord.gg/fCUmxMxwEg">Join Discord</a>
                </div>

            </div>
        </nav>
        </>
    );
};

export default Navbar;