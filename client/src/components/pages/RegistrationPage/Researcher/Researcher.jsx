import React, { Fragment, useState } from 'react';
// import Message from './Message';
// import Progress from './Progress';
import axios from 'axios';
import {useHistory} from "react-router-dom";

const Researcher = () => {
    const history = useHistory();
    const [data, setData] = useState({
        name: "",
        image: "",
    });
    const handleChange = (name) => (e) => {
        const value = name === "image" ? e.target.files[0] : e.target.value;
        setData({ ...data, [name]: value });
    };
    const handleSubmit = async () => {
        console.log("clicked")
        try {
            let formData = new FormData();
            formData.append("image", data.image);
            formData.append("name", data.name);

            const res = await fetch(`http://localhost:5000/user/sample`, {
                method: "POST",
                body: formData,
            });
            if (res.ok) {
                setData({ name: "", image: "" });
                history.replace("/");
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div style={{ maxWidth: 500, margin: "auto" }}>
            <div className="mb-3">
                <input
                    className="form-control"
                    placeholder="Enter name"
                    type="text"
                    name="name"
                    value={data.name}
                    onChange={handleChange("name")}
                />
            </div>
            <div className="mb-3">
                <input
                    className="form-control"
                    type="file"
                    accept="image/*"
                    name="image"
                    onChange={handleChange("image")}
                />
            </div>
            <div className="text-center">
                <button className="btn btn-primary" onSubmit={handleSubmit}>
                    Submit
                </button>
            </div>
        </div>
    );
};

export default Researcher;