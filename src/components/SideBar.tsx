import React from "react";

const SideBar = () => {
    return (
        <nav aria-label="alternative nav">
            <div className="bg-gray-800 shadow-xl h-20 fixed bottom-0 mt-12 md:relative md:h-screen z-10 w-full md:w-64 content-center">
                <div className="md:mt-12 md:w-64 md:fixed md:left-0 md:top-0 content-center md:content-start text-left justify-between">
                    <ul className="list-reset  text-center md:text-left">
                        <li className="mr-0 flex-1">
                            <a href="#" className="block py-2 md:py-3 pl-2 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-pink-500">
                                <i className="fas fa-tasks pr-0 md:pr-3"></i><span className="pb-1 md:pb-0 text-xs md:text-base text-gray-400 md:text-gray-200 block md:inline-block">Dashboard</span>
                            </a>
                        </li>
                        <li className="mr-0 flex-1">
                            <a href="#" className="block py-2 md:py-3 pl-2 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-purple-500">
                                <i className="fa fa-users pr-0 md:pr-3"></i><span className="pb-1 md:pb-0 text-xs md:text-base text-gray-400 md:text-gray-200 block md:inline-block">User Management</span>
                            </a>
                        </li>
                        <li className="mr-0 flex-1">
                            <a href="#" className="block bg-gray-700 py-2 md:py-3 pl-2 align-middle text-white no-underline hover:text-white border-l-2 border-blue-600">
                                <i className="fa fa-user-shield pr-0 md:pr-3 text-blue-600"></i>
                                <span className="pb-1 md:pb-0 text-xs md:text-base text-white md:text-white block md:inline-block">
                                    Roles & Permissions
                            </span>
                            </a>
                        </li>
                        

                        <li className="mr-0 flex-1">
                            <a href="#" className="block py-2 md:py-3 pl-2 md:pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-red-500">
                                <i className="fa fa-shopping-cart pr-0 md:pr-3"></i><span className="pb-1 md:pb-0 text-xs md:text-base text-gray-400 md:text-gray-200 block md:inline-block">Orders</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default SideBar;