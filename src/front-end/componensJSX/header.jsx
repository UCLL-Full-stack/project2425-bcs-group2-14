import React from "react";
import "../../styles/style.css";
import logo from "../assets/images/logo.png";
import search from "../assets/icons/search.png";
import sort from "../assets/icons/sort.png";
import { useTranslation } from "react-i18next";

const Header = ({ onFilterClick }) => {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <header className="header">
            <img src={logo} alt="Logo" />
            <div className="pupa">
                <img src={search} alt="Search" />
                <input
                    type="text"
                    placeholder={t("search_placeholder")}
                    className="search"
                />
            </div>
            <div className="language-switcher">
                <button onClick={() => changeLanguage("en")}>EN</button>
                <button onClick={() => changeLanguage("ua")}>UA</button>
            </div>
            {/* <button className="filter-btn" onClick={onFilterClick}>
                <img src={sort} alt="Filter" />
            </button> */}
        </header>
    );
};

export default Header;
