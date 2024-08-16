import React, { useEffect, useState } from 'react';
import ApiService from '../../controllers/ApiService';
import PropertyDetail from './PropertyDetail';

const PropertyList = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const data = await ApiService.getProperties();
        setProperties(data);
      } catch (error) {
        console.error('Error fetching properties', error);
      }
    };

    fetchProperties();
  }, []);

  return (
    <div>
      <h2>Property Listings</h2>
      <ul>
        {properties.map((property) => (
          <li key={property.id}>
            <PropertyDetail property={property} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PropertyList;
