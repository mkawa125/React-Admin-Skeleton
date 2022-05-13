import axios from "axios";
import React, { Component, useEffect, useState } from "react";
import Wrapper from "../../components/Wrapper";
import { User } from "./userModel";

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        (
            async () => {
                const {data} = await axios.get('users');
                setUsers(data.data)
            }
        )()
    })
    return ( 
        <Wrapper>
            <div className="w-full shadow-md shadow-gray-300">
                <table className="w-full border-collapse border border-slate-200">
                    <thead className="bg-gray-200">
                        <tr className="bg-gray-200 text-xs font-bold tracking-wide text-left text-black uppercase border-b-2 border-b-black dark:border-gray-800 dark:text-gray-800 dark:bg-gray-800">
                            <th className="px-4 py-3 border">#</th>
                            <th className="px-4 py-3 border">FULL NAME</th>
                            <th className="px-4 py-3 border">EMAIL ADDRESS</th>
                            <th className="px-4 py-3 border">UUID</th>
                            <th className="px-4 py-3 border">ROLE</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-x dark:divide-gray-700 dark:bg-gray-800">

                        {users.map((user: User) => {
                            return (
                                <tr key={user.id} className="text-gray-700 dark:text-gray-400 border">
                                    <td className="px-4 py-3 text-sm border">
                                        {user.id}
                                    </td>

                                    <td className="px-4 py-3 text-sm border">
                                        {user.first_name} {user.last_name}
                                    </td>

                                    <td className="px-4 py-3 text-sm border">
                                        {user.email}
                                    </td>

                                    <td className="px-4 py-3 text-sm border">
                                        {user.uuid}
                                    </td>

                                    <td className="px-4 py-3 text-sm border">
                                        {user.role.name}
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>

            <nav>
                <ul className="pagination mt-6">
                    <li className="page-item">
                        <a href="#" className="page-link text-blue-600">Previous</a>

                        <a href="#" className="page-link mx-4">
                                Next
                        </a>
                    </li>
                </ul>
            </nav>
        </Wrapper>
    );
}
export default Users;