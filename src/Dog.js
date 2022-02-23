import React from "react";
import { Link } from "react-router-dom";


const Dog=({name,src,facts,age})=>{




    return (
        <div class="col-3 mt-4">
            <div className="card"  >
                <img src={src} class="card-img-top"  alt=""/>
                <div class="card-body">
                    <h5 class="card-title">{name} ({age})</h5>
                    <p class="card-text">{facts}</p>
                </div>
            </div>
        </div>
    )
}

export default Dog;