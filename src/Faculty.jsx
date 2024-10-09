import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const Faculty = () => {
    const [data, setData] = useState([]);
    const { id } = useParams();
    useEffect(() => {
        axios.get('https://66ebcdc82b6cf2b89c5bc0b2.mockapi.io/Faculty')
            .then(res => setData(res.data)) // Extracting data from the response
            .catch(err => console.log(err));
    }, []);
 
    const navigate = useNavigate();
    const handleDelete =(id)=>{
    const confirm = window.confirm("Would you like to Delete")
    if(confirm){
        axios.delete('https://66ebcdc82b6cf2b89c5bc0b2.mockapi.io/Faculty/'+id)
        .then(res=>{
           navigate();
        }).catch(err=>console.log(err));
    }
}
    return (
        <div className="d-flex flex-column justify-content-center align-items-center bg-light vh-100">
            <h1>List of Users</h1>
            <div className="w-75 rounded bg-white border shadow p-4">
                <div className="d-flex justify-content-end">
                    </div>
                <table className="table table-striped"> {/* Added class for styling */}
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Image</th>
                            <th>Actions</th> {/* Added header for actions */}
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((d, i) => (
                                <tr key={i}>
                                    <td>{d.id}</td>
                                    <td>{d.name}</td>
                                    <td>{d.email}</td>
                                    <td><img src={d.avatar} alt={d.name} style={{ width: '50px', height: '50px' }} /></td> {/* Corrected to 'avatar' */}
                                    <td>
                                        <Link to={`/read/${d.id}`} className="btn btn-sm btn-primary me-2">Read More</Link>
                                        <Link to={`/update/${d.id}`}  className="btn btn-sm btn-primary me-2">Edit</Link>
                                        <button className="btn btn-sm btn-danger" onClick={e=>handleDelete(d.id)}>Delete</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}


export default Faculty;
