import axios from "axios";
import {SyntheticEvent, useState } from "react";
import ImageUpload from "../../../components/ImageUpload";
import Wrapper from "../../../components/Wrapper";


const CreateProduct  = () => {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice]= useState('');
    const [image, setImage] = useState('');
    const [redirect, setRedirect] = useState(false);
    

    const submit = async (e: SyntheticEvent) => {
        
        e.preventDefault();

        const response = await axios.post("products/create", {
            name,
            description,
            price,
            image
        });

        window.location.href = '/products';
        setRedirect(true);
    }

    /** This needs to understand and refactor */

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
                            value={image}
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
                            placeholder="Product descriptions"
                        >
                        </textarea>
                    
                        <button className="block w-full px-4 py-2 mt-4 font-bold text-center text-white bg-gray-600 border border-transparent rounded active:bg-purple-600 hover:bg-gray-700 "
                        type="submit">
                        Save
                    </button>
                    
                </form> 
                </div>    
            </div>
        </Wrapper>
    )
};

export default CreateProduct