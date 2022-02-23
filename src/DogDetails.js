import React from "react";
import { useParams,Redirect,Link } from "react-router-dom";
import Dog from "./Dog";
// import DogList from "./DogList";


const DogDetails=({dogs})=>{

    const {name}=useParams()

    function formatName(n){
        let cleanName=n.toUpperCase()[0]+n.toLowerCase().slice(1)
        return cleanName;
    }
    
    const output=dogs.filter(dog=>{
        return dog['name']===formatName(name)})

    function renderOutput(output){

        if(output.length!==0){
            let dog=output[0]
            return (
                <>  
                    <h1 className='mt-5'>Hello, My name is {dog.name}</h1>
                    <Dog name={dog.name} src={dog.src} age={dog.age} facts={dog.facts}/>
                    <Link className="btn btn-success" to={`/dogs`}>Go to main page!</Link>

                </>
            )
        }
        else{
            return (
            <>
                <Redirect to="/dogs"></Redirect>
            </>
            )
        }
    }

    return (
        <>
            {renderOutput(output)}
        </>
    )
}

export default DogDetails;