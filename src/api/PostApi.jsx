import axios from "axios";

const api = axios.create({
    baseURL:"https://66ebcdc82b6cf2b89c5bc0b2.mockapi.io",
});

// get method
export const getFaculty = () => {
    return api.get("/Faculty");
}

// delete method
export const deleteFaculty = (id) =>{
     return api.delete(`/Faculty/${id}`);
};

//post method
export const facultyData =(faculty) =>{
    return api.post("/Faculty",faculty);
    console.log(faculty)
};