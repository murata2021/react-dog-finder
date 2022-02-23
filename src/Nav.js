import React from "react";
import { NavLink } from "react-router-dom";
import './Nav.css'


const Nav=({dogs})=>{

    console.log(dogs)

    return (
        <nav className="Nav">
            {dogs.map(dog=><NavLink to={`/dogs/${dog.name}`}>{dog.name}</NavLink>)}
        </nav>
    )

}

export default Nav;