import React from "react"; 
import { Link } from "react-router-dom";
import Dog from "./Dog";


const DogList=({dogs})=>{


    return (
        <div className="container">
            <h1>HELLOOOOOOO</h1>
            <div class="row">
                
                {dogs.map(dog=> 
                <>
                    <Dog name={dog.name} src={dog.src} age={dog.age} facts={dog.facts}/>
                </>
                                    
                )}
                
            </div>
            
        </div>
    )
}

export default DogList;