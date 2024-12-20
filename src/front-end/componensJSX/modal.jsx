import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const Modal = ({ isOpen, onClosed, plane, onEdit, onDelete, role }) => {
    const { t } = useTranslation();
    const [formVisible, setFormVisible] = useState(false);
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
    });
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [editMode, setEditMode] = useState(false);
    const [updatedPlane, setUpdatedPlane] = useState({ ...plane });

    if (!isOpen || !plane) return null;

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (editMode) {
            setUpdatedPlane((prev) => ({ ...prev, [name]: value }));
        } else {
            setFormData((prev) => ({ ...prev, [name]: value }));
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setFormSubmitted(true);
    };

    const handleEditSubmit = (e) => {
        e.preventDefault();
        onEdit(updatedPlane);
        setEditMode(false);
    };

    const toggleForm = () => {
        setFormVisible(!formVisible);
        setFormSubmitted(false);
    };

    return (
        <div className="modal-backdrop" onClick={onClosed}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <img src={plane.image} alt={plane.name} className="modal-image" />
                <h2>{plane.name}</h2>
                <p>{t("plane_details.type")}: {plane.type}</p>
                <p>{t("plane_details.range")}: {plane.range} km</p>
                <p>{t("plane_details.capacity")}: {plane.capacity} seats</p>
                <p>{t("plane_details.location")}: {plane.location}</p>
                <p>{t("plane_details.price")}: {plane.price}$</p>
                {(role === "admin" || role === "owner") && editMode ? (
                    <form onSubmit={handleEditSubmit}>
                        <label>
                            {t("plane_details.name")}:
                            <input
                                type="text"
                                name="name"
                                value={updatedPlane.name}
                                onChange={handleInputChange}
                            />
                        </label>
                        <label>
                            {t("plane_details.price")}:
                            <input
                                type="number"
                                name="price"
                                value={updatedPlane.price}
                                onChange={handleInputChange}
                            />
                        </label>
                        <button type="submit">{t("edit_mode.save")}</button>
                        <button type="button" onClick={() => setEditMode(false)}>
                            {t("edit_mode.cancel")}
                        </button>
                    </form>
                ) : (
                    (role === "admin" || role === "owner") && (
                        <>
                            <button onClick={() => setEditMode(true)}>{t("edit_mode.edit")}</button>
                            <button onClick={() => onDelete(plane.id)}>{t("edit_mode.delete")}</button>
                        </>
                    )
                )}

                {role === "user" && (
                    <>
                        <button onClick={toggleForm} className="toggle-form-button">
                            {formVisible ? t("rental_form.close_form") : t("rental_form.open_form")}
                        </button>
                        {formVisible && (
                            <div className="form-container">
                                <form onSubmit={handleFormSubmit}>
                                    <h3>{t("rental_form.title")}</h3>
                                    <label>
                                        {t("rental_form.full_name")}:
                                        <input
                                            type="text"
                                            name="fullName"
                                            value={formData.fullName}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </label>
                                    <label>
                                        {t("rental_form.email")}:
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </label>
                                    <label>
                                        {t("rental_form.phone")}:
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </label>
                                    <button type="submit">{t("rental_form.submit")}</button>
                                </form>
                            </div>
                        )}
                    </>
                )}
                {formSubmitted && <p>{t("rental_form.success")}</p>}
                <button onClick={onClosed}>{t("edit_mode.close")}</button>
            </div>
        </div>
    );
};

export default Modal;
