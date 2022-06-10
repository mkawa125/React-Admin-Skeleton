import axios from "axios";
import React, { Component, SyntheticEvent, useState } from "react";
import  Redirect from "react-router-dom";
import { Link } from "react-router-dom";
import useHistory  from "react-router-dom";
import logo from '../../../public/assets/img/logo192.png';
import {Circles, Oval, Rings, TailSpin } from  'react-loader-spinner'
import LoadingOverlay from 'react-loading-overlay';




const Login  = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [errorClasses, setErrorClasses] = useState('');
    const [isActive, setIsActive] = useState(false);

    const classes = 'text-sm border dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray rounded p-2'
    

    const submit = async (e: SyntheticEvent) => {
        
        e.preventDefault();
        setIsActive(true)

        const response = await axios.post("login", {
            email,
            password
        }).then(response =>  {
            setError(false)
            setIsActive(false)
            window.location.href = '/';
            setRedirect(true);
        }).catch(errorResponse => {
            setError(true);
            setIsActive(false)
            setErrorClasses(" border-red-700 text-red-700")
            setErrorMessage("Invalid login credentials !")
        })
    }
    return (
        <div className="items-center mx-auto w-full pt-10 p-6 bg-gray-200 dark:bg-gray-900">
            <div className="max-w-4xl mx-auto w-1/4 mt-20  overflow-hidden bg-white  rounded-md shadow-md dark:bg-gray-800">
                <div className="items-center justify-center p-6 sm:p-12 md:w-full">
                    <div className="w-full">

                        <h1 className="mb-4 text-xl font-semibold center text-center  border-b-4 border-gray-00 p-4 mb-8 font-bold text-gray-700 dark:text-gray-200">
                        {/* <img className="object-cover w-16 h-16 rounded-full mx-auto"
                                        src='https://picsum.photos/id/237/200/300'
                                        alt="" aria-hidden="true" />  */}
                            Login to your account
                        </h1>
                        <form onSubmit={submit}>
                            <label className="block text-sm">
                                <span className="text-gray-700 dark:text-gray-400">Username or Email</span>
                                <input
                                className={`block w-full mt-1  ${classes} ${errorClasses !== null && errorClasses}`}
                                type="email"
                                onKeyDown={e => (setErrorClasses(""), setError(false))}
                                onChange={e => setEmail(e.target.value)}
                                required
                                placeholder="Enter username or email"
                                />
                                {error !== false && <div className="text text-red-700 mt-2"><strong>{errorMessage}</strong></div>}
                            </label>

                            <label className="block mt-4 text-sm">
                                <span className="text-gray-700 dark:text-gray-400">Password</span>
                                <input
                                className={`block w-full mt-1 ${classes} ${errorClasses !== null && errorClasses}`}
                                placeholder="Enter password"
                                onKeyDown={e => (setErrorClasses(""), setError(false))}
                                onChange={e => setPassword(e.target.value)}
                                required
                                type="password"
                                />
                            </label>
                            <p className="mt-4">
                                <Link to={'/forget-password'} className="text-sm font-medium text-blue-600 dark:text-purple-400 hover:underline">
                                    Forget Password?
                                </Link>
                            </p>
                            <LoadingOverlay
                                active={isActive}
                                spinner
                                text='Loading your content...'
                                >

                            </LoadingOverlay>

                            {/* <TailSpin color="#0000FF" height={60} width={40} /> */}


                            <button className="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-blue-800 border border-transparent rounded active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
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