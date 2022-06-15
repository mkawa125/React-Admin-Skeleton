import axios from "axios";
import { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ProductAttributeSet } from "./ProductAttributeSetModel";
import LoadingOverlay from 'react-loading-overlay';
import Wrapper from "../../../components/Wrapper";
import Paginator from "../../../components/Paginator";


const ProductAttributeSets = () => {
    const [product_attribute_sets, setProductAttributeSets] = useState([]);
    const [page, setPage] = useState(1);
    const [isActive, setIsActive] = useState(true);
    const [lastPage, setLastPage] = useState(0);

    useEffect(() => {
        (
            async () => {
                const {data} = await axios.get(`product-attribute-sets?page=${page}`);
                setProductAttributeSets(data.data.data)
                setIsActive(false)
                setLastPage(data.data.meta.last_page);
            }
        )()
    }, [page]);

    const deleteProductAttributeSet =async (id:number) => {
        if (window.confirm("Are you sure you want to delete this product attribute set?")) {
            await axios.delete(`product-attribute-sets/${id}`);

            setProductAttributeSets(product_attribute_sets.filter((product_attribute_set: ProductAttributeSet) => product_attribute_set.id !== id))
        }
    }
    return (
        <Wrapper>
            <div className="w-full shadow-md shadow-gray-300">
            <Link to='/product-attribute-sets/create' className="bg-white hover:bg-gray-100 text-gray-800 py-2 px-4 border border-gray-300 rounded shadow">
                <i className="fa fa-plus"></i> Add New Product
            </Link>
            <div>

            </div>

            
            
            <table className="w-full border-collapse border border-slate-200 mt-4">
                    <thead className="bg-gray-200">
                        <tr className="bg-gray-200 text-xs font-bold tracking-wide text-left text-black uppercase border-b-2 border-b-black dark:border-gray-800 dark:text-gray-800 dark:bg-gray-800">
                            <th className="px-4 py-3 border">#</th>
                            {/* <th className="px-4 py-3 border">IMAGE</th> */}
                            <th className="px-4 py-3 border">NAME</th>
                            <th className="px-4 py-3 border">DESCRIPTION</th>
                            <th className="px-4 py-3 border">PRICE</th>
                            <th className="px-4 py-3 border">DATE CREATED</th>
                            {/* <th className="px-4 py-3 border">LAST UPDATED</th> */}
                            <th className="px-4 py-3 border">ACTIONS</th>
                        </tr>
                    </thead>
                    
                    <tbody className="bg-white divide-y divide-x dark:divide-gray-700 dark:bg-gray-800">
                        
                    <LoadingOverlay className="left-50 ml-1"
                        active={isActive}
                        spinner
                        styles={{
                            spinner: (base) => ({
                                ...base,
                                width: '90px',
                                left: '700px',
                                marginLeft: '-4em',
                                marginTop: '150px',
                                '& svg circle': {
                                stroke: 'rgba(40, 116, 166)'
                                }
                            })
                          }
                        }>
                        
                    </LoadingOverlay>

                        {product_attribute_sets.map((product_attribute_set: ProductAttributeSet) => {
                            return (
                                <tr key={product_attribute_set.id} className="text-gray-700 dark:text-gray-400 border">
                                    <td className="px-4 py-3 text-sm border">
                                        {product_attribute_set.id}
                                    </td>

                                    {/* <td className="px-4 py-3 text-sm border">
                                        <img src={product_attribute_set.image} alt="" />
                                    </td> */}

                                    <td className="px-4 py-3 text-sm border">
                                        {product_attribute_set.title}
                                    </td>

                                    <td className="px-4 py-3 text-sm border">
                                        {product_attribute_set.slug}
                                    </td>

                                    <td className="px-4 py-3 text-sm border">
                                        {product_attribute_set.display_layout}
                                    </td>

                                    <td className="px-4 py-3 text-sm border">
                                        {product_attribute_set.created_at}
                                    </td>

                                    {/* <td className="px-4 py-3 text-sm border">
                                        {product_attribute_set.updated_at}
                                    </td> */}

                                    <td className="px-4 py-3 text-sm border w-72">
                                        <Link to={`/product-attribute-sets/${product_attribute_set.id}/edit`} className="bg-transparent mx-2 hover:bg-gray-200 text-black hover:text-black py-2 px-3 border border-gray-400 rounded">
                                            <i className="fa fa-eye text-gray-700 text-xs"></i> View
                                        </Link>

                                        <Link to={`/product-attribute-sets/${product_attribute_set.id}/edit`} className="bg-transparent mx-2 hover:bg-gray-200 text-black hover:text-black py-2 px-3 border border-gray-400 rounded">
                                            <i className="fa fa-edit text-gray-700 text-xs"></i> Edit
                                        </Link>

                                        <a className="bg-transparent hover:bg-gray-200 text-black hover:text-black py-2 px-3 border border-gray-400 rounded"
                                            onClick={() => deleteProductAttributeSet(product_attribute_set.id)}
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

            <Paginator page={page} lastPage={lastPage} pageChanged={setPage}/>

        </Wrapper>
        );
}
 
export default ProductAttributeSets;