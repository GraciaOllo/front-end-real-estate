import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const PropertyMap = ({ properties }) => {
  return (
    <MapContainer center={[7.3697, 12.3547]} zoom={7} style={{ height: '400px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {/* {properties.map(property => (
        <Marker key={property.id} position={property.location}>
          <Popup>
            <strong>{property.title}</strong><br />
            {property.price}<br />
            <a href={`/properties/${property.id}`}>View Details</a>
          </Popup>
        </Marker>
      ))} */}
    </MapContainer>
  );
};

export default PropertyMap;
