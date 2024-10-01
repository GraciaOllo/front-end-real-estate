// /src/components/PropertyPage.js
import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import "./visualisation.css";

// SearchBar Component
const SearchBar = ({ onSearch }) => {
  const [location, setLocation] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("");
  const [propertyType, setPropertyType] = useState("Rent");

  const handleSearch = () => {
    onSearch({ location, checkIn, checkOut, guests, propertyType });
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Where are you going?"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <input
        type="date"
        placeholder="Check-in date"
        value={checkIn}
        onChange={(e) => setCheckIn(e.target.value)}
      />
      <input
        type="date"
        placeholder="Check-out date"
        value={checkOut}
        onChange={(e) => setCheckOut(e.target.value)}
      />
      <input
        type="number"
        placeholder="Guests"
        value={guests}
        onChange={(e) => setGuests(e.target.value)}
      />
      <select
        value={propertyType}
        onChange={(e) => setPropertyType(e.target.value)}
      >
        <option value="Rent">Rent</option>
        <option value="Buy">Buy</option>
        <option value="Book">Book</option>
      </select>
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

const Offers = () => {
  return (
    <div className="offers">
      <div className="offer-banner">
        <h3>Seize the moment</h3>
        <p>Save 15% or more when you book today.</p>
        <button>Find Getaway Deals</button>
      </div>
      <div className="offer-banner">
        <h3>Good for a good time</h3>
        <p>Stay longer, save more!</p>
        <button>Find Last Minute Deals</button>
      </div>
    </div>
  );
};

const PropertyType = () => {
  const propertyTypes = ["Hotels", "Apartments", "Resorts", "Villas"];

  return (
    <div className="property-type">
      <h2>Browse by property type</h2>
      <div className="property-type-list">
        {propertyTypes.map((type) => (
          <div key={type} className="property-type-item">
            <img src={`/images/${type.toLowerCase()}.jpg`} alt={type} />
            <h4>{type}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

const MapWithMarkers = () => {
  return (
    <div className="map-container">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.9607439090056!2d11.50004091532155!3d3.8480003972629946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10a602d251f1d7ff%3A0xdbb6c0c2615d45ec!2sYaound%C3%A9%2C%20Cameroon!5e0!3m2!1sen!2sus!4v1695748910129!5m2!1sen!2sus"
        width="300"
        height="450"
        allowFullScreen=""
        loading="lazy"
        title="Map"
      ></iframe>
    </div>
  );
};

// Property Card Component (updated to receive goTo3dView as a prop)
const PropertyCard = ({ property, goTo3dView }) => {
  return (
    <div className="property-card">
      <img src={property.imageUrl || "/images/property.jpg"} alt={property.name} />
      <div className="property-card-details">
        <h4>{property.type}</h4>
        <p>{property.location}</p>
        <p>{property.distance} away</p>
        <p>Price: {property.price}</p>
        <button onClick={goTo3dView} className="view-3d"> 3D View</button>
        <button className="view-3d"> rent </button>
        <button className="view-3d"> book </button>
      </div>
    </div>
  );
};

// Property List Component
const PropertyList = ({ filteredProperties, goTo3dView }) => {
  return (
    <div className="property-list">
      <h2>Explore Properties</h2>
      <div className="property-grid">
        {filteredProperties.map((property) => (
          <PropertyCard key={property.id} property={property} goTo3dView={goTo3dView} />
        ))}
      </div>
    </div>
  );
};

// Main Property Page Component
const PropertyPage = () => {
  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const navigate = useNavigate();

  const goTo3dView = () => {
    navigate('/3D');
  };

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await fetch("http://localhost:8087/api/properties/getAllProperties");
        if (!response.ok) {
          throw new Error("Failed to fetch properties");
        }
        const data = await response.json();
        setProperties(data);
        setFilteredProperties(data); // Display all properties initially
      } catch (error) {
        console.error("Error fetching properties:", error);
      }
    };

    fetchProperties();
  }, []);

  const handleSearch = ({ location, checkIn, checkOut, guests, propertyType }) => {
    // Frontend filtering based on search criteria
    const filtered = properties.filter((property) => {
      return (
        (location ? property.location.toLowerCase().includes(location.toLowerCase()) : true) &&
        (propertyType ? property.type === propertyType : true)
      );
    });
    setFilteredProperties(filtered);
  };

  return (
    <div className="property-page">
      <SearchBar onSearch={handleSearch} />
      <Offers />
      <div className="content">
        <MapWithMarkers />
        <div className="right-content">
          <PropertyType />
          <PropertyList filteredProperties={filteredProperties} goTo3dView={goTo3dView} />
        </div>
      </div>
    </div>
  );
};

export default PropertyPage;
