import { useState } from "react";
import { facultyData } from "./PostApi";
import {  useNavigate } from "react-router-dom";
import Faculty from "../Faculty";

export default function Form ({ data, setData }) {
    const navigate =useNavigate();
    const apiUrl = 'https://66ebcdc82b6cf2b89c5bc0b2.mockapi.io/Faculty'
    const [addData, setAddData] = useState({
        id: "",
        name: "",
        email: ""
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setAddData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const addPostData = async () => {
        const res = await facultyData(addData);
        if (res.status === 201) {
            setData([...data, res.data]);
            setAddData({ id: "", name: "", email: "" });
        }
   
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        addPostData();
    };

    return (
        <form onSubmit={handleFormSubmit}>
            <div>
                <label htmlFor="id">ID</label>
                <input
                    type="text"
                    autoComplete="off"
                    id="id"
                    name="id"
                    placeholder="Add ID"
                    value={addData.id}
                    onChange={handleInputChange} />
            </div>
            <div>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    autoComplete="off"
                    id="name"
                    name="name"
                    placeholder="Add name"
                    value={addData.name}
                    onChange={handleInputChange} />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    autoComplete="off"
                    id="email"
                    name="email"
                    placeholder="Add email"
                    value={addData.email}
                    onChange={handleInputChange} />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};
