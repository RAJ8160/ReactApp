import axios from "axios";
import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";

export const Read =() =>{
    const [data, setData] = useState([]);
     const { id } = useParams();
    useEffect(() => {
        axios.get('https://66ebcdc82b6cf2b89c5bc0b2.mockapi.io/Faculty/'+id)
            .then(res => setData(res.data)) // Extracting data from the response
            .catch(err => console.log(err));
    }, []);
     return(
        <>
         <h1>Read Now</h1>
         <div className="d-flex w-100 justify-content-center align-items-center bg-light vh-100">
            <div className="w-50 rounded bg-white border shadow px-5 pt-3 pb-5">
                <h1>User Detail</h1>
                    <div className="mb-2">
                        <strong>Name : {data.name}</strong>
                    </div>
                    <div className="mb-2">
                        <strong>id : {data.id}</strong>
                    </div>
                    <div className="mb-2">
                        <strong>Email : {data.email}</strong>
                    </div>
                    <Link to={`/update/${id}`}className="btn btn-success">Edit</Link>
                    <Link to="/" className="btn btn-primary ms-3">Back</Link> 
            </div>
            </div>        
        </>
     )
}
