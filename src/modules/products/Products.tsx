import axios from "axios";
import { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Wrapper from "../../components/Wrapper";
import { Product } from "./productModel";

const Products = () => {
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1);
    const [lastPage, setLastPage] = useState(0);

    useEffect(() => {
        (
            async () => {
                const {data} = await axios.get(`products?page=${page}`);
                setProducts(data.products.data)
                setLastPage(data.products.meta.last_page);
            }
        )()
    }, [page]);

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

    const deleteProduct =async (id:number) => {
        if (window.confirm("Are you sure you want to delete this product?")) {
            await axios.delete(`roles/${id}`);

            setProducts(products.filter((product: Product) => product.id !== id))
        }
    }
    return (
        <Wrapper>
            <div className="table w-full p-10 shadow-md bg-white shadow-gray-300">
            <Link to='/products/create' className="bg-white hover:bg-gray-100 text-gray-800 py-2 px-4 border border-gray-300 rounded shadow">
                Add New Product
            </Link>
            <table className="w-full border-collapse border border-slate-200 mt-4">
                    <thead className="bg-gray-200">
                        <tr className="bg-gray-200 text-xs font-bold tracking-wide text-left text-black uppercase border-b-2 border-b-black dark:border-gray-800 dark:text-gray-800 dark:bg-gray-800">
                            <th className="px-4 py-3 border">#</th>
                            <th className="px-4 py-3 border">NAME</th>
                            <th className="px-4 py-3 border">DESCRIPTION</th>
                            <th className="px-4 py-3 border">PRICE</th>
                            <th className="px-4 py-3 border">DATE CREATED</th>
                            {/* <th className="px-4 py-3 border">LAST UPDATED</th> */}
                            <th className="px-4 py-3 border">ACTIONS</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-x dark:divide-gray-700 dark:bg-gray-800">

                        {products.map((product: Product) => {
                            return (
                                <tr key={product.id} className="text-gray-700 dark:text-gray-400 border">
                                    <td className="px-4 py-3 text-sm border">
                                        {product.id}
                                    </td>

                                    <td className="px-4 py-3 text-sm border">
                                        {product.name}
                                    </td>

                                    <td className="px-4 py-3 text-sm border">
                                        {product.price}
                                    </td>

                                    <td className="px-4 py-3 text-sm border">
                                        {product.description}
                                    </td>

                                    <td className="px-4 py-3 text-sm border">
                                        {product.created_at}
                                    </td>

                                    {/* <td className="px-4 py-3 text-sm border">
                                        {product.updated_at}
                                    </td> */}

                                    <td className="px-4 py-3 text-sm border">
                                        <a href="#" className="bg-transparent hover:bg-gray-200 text-black hover:text-black py-1 px-3 border border-gray-400 rounded"
                                            onClick={() => deleteProduct(product.id)}
                                            >
                                                Delete
                                        </a>
                                        <Link to={`/users/${product.id}/edit`} className="bg-transparent mx-2 hover:bg-gray-200 text-black hover:text-black py-1 px-3 border border-gray-400 rounded">
                                                Edit
                                        </Link>
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
 
export default Products;