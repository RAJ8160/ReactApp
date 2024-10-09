import React from "react";
import './card-style.css'

const Card = props =>{
    return(
     <div className="card text-center shadow">
        <div className="overflow">
            <img src="Iam.jpg" alt="Img1" className="card-img" />
        </div>
        <div className="card-body text-dark">
            <h4 className="card-title">Card Title</h4>
            <p className="card-text text-secondary">
             Lorem ipsum dolor sit amet consectetur adipisicing elit. 
             Iure veniam quibusdam qui excepturi sed nostrum atque enim porro ipsam hic?
            </p>
            <a href="" className="btn btn-outline-success">
                Go Anywhere
            </a>
        </div>
     </div>
    );
}

export default Card;