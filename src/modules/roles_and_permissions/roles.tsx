import axios from "axios";
import React, { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Wrapper from "../../components/Wrapper";
import { Role } from "./roleModel";

const Roles = () => {
    const [roles, setRoles] = useState([]);

    useEffect(() => {
        (
            async () => {
                const {data} = await axios.get(`roles`);
                setRoles(data.data)
            }
        )()
    });

    const deleteRole =async (id:number) => {
        if (window.confirm("Are you sure you want to delete this role?")) {
            await axios.delete(`roles/${id}`);

            setRoles(roles.filter((r: Role) => r.id !== id))
        }
    }


    return ( 
        <Wrapper>
            <div className="w-full shadow-md shadow-gray-300">
            <Link to='/roles/create' className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                <i className="fa fa-plus"></i> Add New Role
            </Link>
                <table className="w-full border-collapse border border-slate-200 mt-4">
                    <thead className="bg-gray-200">
                        <tr className="bg-gray-200 text-xs font-bold tracking-wide text-left text-black uppercase border-b-2 border-b-black dark:border-gray-800 dark:text-gray-800 dark:bg-gray-800">
                            <th className="px-4 py-3 border">#</th>
                            <th className="px-4 py-3 border">NAME</th>
                            <th className="px-4 py-3 border">DATE CREATED</th>
                            <th className="px-4 py-3 border">UUID</th>
                            <th className="px-4 py-3 border">ACTIONS</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-x dark:divide-gray-700 dark:bg-gray-800">

                        {roles.map((role: Role) => {
                            return (
                                <tr key={role.id} className="text-gray-700 dark:text-gray-400 border">
                                    <td className="px-4 py-3 text-sm border">
                                        {role.id}
                                    </td>

                                    <td className="px-4 py-3 text-sm border">
                                        {role.name}
                                    </td>
                                    <td className="px-4 py-3 text-sm border">
                                        {role.created_at}
                                    </td>

                                    <td className="px-4 py-3 text-sm border">
                                        {role.uuid}
                                    </td>

                                    
                                    <td className="px-4 py-3 text-sm border w-80">
                                        <Link to={`/roles/${role.id}/edit`} className="bg-transparent mx-2 hover:bg-gray-200 text-black hover:text-black py-2 px-4 border border-gray-400 rounded">
                                                <i className="fa fa-eye text-gray-700 text-xs"></i> View
                                        </Link>

                                        <Link to={`/roles/${role.id}/edit`} className="bg-transparent mx-2 hover:bg-gray-200 text-black hover:text-black py-2 px-4 border border-gray-400 rounded">
                                                <i className="fa fa-edit text-gray-700 text-xs"></i> Edit
                                        </Link>

                                        <a href="#" className="bg-transparent hover:bg-gray-200 text-black hover:text-black py-2 px-4 border border-gray-400 rounded"
                                            onClick={() => deleteRole(role.id)}
                                            >
                                                <i className="fa fa-trash-alt text-gray-700 text-xs"></i> Delete
                                        </a>
                                        
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </Wrapper>
    );
}
export default Roles;