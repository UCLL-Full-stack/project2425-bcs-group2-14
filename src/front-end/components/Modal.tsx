import exp from "constants";
import React, { ReactNode } from "react";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children?: ReactNode;
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
    if (!isOpen) {
        return null;
    } return (
        <div className="modal-cluster" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="close" onClick={onClose}>X</button>
                {children}
            </div>
        </div>
    );
};

export default Modal;