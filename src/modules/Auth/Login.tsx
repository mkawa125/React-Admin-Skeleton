import axios from "axios";
import React, { Component, SyntheticEvent, useState } from "react";
import  Redirect from "react-router-dom";
import { Link } from "react-router-dom";
import useHistory  from "react-router-dom";


const Login  = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);

    const submit = async (e: SyntheticEvent) => {
        
        e.preventDefault();

        const response = await axios.post("http://localhost:5000/api/login", {
            email,
            password
        }, {withCredentials: true})

        setRedirect(true);
    }
        return (
            <div className="items-center mx-auto w-full pt-20 p-6 bg-gray-200 dark:bg-gray-900">
                <div className="max-w-4xl mx-auto w-1/4 mt-20 pt-10 pb-10 overflow-hidden bg-white  rounded-md shadow-md dark:bg-gray-800">
                    <div className="items-center justify-center p-6 sm:p-12 md:w-full">
                        <div className="w-full">
                            <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
                                Login
                            </h1>
                            <form onSubmit={submit}>
                                <label className="block text-sm">
                                    <span className="text-gray-700 dark:text-gray-400">Username or Email</span>
                                    <input
                                    className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                                    type="email" 
                                    onChange={e => setEmail(e.target.value)}
                                    required
                                    placeholder="Enter username or email"
                                    />
                                </label>
                                <label className="block mt-4 text-sm">
                                    <span className="text-gray-700 dark:text-gray-400">Password</span>
                                    <input
                                    className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                                    placeholder="Enter password"
                                    onChange={e => setPassword(e.target.value)}
                                    required
                                    type="password"
                                    />
                                </label>

                                <button className="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-blue-800 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
                                        type="submit">
                                        Login
                                    </button>
                                <p className="mt-4">
                                    <Link to={'/register'} className="text-sm font-medium text-blue-600 dark:text-purple-400 hover:underline">
                                        Don't you have an account? Register
                                    </Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
};

export default Login