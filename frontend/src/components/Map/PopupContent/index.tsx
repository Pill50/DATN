import React from 'react';
import './PopupContent.scss';

const PopupContent: React.FC = () => {
  return (
    <div className="popupMap">
      <p className="popupMap__station">Station N1</p>
      <p className="popupMap__address">Address: 268 Ly Thuong Kiet, Q10</p>
      <p className="popupMap__lifetime">Life time: 1 year</p>
      <p className="popupMap__waterflow">Total water flow per month: 1000m3</p>
      <p className="popupMap__devices">Total devices: 10</p>
    </div>
  );
};

export default PopupContent;
