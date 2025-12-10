import './propertygrid.css'
import Card from './propertycard.jsx'
import properties from './properties.js'
import PropertyFilter from './propertyFilter.jsx'
import React, { useState, useEffect } from 'react';
import PropertyModal from './propertyModal.jsx'


function PropertyGrid(){

    const [filters, setFilters] = useState({type:'',});
    const [filteredProperties, setFilteredProperties] = useState(properties);
    const [selectedProperty, setSelectedProperty] = useState(null);
    const handleFilterChange = (name, value)=> {
        setFilters(prevFilters =>({
            ...prevFilters,
            [name]:value
        }));
    };

    const handleViewDetails = (id) => {
        const property = properties.find(p => p.id === id)
        setSelectedProperty(property);
    };

    const handleCloseModal = () =>{
        setSelectedProperty(null);
    };

    useEffect(() => {
        const applyFilters = () => {
            let updatedList = properties.filter(property => {
                if(filters.type && property.type !== filters.type){
                    return false;
                }
                return true;
            });
            setFilteredProperties(updatedList);
        };
        applyFilters();
    }, [filters])

    return(
        <>
        <div className='div'>
            <p className='INTTXT'>More Than 500+ <span className='BRKTXT'>Apartments For Rents</span></p>
            <PropertyFilter onFilterChange={handleFilterChange}/>
            <div className='PGCON'>
                {filteredProperties.map((property)=>(
                    <Card
                        key={property.id}
                        id={property.id}
                        image={property.image}
                        description={property.description}
                        price={property.price}
                        baths={property.baths}
                        beds={property.beds}
                        onViewDetails={handleViewDetails}
                    />
                ))}
            </div>
            {selectedProperty && (
                <PropertyModal
                    property={selectedProperty}
                    onClose={handleCloseModal}
                    />
            )}
        </div>
            
        </>
    )
}

export default PropertyGrid;