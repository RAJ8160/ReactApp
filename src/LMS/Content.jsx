import '../Card/card-style.css';

const data = [
    {
        image: 'java.png',
        source: 'java.pdf',
    },
    {
        image: 'WD.png',
        source: 'DW.pdf',
    },
    {
        image: 'JS.png',
        source: 'JS.pdf',
    },
    {
        image: 'DS.png',
        source: 'DS.pdf',
    },
];

const Formatedata = () => {
    const subject = data.map((stu, index) => {
        return (
            <>
                <td>
                    <div className="card m-1">
                        <div className="card text-center " key={index}>
                            <div className="overflow">
                                <img src={stu.image} alt="Img" className="card-img" />
                            </div>
                            <div className="card-body text-dark">
                                <a href={stu.source} download className="btn btn-outline-success">
                                    Download Now
                                </a>
                            </div>
                        </div>
                    </div>
                </td>
            </>
        )
    })
    return (
        // <div className="card">
        // {data.map((d, index) => (
        //         <div className="card text-center " key={index}>
        //             <div className="overflow">
        //                 <img src={d.image} alt="Img" className="card-img" />
        //             </div>
        //             <div className="card-body text-dark">
        //                 <a href={d.source} download className="btn btn-outline-success">
        //                     Download Now
        //                 </a>
        //             </div>
        //         </div>
        //     ))}
        // </div>
        <>
            <table>
                <tr>{subject}</tr>
            </table>
        </>

    );
};

export default Formatedata;