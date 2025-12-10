import React from 'react';
import './propertyModal.css';
import { FaTimes } from 'react-icons/fa';

const PropertyModal = ({ property, onClose }) => {
    
    if (!property) return null;

    const formattedPrice = new Intl.NumberFormat('en-us', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
    }).format(property.price);

    return (
        <div className="modalBackdrop" onClick={onClose}>
            <div className="modalContent" onClick={e => e.stopPropagation()}>
                <button className="modalClose" onClick={onClose}>
                    <FaTimes size={40} />
                </button>
                <img src={property.image} className="modalIMG" />
                <div className="modalDetails">
                    <h2 className="modalDescription">{property.description}</h2>
                    <h3 className="modalPrice">{formattedPrice}</h3>
                    <p className="modalType">Availabe For: {property.type}</p>
                    <p className='modalBeds'>Bedrooms: {property.beds}</p>
                    <p className='modalBaths'>Bathrooms: {property.baths}</p>
                    <p className="modalExtraDetails">
                        This beautiful property, listed for {property.type}, offers modern amenities and excellent accessibility. 
                        It is a perfect fit for a growing family.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PropertyModal;