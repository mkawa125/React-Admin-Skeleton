import axios from "axios";
import React, { Component, SyntheticEvent, useEffect, useState } from "react";
import  Redirect from "react-router-dom";
import { Link } from "react-router-dom";
import useHistory  from "react-router-dom";
import Wrapper from "../../components/Wrapper";


const Profile  = () => {

    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password_confirm, setPasswordConfirm] = useState('');
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        (
            async () => {
                const {data} = await axios.get(`user`);
                setFirstName(data.user.first_name)
                setLastName(data.user.last_name)
                setEmail(data.user.email)
                setFirstName(data.user.first_name)
                console.log("User", data.user);
                
            }
        )()
    }, []);
    

    const infoSubmit = async (e: SyntheticEvent) => {
        
        e.preventDefault();

        await axios.put("users/info", {
            first_name,
            last_name,
            email
        });
    }

    const passwordSubmit = async (e: SyntheticEvent) => {
        
        e.preventDefault();

        await axios.put("users/password", {
            password,
            password_confirm
        });
    }
    return (
        <Wrapper>
            <div className="items-center mx-auto w-full pt-20 p-6 bg-gray-200 dark:bg-gray-900">
                <div className="mx-auto w-full overflow-hidden bg-white  rounded shadow-md dark:bg-gray-800">
                    <div className="items-center justify-center p-6 sm:p-12 md:w-full">
                        <div className="w-full">
                            <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
                                Account Information
                            </h1>
                            <form onSubmit={infoSubmit}>
                                <label className="block text-sm">
                                    <span className="text-gray-700 dark:text-gray-400">First Name</span>
                                    <input
                                    className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                                    type="text"
                                    defaultValue={first_name}
                                    onChange={e => setFirstName(e.target.value)}
                                    required
                                    placeholder="First Name"
                                    />
                                </label>

                                <label className="block text-sm">
                                    <span className="text-gray-700 dark:text-gray-400">Last Name</span>
                                    <input
                                    className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                                    type="text"
                                    defaultValue={last_name}
                                    onChange={e => setLastName(e.target.value)}
                                    required
                                    placeholder="Last Name"
                                    />
                                </label>

                                <label className="block mt-4 text-sm">
                                    <span className="text-gray-700 dark:text-gray-400">Email</span>
                                    <input
                                    className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                                    placeholder="Email Address"
                                    defaultValue={email}
                                    onChange={e => setEmail(e.target.value)}
                                    required
                                    type="email"
                                    />
                                </label>

                                <button className="w-32 px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white  bg-gray-500 border border-transparent rounded  hover:bg-gray-700"
                                    type="submit">
                                    Update
                                </button>
                            </form>
                        </div>
                    </div>
                </div>


                <div className="mx-auto w-full mt-8 overflow-hidden bg-white  rounded shadow-md dark:bg-gray-800">
                    <div className="items-center justify-center p-6 sm:p-12 md:w-full">
                        <div className="w-full">
                            <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
                                Change Password
                            </h1>
                            <form onSubmit={passwordSubmit}>
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
                                <label className="block mt-4 text-sm">
                                    <span className="text-gray-700 dark:text-gray-400">Password Confirm</span>
                                    <input
                                    className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                                    placeholder="Enter password"
                                    onChange={e => setPasswordConfirm(e.target.value)}
                                    required
                                    type="password"
                                    />
                                </label>

                                <button className="w-32 px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white  bg-gray-500 border border-transparent rounded  hover:bg-gray-700"
                                    type="submit">
                                    Update
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
};

export default Profile