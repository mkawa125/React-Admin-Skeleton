import React, { Component } from "react";
import Wrapper from "../../components/Wrapper";

class User extends Component {
    render() {
        return ( 
            <Wrapper>
                <div className="w-full shadow-md shadow-gray-300">
                    <table className="w-full border-collapse border border-slate-400">
                        <thead>
                            <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                                <th className="px-4 py-3">#</th>
                                <th className="px-4 py-3">Client</th>
                                <th className="px-4 py-3">Amount</th>
                                <th className="px-4 py-3">Amount</th>
                                <th className="px-4 py-3">Amount</th>
                                <th className="px-4 py-3">Amount</th>
                                <th className="px-4 py-3">Amount</th>
                                <th className="px-4 py-3">Status</th>
                                <th className="px-4 py-3">Date</th>
                                <th className="px-4 py-3">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                            <tr className="text-gray-700 dark:text-gray-400">
                            <td className="px-4 py-3 text-sm">
                                    1
                                </td>
                                <td className="px-4 py-3">
                                    <div className="flex items-center text-sm">
                                        <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                                            <img className="object-cover w-full h-full rounded-full" src="https://images.unsplash.com/photo-1566411520896-01e7ca4726af?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ" alt="" loading="lazy" />
                                            <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                                        </div>
                                        <div>
                                            <p className="font-semibold">Hitney Wouston</p>
                                            <p className="text-xs text-gray-600 dark:text-gray-400">
                                                Singer
                                            </p>
                                        </div>
                                    </div>
                                </td>

                                <td className="px-4 py-3 text-sm">
                                    $ 863.45
                                </td>

                                <td className="px-4 py-3 text-sm">
                                    $ 863.45
                                </td>

                                <td className="px-4 py-3 text-sm">
                                    $ 863.45
                                </td>

                                <td className="px-4 py-3 text-sm">
                                    $ 863.45
                                </td>

                                <td className="px-4 py-3 text-sm">
                                    $ 863.45
                                </td>

                                <td className="px-4 py-3 text-xs">
                                    <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100">
                                        Approved
                                    </span>
                                </td>

                                <td className="px-4 py-3 text-sm">
                                    6/10/2020
                                </td>

                                <td className="px-4 py-3">
                                    <div className="flex items-center space-x-4 text-sm">
                                        <button className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray" aria-label="Edit">
                                            <svg
                                                className="w-5 h-5"
                                                aria-hidden="true"
                                                fill="currentColor"
                                                viewBox="0 0 20 20">
                                                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z">

                                                </path>
                                            </svg>
                                        </button>

                                        <button className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray" aria-label="Delete">
                                            <svg
                                                className="w-5 h-5"
                                                aria-hidden="true"
                                                fill="currentColor"
                                                viewBox="0 0 20 20">

                                                <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                                    clip-rule="evenodd">
                                                </path>
                                            </svg>
                                        </button>
                                    </div>
                                </td>
                            </tr>

                            <tr className="text-gray-700 dark:text-gray-400">
                                <td className="px-4 py-3 text-sm">
                                    2
                                </td>
                                <td className="px-4 py-3">
                                    <div className="flex items-center text-sm">
                                        <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                                            <img className="object-cover w-full h-full rounded-full" src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ" alt="" loading="lazy" />
                                            <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                                        </div>
                                        <div>
                                            <p className="font-semibold">Hans Burger</p>
                                            <p className="text-xs text-gray-600 dark:text-gray-400">
                                                10x Developer
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-4 py-3 text-sm">
                                    $ 863.45
                                </td>

                                <td className="px-4 py-3 text-sm">
                                    $ 863.45
                                </td>

                                <td className="px-4 py-3 text-sm">
                                    $ 863.45
                                </td>

                                <td className="px-4 py-3 text-sm">
                                    $ 863.45
                                </td>

                                <td className="px-4 py-3 text-sm">
                                    $ 863.45
                                </td>

                                <td className="px-4 py-3 text-xs">
                                    <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100">
                                        Approved
                                    </span>
                                </td>

                                <td className="px-4 py-3 text-sm">
                                    6/10/2020
                                </td>

                                <td className="px-4 py-3">
                                    <div className="flex items-center space-x-4 text-sm">
                                        <button className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray" aria-label="Edit">
                                            <svg
                                                className="w-5 h-5"
                                                aria-hidden="true"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path
                                                d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
                                                ></path>
                                            </svg>
                                            </button>
                                                                <button className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray" aria-label="Delete">
                                            <svg
                                                className="w-5 h-5"
                                                aria-hidden="true"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path
                                                fill-rule="evenodd"
                                                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                                clip-rule="evenodd"
                                                ></path>
                                            </svg>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </Wrapper>
        );
    }
}

export default User;