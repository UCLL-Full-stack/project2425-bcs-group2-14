import React from "react";
import { Plane } from '../../back-end/types';
const image = require("../assets/media/C310.jpg");
interface PlaneCardProps {
    plane: Plane;
    onClick: (plane: Plane) => void;

};

const PlaneCard: React.FC<PlaneCardProps> = ({ plane, onClick }) => {
    return (
        <div className="plane-card" onClick={() => onClick(plane)}>
            <h3>{plane.name}</h3>
            <p>wpo</p>
            <img src={image} alt={plane.name} />
            <div className="plane-info">
                <p><b>Capacity:</b> {plane.capacity}</p>
                <p><b>Manufacturer:</b> {plane.manufacturer}</p>
                <p><b>Year:</b> {plane.year}</p>
                <button className='rent-button'>
                    Rent in One Click: {plane.price}$
                </button>
            </div>
        </div>
    );
};

export default PlaneCard;