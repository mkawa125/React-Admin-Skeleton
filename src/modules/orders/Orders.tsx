import axios from "axios";
import React, { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Paginator from "../../components/Paginator";
import Wrapper from "../../components/Wrapper";
import { OrderItem } from "./orderItemModel";
import { Order } from "./orderModel";

const Orders = () => {

    const [orders, setOrders] = useState([]);
    const [page, setPage] = useState(1);
    const [lastPage, setLastPage] = useState(0);
    const [selected, setSelected] = useState(0);

    useEffect(() => {
        (
            async () => {
                const {data} = await axios.get(`orders?page=${page}`);
                setOrders(data.orders)
                setLastPage(data.metadata.last_page);
                
            }
        )()
    }, [page]);

    const deleteOrder =async (id:number) => {
        if (window.confirm("Are you sure you want to delete this order?")) {
            await axios.delete(`orders/${id}`);

            setOrders(orders.filter((u: Order) => u.id !== id))
        }
    }

    const hide = {
        maxHeight: 0,
        transition: '400ms ease-in'
    }

    const show = {
        maxHeight: "150px",
        transition: '400ms ease-out'
    }

    const select = (id: number) => {
        setSelected(selected  !== id ? id : 0)
    }

    return (
        <Wrapper>
            <div className="w-full shadow-md shadow-gray-300">
        <Link to='/orders/create' className="bg-white hover:bg-gray-100 text-gray-800 py-2 px-4 border border-gray-400 rounded shadow">
            <i className="fa fa-plus"></i> Create New Order
        </Link>
            <table className="w-full border-collapse border border-slate-200 mt-4">
                <thead className="bg-gray-200">
                    <tr className="bg-gray-200 text-xs font-bold tracking-wide text-left text-black uppercase border-b border-b-black dark:border-gray-800 dark:text-gray-800 dark:bg-gray-800">
                        <th className="px-4 py-3">#</th>
                        <th className="px-4 py-3">FULL NAME</th>
                        <th className="px-4 py-3">EMAIL ADDRESS</th>
                        <th className="px-4 py-3">DATE CREATED</th>
                        <th className="px-4 py-3">TOTAL</th>
                        <th className="px-4 py-3">ACTIONS</th>
                    </tr>
                </thead>
                <tbody className="bg-white">

                    {orders.map((order: Order) => {
                        return (
                            <>
                                <tr key={order.id} className="text-gray-700 bg-gray-10 dark:text-gray-400 border-b">
                                    <td className="px-4 py-3 text-sm border-b">
                                        <a href="#"
                                        onClick={() => select(order.id) }
                                        >
                                            <i className="fa fa-list"></i> {order.id}
                                        </a>
                                    </td>

                                    <td className="px-4 py-2 text-sm border-b">
                                        {order.name}
                                    </td>

                                    <td className="px-4 py-2 text-sm border-b">
                                        {order.email}
                                    </td>

                                    <td className="px-4 py-2 text-sm border-b">
                                        {order.created_at}
                                    </td>

                                    <td className="px-4 py-2 text-sm border-b">
                                        {order.total}
                                    </td>
                                    <td className="px-4 py-2 text-sm border-b">
                                        <Link to={`/orders/${order.id}/edit`} className="bg-transparent mx-2 hover:bg-gray-200 text-black hover:text-black py-2 px-4 border border-gray-400 rounded">
                                                <i className="fa fa-eye text-gray-700 text-xs"></i> View
                                        </Link>
                                        
                                        {/* <Link to={`/orders/${order.id}/edit`} className="bg-transparent mx-2 hover:bg-gray-200 text-black hover:text-black py-2 px-4 border border-gray-400 rounded">
                                                <i className="fa fa-edit text-gray-700 text-xs"></i> Edit
                                        </Link>
                                        <a href="#" className="bg-transparent hover:bg-gray-200 text-black hover:text-black py-2 px-4 border border-gray-400 rounded"
                                            onClick={() => deleteOrder(order.id)}
                                            >
                                                <i className="fa fa-trash-alt text-gray-700 text-xs"></i> Delete
                                        </a> */}
                                        
                                    </td>
                                </tr>

                                <tr>
                                    <td colSpan={6}>
                                        <div className="px-8 overflow-hidden" style={selected === order.id ? show : hide}>
                                            <table className="w-full  bg-gray-100  border-b p-8 mt mb-4 mt-2">
                                                <thead  className="bg-gray-200">
                                                    <tr className="text-gray-700 text-left dark:text-gray-400 ">
                                                        <th className="px-4 py-3 border-b">#</th>
                                                        <th className="px-4 py-3 border-b ">Product Name</th>
                                                        <th className="px-4 py-3 border-b ">Quantity</th>
                                                        <th className="px-4 py-3 border-b ">Price</th>
                                                    </tr>
                                                </thead>

                                                <tbody>
                                                    {order.order_items.map((item: OrderItem) => {
                                                        return (
                                                            <tr>
                                                                <td className="px-4 py-3 text-sm border-b w-80">
                                                                    {item.id}
                                                                </td>
                                                                <td className="px-4 py-3 text-sm border-b w-80">
                                                                    {item.product_title}
                                                                </td>
                                                                <td className="px-4 py-3 text-sm border-b w-80">
                                                                    {item.quantity}
                                                                </td>
                                                                <td className="px-4 py-3 text-sm border-b w-80">
                                                                    {item.price}
                                                                </td>
                                                            </tr>
                                                        )
                                                    })}
                                                </tbody>
                                            </table>
                                        </div>
                                    </td>
                                </tr>

                            </>
                        )
                    })}
                </tbody>
            </table>
        </div>

        <Paginator page={page} lastPage={lastPage} pageChanged={setPage}/>
        </Wrapper>
        );
}
 
export default Orders;