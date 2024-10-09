import { useEffect, useState } from "react";
import { deleteFaculty, getFaculty } from "./PostApi";
import Form from "./Form";

export const Post = () => {
     const [data,setData] = useState([]);

    const getFacultyData = async () => {
        const res = await getFaculty();
        setData(res.data);
    }

    useEffect(() => {
        getFacultyData();
    }, []);

    // function to delete Faculty
    const handleDeletfaculty = async(id) =>{
        try{
            const res = await deleteFaculty(id);
            if(res.status === 200){
                console.log('all set')
                const newUpdatedFaculty = data.filter((current)=>{
                      return current.id != id;
                });
                setData(newUpdatedFaculty);
            }else{
                console.log("failed to delete the Faculty :"+Response.status)
            }
        }catch(error){
            console.log(error)
        }

        console.log('ffff')
    };
    return (
        <>
        <section>
            <Form data={data} setData={setData}/>
        </section>
         <section className="section-faculty">
            <ol>
                {
                    data.map((current)=>{
                         const {email,name,avtar,id} = current;
                       return<li key={id}>
                           <p>Id : {id}</p>
                           <p>Email : {id} </p>
                           <img src={avtar} alt="Faculty image here"/>
                           <button className="btn btn-primary">Edit</button>
                           <button className="btn btn-danger" onClick={()=>{
                                  handleDeletfaculty(id);
                           }}>delete</button>
                       </li>
                    })
                }
            </ol>
        </section>
        </>
       
    )
}