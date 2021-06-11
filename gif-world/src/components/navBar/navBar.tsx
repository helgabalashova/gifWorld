import React, { useState } from "react";
import { ImMenu3, ImMenu4} from 'react-icons/im';
import { Link } from 'react-router-dom';

import "./navBar.css";

const NavBar = () => {
    const [navbarOpen, setNavBarOpen] = useState(false);

    const handleToggle = () => {
        setNavBarOpen(!navbarOpen);
        getSearchElement();
    }

    const getSearchElement = () => {
        if(!navbarOpen) {
            document.getElementById("searchBar")?.classList.add("negative-index");
        } else {
            document.getElementById("searchBar")?.classList.remove("negative-index");
        }
        
    }

    const closeMenu = () => {
        setNavBarOpen(false);
        document.getElementById("searchBar")?.classList.remove("negative-index");
    }

    return (
        <nav className="navBar" >
            <ImMenu3 className={`menuIcon ${navbarOpen ? " displayButton" : " "}`} onClick={handleToggle}></ImMenu3>
            <ImMenu4 className={`menuIcon ${navbarOpen ? " " : " displayButton"}`} onClick={handleToggle}></ImMenu4>
            <div className={`menuNav ${navbarOpen ? " showMenu" : "displayButton"}`}>
                <div className="linkDiv">
                    <Link className="menuLink" onClick={closeMenu} to="/">Home</Link>
                </div>
                <div className="linkDiv">
                    <Link className="menuLink" onClick={closeMenu} to="/about">About</Link>
                </div>
               
           </div>
        </nav>
    )
}

export default NavBar;