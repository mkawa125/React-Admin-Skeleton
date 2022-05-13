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

                console.log("Papaa Mukuru", data.data)
            }
        )()
    })
    return ( 
        <Wrapper>
            <div className="w-full shadow-md shadow-gray-300">
                <table className="w-full border-collapse border border-slate-400">
                    <thead>
                        <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                            <th className="px-4 py-3">#</th>
                            <th className="px-4 py-3">Name</th>
                            <th className="px-4 py-3">Email</th>
                            <th className="px-4 py-3">Role</th>
                            <th className="px-4 py-3">Mobile Number</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">

                        {users.map((user: User) => {
                            return (
                                <tr key={user.id} className="text-gray-700 dark:text-gray-400">
                                    <td className="px-4 py-3 text-sm">
                                        {user.id}
                                    </td>

                                    <td className="px-4 py-3 text-sm">
                                        {user.first_name} {user.last_name}
                                    </td>

                                    <td className="px-4 py-3 text-sm">
                                        {user.email}
                                    </td>

                                    <td className="px-4 py-3 text-sm">
                                        {user.uuid}
                                    </td>

                                    <td className="px-4 py-3 text-sm">
                                        {user.role.name}
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

export default Users;