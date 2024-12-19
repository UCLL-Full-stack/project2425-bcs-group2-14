import React, { useState } from 'react';

const Modal = ({ isOpen, onClosed, plane, showEmail, onContactClick }) => {
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [formData, setFormData] = useState({ fullName: '', email: '', phoneNumber: '' });
    const [formSubmit, setFormSubmit] = useState(false);
    const [fullNameFormError, setFullNameFormError] = useState("");

    if (!isOpen || !plane) return null;

    const handleFormInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (formData.fullName.trim().length < 3){
            setFullNameFormError("Your name has to be more than 3 charaters long");
            return
        }
        console.log('Submitted data:', formData);
        setFormSubmit(true);
        setTimeout(()=>{
            setIsFormOpen(false)
            setFormSubmit(false)
        },3000)
    };

    const toggleForm = () => setIsFormOpen((prev) => !prev);

    return (
        <div className={`modal-backdrop ${isFormOpen ? 'fade-in' : 'fade-out'}`} onClick={onClosed}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="modal-left">
                    <img src={plane.image} alt={plane.name} className="modal-image"/>
                    <div className="thumbnails">
                        <img src={plane.image} alt="thumbnail 1" />
                        <img src={plane.image} alt="thumbnail 2" />
                        <img src={plane.image} alt="thumbnail 3" />
                    </div>
                </div>
                <div className="modal-right">
                    <div className="modal-header">
                        <h2>{plane.name}</h2>
                        <div className="price">{plane.price}$ per hour</div>
                    </div>
                    <div className="location">Location: {plane.location}</div>
                    <div className="details">
                        <p>Range: {plane.range} km</p>
                        <p>Max Takeoff Weight: {plane.maxTakeoffWeight} kg</p>
                        <p>Capacity: {plane.capacity} passengers</p>
                    </div>
                    <div className='bottom-right'>
                        {showEmail ? (
                            <span>{plane.email}</span>
                        ) : (
                            <>
                                📧 <span>Owner contact info</span>
                            </>
                        )}
                    </div>
                    <button className="rent-button" onClick={toggleForm}>
                        Rent in one click
                    </button>
                    </div>
                    <div className="contact-info" onClick={onContactClick} style={{ cursor: 'pointer', color: '#007BFF' }}>

                    {isFormOpen && (
                        <div className="form-modal-backdrop fade-in">
                            <div className="form-modal-content scale-up" onClick={(e) => e.stopPropagation()}>
                                <h3>Credentials for rent</h3>
                                {formSubmit?
                                (<p>TEXT</p>):(
                                  <form onSubmit={handleFormSubmit} className="contact-form">
                                    <label>
                                        Full Name:
                                        <input
                                            type="text"
                                            name="fullName"
                                            value={formData.fullName}
                                            onChange={handleFormInputChange}
                                            required
                                            className="input-field"

                                        />
                                    </label>
                                    {fullNameFormError && (
                                        <p style={{color:"red",fontSize:"16px", fontWeight:"bold"}}>{fullNameFormError}</p>
                                    )}
                                    <label>
                                        Email:
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleFormInputChange}
                                            required
                                            className="input-field"
                                        />
                                    </label>
                                    <label>
                                        Phone Number:
                                        <input
                                            type="tel"
                                            name="phoneNumber"
                                            value={formData.phoneNumber}
                                            onChange={handleFormInputChange}
                                            required
                                            className="input-field"
                                        />
                                    </label>
                                    <button type="submit" className="submit-button hover-grow">Submit</button>
                                    <button type="button" onClick={toggleForm} className="close-button hover-grow">Close</button>
                                </form>  
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Modal;
