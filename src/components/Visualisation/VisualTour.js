import React from 'react';
import Matterport from 'matterport-showcase';

const VisualTour = ({ modelUrl }) => {
  return (
    <div className="visual-tour">
      <Matterport src={modelUrl} width="100%" height="600px" />
    </div>
  );
};

export default VisualTour;
