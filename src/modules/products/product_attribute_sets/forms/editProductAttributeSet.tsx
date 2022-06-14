import axios from "axios";
import React, { Component, SyntheticEvent, useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ImageUpload from "../../../../components/ImageUpload";
import Wrapper from "../../../../components/Wrapper";


const EditProductAttributeSet  = () => {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice]= useState('');
    const [image, setImage] = useState('');
    const [redirect, setRedirect] = useState(false);
    const {id} = useParams();
    const ref = useRef<HTMLInputElement>(null);
    
    useEffect(() => {
        (
           async () => {

             const response = await axios.get(`products/${id}`)

             setName(response.data.data.name);
             setImage(response.data.data.image);
             setDescription(response.data.data.description);
             setPrice(response.data.data.price);

           }
        )()
    }, [])

    const submit = async (e: SyntheticEvent) => {
        
        e.preventDefault();

        const response = await axios.put(`products/${id}`, {
            name,
            description,
            image,
            price
        });

        /** Redirect after updated */
        window.location.href = '/products';
        setRedirect(true);
    }

    const updateImage = (url: string) => {
        if (ref.current) {
            ref.current.value = url;
        }

        setImage(url)
    }

    return (
        <Wrapper>
            <div className="items-center mx-auto bg-white p-8 shadow  w-2/3  dark:bg-gray-900">
                <div className="">
                <form onSubmit={submit}>
                    <label className="block">
                        <span className="text-gray-700 dark:text-gray-400">Product Name</span>
                        <input
                        className="block w-full py-2 px-2 border rounded mt-1 focus:outline-none  form-input"
                        type="text"
                        defaultValue={name}
                        onChange={e => setName(e.target.value)}
                        required
                        placeholder="Product Name"
                        />
                    </label>

                    <label className="block mt-4">
                        <span className="text-gray-700 dark:text-gray-400">Price</span>
                        <input
                        className="block w-full py-2 px-2 border rounded mt-1 focus:outline-none  form-input"
                        type="number"
                        defaultValue={price}
                        onChange={e => setPrice(e.target.value)}
                        required
                        placeholder="Price"
                        />
                    </label>

                    <label className="block mt-4">
                        <span className="text-gray-700 dark:text-gray-400">Image</span>
                    </label>
                        <input
                            className="block mb-2 w-full py-2 px-2 border rounded mt-1 focus:outline-none  form-input"
                            ref={ref}
                            defaultValue={image}
                            onChange={e => setImage(e.target.value)}
                            required
                        />
                        <ImageUpload uploaded={setImage}></ImageUpload>
                        

                    <label className="block mt-4">
                        <span className="text-gray-700 dark:text-gray-400">Description</span>
                    </label>
                        <textarea
                            className="block w-full py-2 px-2 border rounded mt-1 focus:outline-none  form-input"
                            onChange={e => setDescription(e.target.value)}
                            required
                            rows={4}
                            value={description}
                            placeholder="Product descriptions"
                        >
                        { description }
                        </textarea>
                    
                    
        
                    
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