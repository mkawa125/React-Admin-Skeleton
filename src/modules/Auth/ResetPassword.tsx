import axios from "axios";
import React, { Component, SyntheticEvent, useEffect, useState } from "react";
import  Redirect, { Navigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import useHistory  from "react-router-dom";
import logo from '../../../public/assets/img/logo192.png';



const ResetPassword  = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password_confirm, setPasswordConfirm] = useState('');
    const [redirect, setRedirect] = useState(false);
    const [error, setError] = useState(false);
    const {token} = useParams();
    const [errorMessage, setErrorMessage] = useState('');
    const [errorClasses, setErrorClasses] = useState('');
    const classes = 'text-sm border dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray rounded p-2'
    
    // useEffect(() => {
    //     (
    //        async () => {
    //            try {
    //                 const response = await axios.post(`users/password-reset-verify/${token}`)
    //                 console.log(response)
    //                 setRedirect(false)
    //            } catch (error) {
    //                 setRedirect(true)
    //                 setError(true);
    //                 setErrorClasses(" border-red-700 text-red-700")
    //                 setErrorMessage("Password Reset failed, token is invalid !")
    //            }

    //        }
    //     )()
    // }, [])

    const submit = async (e: SyntheticEvent) => {
        
        e.preventDefault();
        console.log(token)

        const response = await axios.put(`users/password-reset/${token}`, {
            password,
            password_confirm
        }).then(response =>  {
            setError(false)
            setRedirect(true);
            return <Navigate to="/login"/>
        }).catch(errorResponse => {
            setError(true);
            setErrorClasses(" border-red-700 text-red-700")
            setErrorMessage("Password Reset failed, token is invalid !")
        })
    }
  
        return (
            <div className="items-center mx-auto w-full pt-10 p-6 bg-gray-200 dark:bg-gray-900">
                <div className="max-w-4xl mx-auto w-1/4 mt-20  overflow-hidden bg-white  rounded-md shadow-md dark:bg-gray-800">
                    <div className="items-center justify-center p-6 sm:p-12 md:w-full">
                        <div className="w-full">
                            <h1 className="mb-4 text-xl font-semibold center text-center  border-b-4 border-gray-00 p-4 mb-8 font-bold text-gray-700 dark:text-gray-200">
                                Create New Password
                            </h1>
                            <form onSubmit={submit}>
                            {error !== false && <div className="text text-red-700 mt-2"><strong>{errorMessage}</strong></div>}
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
    
                                <label className="block mt-4 text-sm">
                                    <span className="text-gray-700 dark:text-gray-400">Confirm Password</span>
                                    <input
                                    className={`block w-full mt-1 ${classes} ${errorClasses !== null && errorClasses}`}
                                    placeholder="Re-enter password"
                                    onKeyDown={e => (setErrorClasses(""), setError(false))}
                                    onChange={e => setPasswordConfirm(e.target.value)}
                                    required
                                    type="password"
                                    />
                                </label>
                                {/* {error !== false &&  */}

                                    <p className="mt-4">
                                        <Link to={'/forget-password'} className="text-sm font-medium text-blue-600 dark:text-purple-400 hover:underline">
                                            Resend New Token
                                        </Link>
                                    </p>                                
                                {/* } */}

    
                                <button className="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-blue-800 border border-transparent rounded active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
                                    type="submit">
                                    Reset Password
                                </button>
                                
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    
};

export default ResetPassword