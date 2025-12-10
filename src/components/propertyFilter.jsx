import React from 'react';
import './propertyFilter.css';

const PropertyFilter = ({onFilterChange}) => {
    const handleChange = (e) =>{
        const name = e.target.name;
        const value = e.target.value;
        
        onFilterChange(name, value);
    }

    return(
        <div className='filterBar'>
            <select name='type' onChange={handleChange} className='filterSelect'>
                <option value="">Property Type (All)</option>
                <option value="Sale">For Sale</option>
                <option value="Rent">For Rent</option>
            </select>
        </div>
    )
}

export default PropertyFilter;