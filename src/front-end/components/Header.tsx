import React, { ReactNode } from "react";
const logo = require("../assets/images/logo.png");
const search = require("../assets/icons/search.png");
const sort = require("../assets/icons/sort.png");

interface HeaderProps {
    onFilterClick: () => void;
    children?: ReactNode;
};

const Header: React.FC<HeaderProps> = ({ onFilterClick, children }) => {
    return (
        <header className="header">
            <img src={logo} alt="text" />
            <div className="pupa">
                <img src={search} alt="text"/>
                <input type="text" placeholder="Location, type, capacity, range" className="search" />
            </div>
            <button className="filter-btn" onClick={onFilterClick}><img src={sort} alt="" /></button>
            {children}
        </header>
    );
};

export default Header;