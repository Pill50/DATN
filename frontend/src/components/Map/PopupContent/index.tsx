import React from 'react';
import './PopupContent.scss';
import { useNavigate } from 'react-router-dom';

type Marker = {
  name: string;
  address: string;
  latitude: number;
  longitude: number;
  waterConsumptionPerDay: number;
  lifetime: string;
  totalDevice?: number;
};

interface PopupContentProp {
  info: Marker;
}

const PopupContent: React.FC<PopupContentProp> = ({ info }) => {
  const navigate = useNavigate();

  const handleViewDetailInfoMarker = () => {
    if (info.name.includes('Tram Tong')) {
      navigate('/station/1');
    } else {
      navigate('/device/1');
    }
  };

  return (
    <div className="popupMap" onClick={handleViewDetailInfoMarker}>
      <p className="popupMap__station">Station: {info.name}</p>
      <p className="popupMap__address">Address: {info.address}</p>
      <p className="popupMap__lifetime">Life time: {info.lifetime}</p>
      <p className="popupMap__waterflow">Water consumption per day: {info.waterConsumptionPerDay} m3</p>
      {info.totalDevice && <p className="popupMap__devices">Total devices: {info.totalDevice}</p>}
    </div>
  );
};

export default PopupContent;
