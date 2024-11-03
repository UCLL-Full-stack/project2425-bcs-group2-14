import React from 'react';

const Modal = ({ isOpen, onClosed, plane, showEmail, onContactClick }) => {
    if (!isOpen || !plane) return null;

    return (
        <div className="modal-backdrop" onClick={onClosed}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="modal-left">
                    <img src={plane.image} alt={plane.name} />
                    <div className="thumbnails">
                        <img src={plane.image} alt="thumbnail 1" />
                        <img src={plane.image} alt="thumbnail 2" />
                        <img src={plane.image} alt="thumbnail 3" />
                    </div>
                </div>
                <div className="modal-right">
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <h2>{plane.name}</h2>
                        <div className="price">{plane.price}$ per hour</div>
                    </div>
                    <div className="location">Location: {plane.location}</div>
                    <div className="details">
                        <p>Range: {plane.range} km</p>
                        <p>Max Takeoff Weight: {plane.maxTakeoffWeight} kg</p>
                        <p>Capacity: {plane.capacity} passengers</p>
                    </div>
                    <div className="contact-info" onClick={onContactClick} style={{ cursor: 'pointer', color: '#007BFF' }}>
                        {showEmail ? (
                            <span>{plane.email}</span>
                        ) : (
                            <>
                                📧 <span>Owner contact info</span>
                            </>
                        )}
                    </div>
                    <button className="rent-button">Rent in one click</button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
