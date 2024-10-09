import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

export const Update = () => {
    const { id } = useParams();
    const [values, setValues] = useState({
        name: "",
        email: "",
        id: ""
    });
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://66ebcdc82b6cf2b89c5bc0b2.mockapi.io/Faculty/${id}`);
                setValues(response.data); // Set values from the response
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [id]);

    const handleUpdate = async (event) => {
        event.preventDefault();
        try {
            await axios.put(`https://66ebcdc82b6cf2b89c5bc0b2.mockapi.io/Faculty/${id}`, values);
            navigate('/'); // Navigate after successful update
        } catch (error) {
            console.error("Error updating data:", error);
        }
    };

    return (
        <>
            <div className="d-flex w-100 justify-content-center align-items-center bg-light vh-100">
                <div className="w-50 rounded bg-white border shadow px-5 pt-3 pb-5">
                    <h1>Update User</h1>
                    <form onSubmit={handleUpdate}>
                        <div className="mb-2">
                            <label htmlFor="name">Name:</label>
                            <input
                                type="text"
                                name="name"
                                className="form-control"
                                placeholder="Enter name"
                                value={values.name}
                                onChange={e => setValues({ ...values, name: e.target.value })}
                            />
                        </div>
                        <div className="mb-2">
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                name="email"
                                className="form-control"
                                placeholder="Enter Email"
                                value={values.email}
                                onChange={e => setValues({ ...values, email: e.target.value })} // Fixed: updating email
                            />
                        </div>
                        <div className="mb-2">
                            <label htmlFor="id">ID:</label>
                            <input
                                type="number"
                                name="id"
                                className="form-control"
                                placeholder="Enter ID"
                                value={values.id}
                                readOnly // Make ID read-only in an update form
                            />
                        </div>
                        <button type="submit" className="btn btn-success">Update</button>
                        <Link to="/" className="btn btn-primary ms-3">Back</Link>
                    </form>
                </div>
            </div>
            <h1>You are in update</h1>
        </>
    );
};
