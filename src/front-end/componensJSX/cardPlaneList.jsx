import React from "react";
import "../../styles/style.css";
import { useTranslation } from "react-i18next";

const CardPlaneList = ({ plane, onClick }) => {
    const { t } = useTranslation();

    return (
        <div
            className="card-plane"
            onClick={onClick ? () => onClick(plane) : null}
        >
            <h3>{plane.name}</h3>
            <img
                src={plane.image}
                alt={plane.name}
                className="plane-image"
            />
            <p>{t("plane_details.type")}: {plane.type}</p>
            <p>{t("plane_details.range")}: {plane.range} km</p>
            <p>{t("plane_details.capacity")}: {plane.capacity} seats</p>
            <p>{t("plane_details.location")}: {plane.location}</p>
            <p>{t("plane_details.price")}: {plane.price}$</p>
            <p>{t("plane_details.max_takeoff_weight")}: {plane.maxTakeoffWeight} kg</p>
        </div>
    );
};

export default CardPlaneList;
