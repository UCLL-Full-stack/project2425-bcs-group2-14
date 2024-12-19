import React, { useState } from "react";
import "../../styles/style.css";
import logo from '../assets/images/logo.png';
import search from '../assets/icons/search.png';
import sort from '../assets/icons/sort.png';

const Header = ({ onFilterClick }) => {

    const [loginText, setLoginText] = useState("login")
    
    const handleLoginClick = () => {
        setLoginText("ADMIN");
        setTimeout(()=>{
            window.location.reload()
        }, 500)
    }

    return (
        <header className="header">
            <img src={logo} alt="text" />
            <div className="pupa">
                <img src={search} alt="text"/>
                <input type="text" placeholder="Location, type, capacity, range" className="search" />
            </div>
            <button className="filter-btn" onClick={onFilterClick}><img src={sort} alt="" srcset="" /></button>
            <button className="login-btn" onClick={handleLoginClick}>{loginText}</button>
        </header>
    )
}

export default Header