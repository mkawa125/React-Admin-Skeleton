import React, { Component } from "react";
import { Link } from "react-router-dom";

class Login extends Component{

    render(){
        return (
        <div className="items-center mx-auto w-full  p-6 bg-gray-200 dark:bg-gray-900">
            <div className="max-w-4xl mx-auto w-1/3 overflow-hidden bg-white  rounded-md shadow-md dark:bg-gray-800">
                <div className="items-center justify-center p-6 sm:p-12 md:w-full">
                    <div className="w-full">
                        <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
                            Login
                        </h1>
                        <label className="block text-sm">
                            <span className="text-gray-700 dark:text-gray-400">Username or Email</span>
                            <input
                            className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                            type="email" required
                            placeholder="Enter username or email"
                            />
                        </label>
                        <label className="block mt-4 text-sm">
                            <span className="text-gray-700 dark:text-gray-400">Password</span>
                            <input
                            className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                            placeholder="Enter password"
                            type="password"
                            />
                        </label>

                        <a className="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
                            href="./login.html">
                            Login
                        </a>
                        <p className="mt-4">
                            <Link to={'/register'} className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline">
                                Don't you have an account? Register
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default Login