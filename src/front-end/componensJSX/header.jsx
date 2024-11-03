import React from "react";
import "../../styles/style.css";
import logo from '../assets/images/logo.png';
import search from '../assets/icons/search.png';
import sort from '../assets/icons/sort.png';
const header = ({ onFilterClick }) => {
    return (
        <header className="header">
            <img src={logo} alt="text" />
            <div className="pupa">
                <img src={search} alt="text"/>
                <input type="text" placeholder="Location, type, capacity, range" className="search" />
            </div>
            <button className="filter-btn" onClick={onFilterClick}><img src={sort} alt="" srcset="" /></button>
        </header>
    )
}

export default header