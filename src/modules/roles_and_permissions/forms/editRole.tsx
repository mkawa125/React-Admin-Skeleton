import axios from "axios";
import React, { Component, SyntheticEvent, useEffect, useState } from "react";
import { Link, Params, useParams } from "react-router-dom";
import Wrapper from "../../../components/Wrapper";
import { Role } from "../../roles_and_permissions/roleModel";


const EditUser  = (props: any) => {


    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [role_id, setRoleId] = useState('');
    const [roles, setRoles] = useState([]);
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);
    const {id} = useParams();
    
    useEffect(() =>{
        (
           async () => {
             const {data} = await axios.get('roles');

             setRoles(data.data);

             const response = await axios.get(`users/${id}`)

             setFirstName(response.data.data.first_name);
             setLastName(response.data.data.last_name);
             setEmail(response.data.data.email);
             setRoleId(response.data.data.role.id);
           }
        )()
    }, [])

    const submit = async (e: SyntheticEvent) => {
        
        e.preventDefault();

        const response = await axios.put(`users/${id}`, {
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
            <div className="items-center mx-auto bg-white p-8 shadow  w-2/3  dark:bg-gray-900">
                <div className="">
                <form onSubmit={submit}>
                    <label className="block">
                        <span className="text-gray-700 dark:text-gray-400">First Name</span>
                        <input
                        className="block w-full py-2 px-2 border rounded mt-1 focus:outline-none  form-input"
                        type="text"
                        defaultValue={first_name}
                        onChange={e => setFirstName(e.target.value)}
                        required
                        placeholder="First Name"
                        />
                    </label>

                    <label className="block  mt-4">
                        <span className="text-gray-700 dark:text-gray-400">Last Name</span>
                        <input
                        className="block w-full py-2 px-2 border rounded mt-1  focus:outline-none  form-input"
                        type="Last Name"
                        defaultValue={last_name}
                        onChange={e => setLastName(e.target.value)}
                        required
                        placeholder="Last Name"
                        />
                    </label>

                    <label className="block  mt-4">
                        <span className="text-gray-700 dark:text-gray-400">Email</span>
                        <input
                        className="block w-full py-2 px-2 border rounded mt-1  focus:outline-none  form-input"
                        type="email"
                        defaultValue={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                        placeholder="Email Address"
                        />
                    </label>

                    <label className="block mt-4 ">
                        <span className="text-gray-700 dark:text-gray-400">Role</span>
                    </label>
                    <select className="block w-full py-2 px-2 rounded mt-1 focus:outline-none  form-input"
                        value={role_id}
                        onChange={e => setRoleId(e.target.value)}
                        required>

                        {roles.map((role: Role) => {
                            return (
                                <option key={role.id} value={role.id}> {role.name}</option>
                            )
                        })}
                            
                    </select>

                    <button className="block w-full px-4 py-2 mt-4 font-bold text-center text-white bg-gray-500 border border-transparent rounded active:bg-purple-600 hover:bg-gray-700 "
                        type="submit">
                        Update
                    </button>
                    
                </form> 
                </div>    
            </div>
        </Wrapper>
    )
};

export default EditUser