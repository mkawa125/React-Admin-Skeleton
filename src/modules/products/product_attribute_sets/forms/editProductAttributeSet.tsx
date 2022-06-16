import axios from "axios";
import React, { Component, SyntheticEvent, useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ImageUpload from "../../../../components/ImageUpload";
import Wrapper from "../../../../components/Wrapper";
import { useNavigate } from "react-router-dom";


const EditProductAttributeSet  = () => {

    const [title, setTitle] = useState('');
    const [slug, setSlug] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice]= useState('');
    const [image, setImage] = useState('');
    const {id} = useParams();

    const navigate = useNavigate();
    const [status, setStatus] = useState('');
    const [display_layout, setDisplayLayout] = useState('');
    const [redirect, setRedirect] = useState(false);
    const [is_searchable, setIsSearchable] = useState('');
    const [is_comparable, setIsComparable] = useState('');
    const [is_use_in_product_listing, setIsInProductsListing] = useState('');
    const ref = useRef<HTMLInputElement>(null);
    
    useEffect(() => {
        (
           async () => {

             const response = await axios.get(`product-attribute-sets/${id}`)

             setTitle(response.data.data.title);
             setSlug(response.data.data.slug);
             setDisplayLayout(response.data.data.display_layout);
             setIsComparable(response.data.data.is_comparable);
             setIsSearchable(response.data.data.is_searchable);
             setStatus(response.data.data.status);
             setIsInProductsListing(response.data.data.is_use_in_product_listing);

           }
        )()
    }, [])

    const submit = async (e: SyntheticEvent) => {
        
        e.preventDefault();

        const response = await axios.put(`product-attribute-sets/${id}`, {
            title,
            slug, status,
            display_layout,
            is_searchable, is_comparable,
            is_use_in_product_listing
        }).then(response => {
            setRedirect(true);
            navigate("/product-attribute-sets");
        }).catch(error => {
            setRedirect(false);
        });
    }

    return (
        <Wrapper>
            <div className="items-center mx-auto bg-white p-8 shadow  w-2/3  dark:bg-gray-900">
                <div className="">
                <form onSubmit={submit}>
                    <label className="block">
                        <span className="text-gray-700 dark:text-gray-400">Title</span>
                        <input
                        className="block w-full py-2 px-2 border rounded mt-1 focus:outline-none  form-input"
                        type="text"
                        defaultValue={title}
                        onChange={e => setTitle(e.target.value)}
                        required
                        placeholder="Title"
                        />
                    </label>

                    <label className="block mt-4">
                        <span className="text-gray-700 dark:text-gray-400">Slug</span>
                        <input
                        className="block w-full py-2 px-2 border rounded mt-1 focus:outline-none  form-input"
                        type="text"
                        defaultValue={slug}
                        onChange={e => setSlug(e.target.value)}
                        required
                        placeholder="Slug"
                        />
                    </label>

                    <label className="block mt-4 ">
                        <span className="text-gray-700 dark:text-gray-400">Is Attribute Set Searchable?</span>
                    </label>
                    <select className="block w-full py-2 px-2 rounded mt-1 focus:outline-none  form-input"
                        onChange={e => setIsSearchable(e.target.value)}
                        value={is_searchable}
                        required>
                        <option value='1'> Yes</option>
                        <option value='0'> No</option>
                    </select>

                    <label className="block mt-4 ">
                        <span className="text-gray-700 dark:text-gray-400">Is Attribute Set Comparable?</span>
                    </label>
                    <select className="block w-full py-2 px-2 rounded mt-1 focus:outline-none  form-input"
                        onChange={e => setIsComparable(e.target.value)}
                        value={is_comparable}
                        required>
                        <option value='1'> Yes</option>
                        <option value='0'> No</option>
                    </select>

                    <label className="block mt-4 ">
                        <span className="text-gray-700 dark:text-gray-400">Is Attribute Set In Product Listing?</span>
                    </label>
                    <select className="block w-full py-2 px-2 rounded mt-1 focus:outline-none  form-input"
                        onChange={e => setIsInProductsListing(e.target.value)}
                        value={is_use_in_product_listing}
                        required>
                        <option value='1'> Yes</option>
                        <option value='0'> No</option>
                    </select>

                    <label className="block mt-4 ">
                        <span className="text-gray-700 dark:text-gray-400">Display Layout</span>
                    </label>
                    <select className="block w-full py-2 px-2 rounded mt-1 focus:outline-none  form-input"
                        onChange={e => setDisplayLayout(e.target.value)}
                        value={display_layout}
                        required>
                        <option value='Visual'> Visual</option>
                        <option value='Image'> Image</option>
                        <option value='Dynamic'> Dynamic</option>
                        <option value='3D_Video'> 3D Video</option>
                        <option value='Test'> Test</option>
                    </select>

                    <label className="block mt-4 ">
                        <span className="text-gray-700 dark:text-gray-400">Status</span>
                    </label>
                    <select className="block w-full py-2 px-2 rounded mt-1 focus:outline-none  form-input"
                        onChange={e => setStatus(e.target.value)}
                        value={status}
                        required>
                        <option value=''>---Select---</option>
                        <option value='Pending'>Pending</option>
                        <option value='Published'>Published</option>
                        <option value='Disabled'>Disabled</option>
                    </select>
                    
                    <button className="block w-full px-4 py-2 mt-4 font-bold text-center text-white bg-gray-600 border border-transparent rounded active:bg-purple-600 hover:bg-gray-700 "
                        type="submit">
                        update
                    </button>
                    
                </form> 
                </div>    
            </div>
        </Wrapper>
    )
};

export default EditProductAttributeSet