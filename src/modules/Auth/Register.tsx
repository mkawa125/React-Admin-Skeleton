import React, { Component, SyntheticEvent } from "react";
import { Link } from "react-router-dom";
import  axios  from "axios";

class Register extends Component{
    
    first_name = "";
    last_name = "";
    email = "";
    password = "";
    password_confirm = "";
    role_id = "";

    submit  = async (e: SyntheticEvent) => {
        e.preventDefault();
        const formData = {
            first_name: this.first_name,
            last_name: this.last_name,
            email: this.email,
            password: this.password,
            password_confirm: this.password_confirm,
        }
        const response = await axios.post("register", formData)
        
        console.log(response.data);
    }
    render(){
        return (
        <div className="items-center mx-auto w-full p-6 bg-gray-200 dark:bg-gray-900">
            <div className="max-w-4xl mx-auto w-1/4 mt-10 pb-5 overflow-hidden bg-white  rounded-md shadow-md dark:bg-gray-800">
                <div className="items-center justify-center p-6 sm:p-12 md:w-full">
                    <div className="w-full">
                        <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
                            Create Your Account
                        </h1>

                        <form onSubmit={this.submit}>
                            <label className="block mt-4 text-sm">
                                <span className="text-gray-700 dark:text-gray-400">First Name</span>
                                <input
                                className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                                onChange={e => this.first_name = e.target.value}
                                required
                                placeholder="Enter first name"
                                />
                            </label>

                            <label className="block mt-4 text-sm">
                                <span className="text-gray-700 dark:text-gray-400">Last Name</span>
                                <input
                                className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                                onChange={e => this.last_name = e.target.value}
                                required
                                placeholder="Enter last name"
                                />
                            </label>

                            <label className="block mt-4 text-sm">
                                <span className="text-gray-700 dark:text-gray-400">Email</span>
                                <input
                                className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                                onChange={e => this.email = e.target.value}
                                required
                                placeholder="Email address"
                                />
                            </label>

                            <label className="block mt-4 text-sm">
                                <span className="text-gray-700 dark:text-gray-400">Password</span>
                                <input
                                className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                                placeholder="Enter password"
                                type="password"
                                required
                                onChange={e => this.password_confirm = e.target.value}
                                />
                            </label>
                            <label className="block mt-4 text-sm">
                                <span className="text-gray-700 dark:text-gray-400">
                                Confirm Password
                                </span>
                                <input
                                className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                                placeholder="Re-enter password"
                                type="password"
                                required
                                onChange={e => this.password = e.target.value}
                                />
                            </label>

                            <button className="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
                                type="submit">
                                Create Account
                            </button>

                            <hr className="my-8" />

                            <p className="mt-0">
                                <Link to={'/login'} className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline">
                                    Already have an account? Login
                                </Link>
                            </p>

                        </form>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default Register