import axios from "axios";
import React, { Component, SyntheticEvent, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Wrapper from "../../../components/Wrapper";
import { Role } from "../../roles_and_permissions/roleModel";


const CreateUser  = () => {

    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [role_id, setRoleId] = useState('');
    const [roles, setRoles] = useState([]);
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);
    
    useEffect(() =>{
        (
           async () => {
             const {data} = await axios.get('roles');
             setRoles(data.data)
           }
        )()
    }, [])

    const submit = async (e: SyntheticEvent) => {
        
        e.preventDefault();

        const response = await axios.post("users/create", {
            first_name,
            last_name,
            email,
            role_id
        });

        window.location.href = '/users';
        setRedirect(true);
    }
    return (
        <Wrapper>
            <div className="items-center  w-full pt-2  dark:bg-gray-900">
                <form onSubmit={submit}>
                    <label className="block text-sm">
                        <span className="text-gray-700 dark:text-gray-400">First Name</span>
                        <input
                        className="block w-full py-2 px-2 border rounded mt-1 text-sm focus:outline-none  form-input"
                        type="text" 
                        onChange={e => setFirstName(e.target.value)}
                        required
                        placeholder="First Name"
                        />
                    </label>

                    <label className="block text-sm mt-4">
                        <span className="text-gray-700 dark:text-gray-400">Last Name</span>
                        <input
                        className="block w-full py-2 px-2 border rounded mt-1 text-sm focus:outline-none  form-input"
                        type="Last Name" 
                        onChange={e => setLastName(e.target.value)}
                        required
                        placeholder="Last Name"
                        />
                    </label>

                    <label className="block text-sm mt-4">
                        <span className="text-gray-700 dark:text-gray-400">Email</span>
                        <input
                        className="block w-full py-2 px-2 rounded mt-1 text-sm focus:outline-none  form-input"
                        type="email" 
                        onChange={e => setEmail(e.target.value)}
                        required
                        placeholder="Email Address"
                        />
                    </label>

                    <label className="block mt-4 text-sm">
                        <span className="text-gray-700 dark:text-gray-400">Role</span>
                    </label>
                    <select className="block w-full py-2 px-2 rounded mt-1 text-sm focus:outline-none  form-input"
                        onChange={e => setRoleId(e.target.value)}
                        required>

                        {roles.map((role: Role) => {
                            return (
                                <option key={role.id} value={role.id}> {role.name}</option>
                            )
                        })}
                            
                    </select>

                    <button className="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-blue-800 border border-transparent rounded active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
                        type="submit">
                        Save
                    </button>
                    
                </form>     
            </div>
        </Wrapper>
    )
};

export default CreateUser