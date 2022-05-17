import axios from "axios";
import React, { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Wrapper from "../../components/Wrapper";
import { User } from "./userModel";

const Users = () => {
    const [users, setUsers] = useState([]);
    const [page, setPage] = useState(1);
    const [lastPage, setLastPage] = useState(0);

    useEffect(() => {
        (
            async () => {
                const {data} = await axios.get(`users?page=${page}`);
                setUsers(data.data.users)
                setLastPage(data.data.meta.last_page);
                
            }
        )()
    }, [page]);

    console.log("Last page", lastPage);

    const next = () => {
        if (page < lastPage) {
            setPage(page + 1);
        }
    }

    const previous = () => {
        if (page >= 1) {
            setPage(page - 1)
        }
    }

    const deleteUser =async (id:number) => {
        if (window.confirm("Are you sure you want to delete this user?")) {
            await axios.delete(`users/${id}`);

            setUsers(users.filter((u: User) => u.id !== id))
        }
    }

    return ( 
        <Wrapper>
            <div className="w-full shadow-md shadow-gray-300">
            <Link to='/users/create' className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                Add New User
            </Link>
                <table className="w-full border-collapse border border-slate-200 mt-4">
                    <thead className="bg-gray-200">
                        <tr className="bg-gray-200 text-xs font-bold tracking-wide text-left text-black uppercase border-b-2 border-b-black dark:border-gray-800 dark:text-gray-800 dark:bg-gray-800">
                            <th className="px-4 py-3 border">#</th>
                            <th className="px-4 py-3 border">FULL NAME</th>
                            <th className="px-4 py-3 border">EMAIL ADDRESS</th>
                            <th className="px-4 py-3 border">UUID</th>
                            <th className="px-4 py-3 border">ROLE</th>
                            <th className="px-4 py-3 border">ACTIONS</th>
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
                                    <td className="px-4 py-3 text-sm border">
                                        <a href="#" className="bg-transparent hover:bg-gray-200 text-black hover:text-black py-2 px-4 border border-gray-400 rounded"
                                            onClick={() => deleteUser(user.id)}
                                            >
                                                Delete
                                        </a>
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
                        <a href="#" onClick={previous} className="page-link text-blue-600">Previous</a>

                        <a href="#" onClick={next} className="page-link text-blue-600 mx-4">
                                Next
                        </a>
                    </li>
                </ul>
            </nav>
        </Wrapper>
    );
}
export default Users;