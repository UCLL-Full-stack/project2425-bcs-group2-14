import React from "react";
import "../../styles/style.css";
import pilatus from '../assets/media/pc-12.jpg';
import plane from '../../litakStore.json';


const CardPlaneList = ({ plane, onClick }) => (
    <div className="card-plane" onClick={() => onClick(plane)}>
        <h3>{plane.name}</h3>
        <img src={plane.image} alt={plane.name} />
        <p>Range: {plane.range} km</p>
        <p>Capacity: {plane.capacity} seats</p>
        <p>Price: {plane.price}$</p>
    </div>
);

export default CardPlaneList;