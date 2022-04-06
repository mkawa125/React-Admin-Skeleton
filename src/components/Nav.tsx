import React, { Component } from "react";

class Nav extends Component {
    render() {
        return (
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
        )
    }
}

export default Nav;