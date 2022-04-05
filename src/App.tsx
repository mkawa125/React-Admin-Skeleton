import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
    <nav aria-label="menu nav" className="bg-gray-600 pt-2 md:pt-1 pb-1 px-1 mt-0 h-auto fixed w-full z-20 top-0">

        <div className="flex flex-wrap items-center">
            <div className="flex flex-shrink md:w-1/3 justify-center md:justify-start text-white pl-3">
                <a href="#" aria-label="Home">
                    React Admin Skeleton
                </a>
            </div>

            <div className="flex flex-1 md:w-1/3 justify-center md:justify-start text-white px-2">
                <span className="relative w-full">
                    
                </span>
            </div>

            <div className="flex w-full pt-2 content-center justify-between md:w-1/3 md:justify-end">
                <ul className="list-reset flex justify-between flex-1 md:flex-none items-center">
                    <li className="flex-1 md:flex-none md:mr-3">
                        <a className="inline-block py-2 px-4 text-white no-underline" href="#">Home</a>
                    </li>
                    <li className="flex-1 md:flex-none md:mr-3">
                        <a className="inline-block text-gray-400 no-underline hover:text-gray-200 hover:text-underline py-2 px-4" href="#">Users</a>
                    </li>
                    <li className="flex-1 md:flex-none md:mr-3">
                        <a className="inline-block text-gray-400 no-underline hover:text-gray-200 hover:text-underline py-2 px-4" href="#">Products</a>
                    </li>
                    <li className="flex-1 md:flex-none md:mr-3">
                        <a className="inline-block text-gray-400 no-underline hover:text-gray-200 hover:text-underline py-2 px-4" href="#">Orders</a>
                    </li>
                    <li className="flex-1 md:flex-none md:mr-3">
                        
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</header>


<main>

    <div className="flex flex-col md:flex-row">
        <nav aria-label="alternative nav">
            <div className="bg-gray-800 shadow-xl h-20 fixed bottom-0 mt-12 md:relative md:h-screen z-10 w-full md:w-64 content-center">
                <div className="md:mt-12 md:w-64 md:fixed md:left-0 md:top-0 content-center md:content-start text-left justify-between">
                    <ul className="list-reset flex flex-row md:flex-col pt-3 md:py-3 px-1 md:px-2 text-center md:text-left">
                        <li className="mr-3 flex-1">
                            <a href="#" className="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-pink-500">
                                <i className="fas fa-tasks pr-0 md:pr-3"></i><span className="pb-1 md:pb-0 text-xs md:text-base text-gray-400 md:text-gray-200 block md:inline-block">Dashboard</span>
                            </a>
                        </li>
                        <li className="mr-3 flex-1">
                            <a href="#" className="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-purple-500">
                                <i className="fa fa-users pr-0 md:pr-3"></i><span className="pb-1 md:pb-0 text-xs md:text-base text-gray-400 md:text-gray-200 block md:inline-block">User Management</span>
                            </a>
                        </li>
                        <li className="mr-3 flex-1">
                            <a href="#" className="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-blue-600">
                                <i className="fa fa-user-shield pr-0 md:pr-3 text-blue-600"></i><span className="pb-1 md:pb-0 text-xs md:text-base text-white md:text-white block md:inline-block">Roles & Permissions</span>
                            </a>
                        </li>
                        <li className="mr-3 flex-1">
                            <a href="#" className="block py-1 md:py-3 pl-0 md:pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-red-500">
                                <i className="fa fa-list pr-0 md:pr-3"></i><span className="pb-1 md:pb-0 text-xs md:text-base text-gray-400 md:text-gray-200 block md:inline-block">Products</span>
                            </a>
                        </li>

                        <li className="mr-3 flex-1">
                            <a href="#" className="block py-1 md:py-3 pl-0 md:pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-red-500">
                                <i className="fa fa-shopping-cart pr-0 md:pr-3"></i><span className="pb-1 md:pb-0 text-xs md:text-base text-gray-400 md:text-gray-200 block md:inline-block">Orders</span>
                            </a>
                        </li>
                    </ul>
                </div>


            </div>
        </nav>
        <section>
            <div id="main" className="main-content flex-1 bg-white mt-12 md:mt-2 pb-24 p-10 md:pb-5">
                <div className="flex flex-row flex-wrap flex-grow mt-8">

                    Dashboard
                </div>
            </div>
        </section>
    </div>
</main>
    </div>
  );
}

export default App;
