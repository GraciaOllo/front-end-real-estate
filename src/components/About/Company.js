import React from 'react';
import './Company.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; // Leaflet's default styles

import L from 'leaflet';



// Custom marker icon
const markerIcon = new L.Icon({
  iconUrl: require(`../../assets/images/marker-icon.jpeg`),
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const Company = () => {
    // Center of the map (Yaoundé)
    const center = [3.848, 11.5021];

    // Array of marker positions (you can customize these locations)
    const markers = [
        { position: [3.8575, 11.5218], description: 'Marker 1: Location A' },
        { position: [3.8615, 11.5037], description: 'Marker 2: Location B' },
        { position: [3.8365, 11.4925], description: 'Marker 3: Location C' },
        { position: [3.8520, 11.5128], description: 'Marker 4: Location D' },
        { position: [3.8401, 11.5145], description: 'Marker 5: Location E' },
        { position: [3.8432, 11.5257], description: 'Marker 6: Location F' },
        { position: [3.8508, 11.5009], description: 'Marker 7: Location G' },
    ];

    return (
        <div className="contact-us">
            <div className="header-image">
                {/* Placeholder for background image */}
            </div>
            <div className="contact-info">
                <h1>How to Contact Us</h1>
                <p>
                    For customer and technical support, please check the&nbsp;
                    <a href="TSF">TSF-Consult Help Center</a>.
                </p>

                <h2>For brokerage or MLS Inquiries</h2>
                <p>Contact us by phone: <strong>699887789 / 670121631</strong></p>

                <p>
                    Address: <br />
                    TSF-CONSULT, Inc.<br />
                    Attn: Brokerage Operations<br />
                    <br />
                    Seattle, WA 98101
                </p>Yaounde-Cameroon , Mballa II (Carrefour Jamot)

                <p>
                    You can also find more information on selling your property at&nbsp;
                    <a href="https://www.zillow.com/sell/" target="_blank" rel="noopener noreferrer">
                        Zillow's Sell Page
                    </a>.
                </p>

                {/* Leaflet Map */}
                <div className="map-container">
                    <MapContainer center={center} zoom={13} scrollWheelZoom={false} className="map">
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        {markers.map((marker, idx) => (
                            <Marker key={idx} position={marker.position} icon={markerIcon}>
                                <Popup>{marker.description}</Popup>
                            </Marker>
                        ))}
                    </MapContainer>
                </div>
            </div>
        </div>
    );
};

export default Company;
