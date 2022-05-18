import axios from "axios";
import React, { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Wrapper from "../../components/Wrapper";
import { User } from "./userModel";
import Paginator from "../../components/Paginator"


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
                            {/* <th className="px-4 py-3 border">UUID</th> */}
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

                                    {/* <td className="px-4 py-3 text-sm border">
                                        {user.uuid}
                                    </td> */}

                                    <td className="px-4 py-3 text-sm border">
                                        {user.role.name}
                                    </td>
                                    <td className="px-4 py-3 text-sm border">
                                        <a href="#" className="bg-transparent hover:bg-gray-200 text-black hover:text-black py-1 px-3 border border-gray-400 rounded"
                                            onClick={() => deleteUser(user.id)}
                                            >
                                                Delete
                                        </a>
                                        <Link to={`/users/${user.id}/edit`} className="bg-transparent mx-2 hover:bg-gray-200 text-black hover:text-black py-1 px-3 border border-gray-400 rounded">
                                                Edit
                                        </Link>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>

            <Paginator page={page} lastPage={lastPage} pageChanged={setPage}/>
        </Wrapper>
    );
}
export default Users;