import axios from "axios";
import React, { Component, SyntheticEvent, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Wrapper from "../../../components/Wrapper";
import { Permission } from "../../roles_and_permissions/permissionModel";


const CreateRole  = () => {

    const [name, setRoleName] = useState('');
    const [redirect, setRedirect] = useState(false);
    const [permissions, setPermissions] = useState([]);
    
    useEffect(() =>{
        (
           async () => {
             const {data} = await axios.get('permissions');
             setPermissions(data.data);
           }
        )()
    }, [])

    const submit = async (e: SyntheticEvent) => {
        
        e.preventDefault();

        const response = await axios.post("roles", {
            name
        });

        window.location.href = '/roles';
        setRedirect(true);
    }
    return (
        <Wrapper>
            <div className="items-center mx-auto bg-white p-8 shadow  w-2/3  dark:bg-gray-900">
                <div className="">
                <form onSubmit={submit}>
                    <label className="block">
                        <span className="text-gray-700 dark:text-gray-400">Role Name</span>
                        <input
                        className="block w-full py-2 px-2 border rounded mt-1 focus:outline-none  form-input"
                        type="text" 
                        onChange={e => setRoleName(e.target.value)}
                        required
                        placeholder="Role Name"
                        />
                    </label>

                    <label className="block mt-4 mb-2">
                        <span className="text-gray-700 mt-4 dark:text-gray-400">Permissions</span>
                    </label>
                    <div className="grid grid-cols-4">
                    {
                        permissions.map((permission: Permission) => {
                            return (
                                <div>
                                    <input
                                    className=" py-2 mr-2 px-2 border rounded mt-1 focus:outline-none"
                                    type="checkbox"
                                    onChange={e => setRoleName(e.target.value)}/>
                                
                                    <label className="">
                                        <span className="text-gray-700 dark:text-gray-400">{ permission.name }</span>
                                    </label>
                                </div>
                            )
                        })
                    }
                    </div>
                    
                    <button className="block w-full px-4 py-2 mt-4 font-bold text-center text-white bg-gray-500 border border-transparent rounded active:bg-purple-600 hover:bg-gray-700 "
                        type="submit">
                        Save
                    </button>
                    
                </form> 
                </div>    
            </div>
        </Wrapper>
    )
};

export default CreateRole