import { useEffect,useState } from "react";

function FacultyInfo() {
    const apiUrl = 'https://66ebcdc82b6cf2b89c5bc0b2.mockapi.io/Faculty'
    const [data, setData] = useState([]);
    // const { id } = useParams();
    useEffect(() => {
        fetch(apiUrl)
            .then((res) => res.json())
            .then((res) => setData(res))
    }, []);
    console.log(data);
    

    const formatedata = data.map((f) => {
        return (<tr>
            <td>
                {f.name}
            </td>
            <td>
                {f.id}
            </td>
            <td>
                {f.eamil}
            </td>
            <td>
                <img src={f.avtar}></img>
            </td>
        </tr>);
    })

    return(
            <table>
                {formatedata}
            </table>
    )
}

export default FacultyInfo