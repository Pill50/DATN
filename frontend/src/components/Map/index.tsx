import React, { useState } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import Map, { Marker, Popup } from 'react-map-gl';
import Pin from '../../assets/images/pin.png';
import PopupContent from './PopupContent';

const MapComponent: React.FC = () => {
  const [showPopup, setShowPopup] = useState<boolean>(true);
  const [viewport, setViewport] = useState({
    latitude: 10.77284540373968,
    longitude: 106.65774091063211,
    zoom: 16,
  });

  return (
    <Map
      mapboxAccessToken="pk.eyJ1IjoidmluaHBodWMxMyIsImEiOiJjbG54OXUxa3UwZXQ4MnFzMzZxd2ZhZmhpIn0.dNUNqJ3oLydZ8gvbTfLR2g"
      initialViewState={viewport}
      mapStyle="mapbox://styles/mapbox/streets-v9"
    >
      {showPopup && (
        <Popup
          longitude={viewport.longitude}
          latitude={viewport.latitude}
          anchor="bottom"
          closeOnClick={false}
          onClose={() => setShowPopup(false)}
        >
          <PopupContent />
        </Popup>
      )}
      <Marker
        longitude={viewport.longitude}
        latitude={viewport.latitude}
        offset={[0, 10]}
        onClick={() => setShowPopup(true)}
      >
        <img src={Pin} />
      </Marker>
    </Map>
  );
};

export default MapComponent;
