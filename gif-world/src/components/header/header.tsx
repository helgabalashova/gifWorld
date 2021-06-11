import React from "react";
import "./header.css";
import { SiManjaro } from "react-icons/si";
import NavBar from '../navBar/navBar';

const Header = () => {
    return (
        <div className="header">
            <SiManjaro className="logoIcon"/>
            <h1>Gif World</h1>
            <NavBar/>
        </div>
    );
}

export default Header;