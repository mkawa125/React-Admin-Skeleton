import React from "react";
import axios from "axios";

const ImageUpload = (props: {uploaded: (url: string) => void}) => {

    const upload =async (files:FileList | null) => {
        if (files === null) {
            return;
        }

        const formData = new FormData();
        formData.append('image', files[0])

        const {data} = await axios.post("products/upload", formData)

        props.uploaded(data.url)
    }

    return (
        <label className="btn btn-primary bg-blue-700 py-1 px-3 rounded mt-4 text-white ">
            <i className="fa fa- "></i> Upload <input type="file"  
            hidden
            onChange={e => upload(e.target.files)}
            />

        </label>
    );
}

export default ImageUpload