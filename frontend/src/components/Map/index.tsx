import React, { useEffect, useState } from 'react';
import './Map.scss';
import 'mapbox-gl/dist/mapbox-gl.css';
import Map, { Marker, Popup, Source, Layer } from 'react-map-gl';
import { PinIcon } from '../Icons';
import PopupContent from './PopupContent';

type Marker = {
  name: string;
  address: string;
  latitude: number;
  longitude: number;
  waterConsumptionPerDay: number;
  lifetime: string;
  totalDevice?: number;
};

const supplyAddressList: Marker[] = [
  {
    name: 'Tram Tong 1',
    address: 'DH Bach Khoa',
    latitude: 10.77284540373968,
    longitude: 106.65774091063211,
    waterConsumptionPerDay: 1000,
    lifetime: '1 year',
    totalDevice: 3,
  },
  {
    name: 'Tram Tong 2',
    address: 'DH Y Duoc',
    latitude: 10.754536008374377,
    longitude: 106.66337704146085,
    waterConsumptionPerDay: 2000,
    lifetime: '2 year',
    totalDevice: 2,
  },
  {
    name: 'Tram Tong 3',
    address: 'DH KHTN',
    latitude: 10.762528251574917,
    longitude: 106.68271856645234,
    waterConsumptionPerDay: 3000,
    lifetime: '1 year',
    totalDevice: 3,
  },
];

const deviceAddressList = [
  {
    name: 'Nguon Con 1',
    address: 'DH KHTN',
    latitude: 10.77338833011621,
    longitude: 106.66081812349626,
    waterConsumptionPerDay: 2000,
    lifetime: '1 year',
  },
  {
    name: 'Nguon Con 2',
    address: 'Khoa DDT',
    latitude: 10.772545792252462,
    longitude: 106.65845034545379,
    waterConsumptionPerDay: 1000,
    lifetime: '1 year',
  },
  {
    name: 'Nguon Con 3',
    address: 'Khoa KTXD',
    latitude: 10.773746089710858,
    longitude: 106.658963924352,
    waterConsumptionPerDay: 1000,
    lifetime: '1 year',
  },
];

const MapComponent: React.FC = () => {
  const [showDirection, setShowDirection] = useState<boolean>(false);
  const [selectedMarker, setSelectedMarker] = useState<Marker>();

  const [viewport, setViewport] = useState({
    latitude: 10.77284540373968,
    longitude: 106.65774091063211,
    zoom: 16,
  });

  const handleClickMarker = (marker: Marker) => {
    setViewport({
      latitude: marker.latitude,
      longitude: marker.longitude,
      zoom: 16,
    });
    setShowDirection(!showDirection);
    setSelectedMarker(marker);
  };

  const handleClickSubMarker = (marker: Marker) => {
    setSelectedMarker(marker);
  };

  return (
    <Map
      mapboxAccessToken="pk.eyJ1IjoidmluaHBodWMxMyIsImEiOiJjbG54OXUxa3UwZXQ4MnFzMzZxd2ZhZmhpIn0.dNUNqJ3oLydZ8gvbTfLR2g"
      initialViewState={viewport}
      mapStyle="mapbox://styles/mapbox/streets-v9"
    >
      {selectedMarker && (
        <Popup
          longitude={selectedMarker.longitude}
          latitude={selectedMarker.latitude}
          anchor="bottom"
          closeOnClick={false}
          onClose={() => setSelectedMarker(undefined)}
        >
          <PopupContent info={selectedMarker} />
        </Popup>
      )}
      {supplyAddressList.map((marker: Marker, index) => (
        <Marker
          key={index}
          longitude={marker.longitude}
          latitude={marker.latitude}
          onClick={() => handleClickMarker(marker)}
        >
          <div className="marker__desc">
            <div className="marker__icon">
              <PinIcon />
            </div>
            <p className="marker__name">{marker.name}</p>
          </div>
        </Marker>
      ))}

      {showDirection &&
        deviceAddressList.map((marker, index) => (
          <div key={index}>
            <Source
              id={`lineSource${index}`}
              type="geojson"
              data={{
                type: 'Feature',
                properties: {},
                geometry: {
                  type: 'LineString',
                  coordinates: [
                    [viewport.longitude, viewport.latitude],
                    [marker.longitude, marker.latitude],
                  ],
                },
              }}
            >
              <Layer
                id={`lineLayer${index}`}
                type="line"
                paint={{
                  'line-color': '#4285f8',
                  'line-width': 2,
                }}
              />
            </Source>

            <Marker
              key={index}
              longitude={marker.longitude}
              latitude={marker.latitude}
              onClick={() => handleClickSubMarker(marker)}
            >
              <div className="marker__desc">
                <div className="marker__icon--device">
                  <PinIcon />
                </div>
                <p className="marker__name">{marker.name}</p>
              </div>
            </Marker>
          </div>
        ))}
    </Map>
  );
};

export default MapComponent;
