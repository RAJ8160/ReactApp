import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const Create = () => {
    const [values, setValues] = useState({
        name: "",  // Removed extra space
        email: "", // Removed extra space
        id: ""     // Removed extra space
    });

    const navigate = useNavigate();
    
    const handleSubmit = (event) => {  // Fixed typo in function name
        event.preventDefault();  // Fixed typo here
        axios.post('https://66ebcdc82b6cf2b89c5bc0b2.mockapi.io/Faculty', values)
            .then(res => {
                console.log(res);
                navigate('/'); // Uncomment to navigate after submission
            })
            .catch(err => console.log(err));
    };

    return (
        <div className="d-flex w-100 justify-content-center align-items-center bg-light vh-100">
            <div className="w-50 rounded bg-white border shadow px-5 pt-3 pb-5">
                <h1>Add a user</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-2">
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            name="name"
                            className="form-control"
                            placeholder="Enter name"
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
                            onChange={e => setValues({ ...values, email: e.target.value })}
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="id">Id:</label>
                        <input
                            type="number"
                            name="id" // Fixed name attribute here
                            className="form-control"
                            placeholder="Enter id"
                            onChange={e => setValues({ ...values, id: e.target.value })}
                        />
                    </div>
                    <button type="submit" className="btn btn-success">Submit</button>
                    <Link to="/" className="btn btn-primary ms-3">Back</Link>
                </form>
            </div>
        </div>
    );
};
