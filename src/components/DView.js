import React from "react";
import './3Dview.css'; // Import the CSS for styling

const DView = () => {
  return (
    <div className="container">
      <div className="iframe-container">
        <iframe
          src="https://my.matterport.com/show/?m=1DSCmNjbKaT"
          frameBorder="0"
          allowFullScreen
          title="3D Tour"
          className="iframe"
        ></iframe>
      </div>
      <div className="info-section">
        <h2>Virtual 3D Tour</h2>
        <p>Explore this property through our interactive 3D virtual tour. Navigate through each room to see the details of the space.</p>
        <button className="back-button">Back to Listings</button>
      </div>
    </div>
  );
};

export default DView;
