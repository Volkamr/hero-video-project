import React from "react";
import "./NavBar.css";
import { TiThMenu } from "react-icons/ti";

function NavBar(){
    return(
        <div className="Nav">
            <h1 className="logo"> pixel<span>perfect</span> </h1>
            <ul className="options">
                <li>Work</li>
                <li>Company</li>
                <li>Blog</li>
                <li>Careers</li>
                <li>Contact</li>
            </ul>
            <TiThMenu className="navIcon"/>
        </div>
    )
}

export default NavBar;