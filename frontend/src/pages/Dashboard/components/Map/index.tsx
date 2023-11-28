import React, { FormEvent, useEffect, useState } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import Map, { Marker, Popup, Source, Layer } from 'react-map-gl';
import PopupContent from '../PopupMapContent';
import waterMeterImg from '@assets/images/waterMeter.png';
import SearchPlace from '../SearchPlace';
import LineAction from '../LineAction';

type Marker = {
  id: string;
  name: string;
  address: string;
  latitude: number;
  longitude: number;
  waterConsumptionPerDay: number;
  lifetime: string;
  totalDevice?: number;
  subDevices?: Marker[];
};

const MockSupplyList: Marker[] = [
  {
    id: '1',
    name: 'Tram Tong 1',
    address: 'DH Bach Khoa',
    latitude: 10.77284540373968,
    longitude: 106.65774091063211,
    waterConsumptionPerDay: 1000,
    lifetime: '1 year',
    totalDevice: 3,
    subDevices: [
      {
        id: '2',
        name: 'Nguon Con 1',
        address: 'Khoa KHMT',
        latitude: 10.77338833011621,
        longitude: 106.66081812349626,
        waterConsumptionPerDay: 2000,
        lifetime: '1 year',
      },
      {
        id: '3',
        name: 'Nguon Con 2',
        address: 'Khoa DDT',
        latitude: 10.772545792252462,
        longitude: 106.65845034545379,
        waterConsumptionPerDay: 1000,
        lifetime: '1 year',
      },
      {
        id: '4',
        name: 'Nguon Con 3',
        address: 'Khoa KTXD',
        latitude: 10.773746089710858,
        longitude: 106.658963924352,
        waterConsumptionPerDay: 1000,
        lifetime: '1 year',
      },
    ],
  },
  {
    id: '5',
    name: 'Tram Tong 2',
    address: 'DH Y Duoc',
    latitude: 10.754536008374377,
    longitude: 106.66337704146085,
    waterConsumptionPerDay: 2000,
    lifetime: '2 year',
    totalDevice: 2,
  },
  {
    id: '6',
    name: 'Tram Tong 3',
    address: 'DH KHTN',
    latitude: 10.762528251574917,
    longitude: 106.68271856645234,
    waterConsumptionPerDay: 3000,
    lifetime: '1 year',
    totalDevice: 3,
  },
  {
    id: '2',
    name: 'Nguon Con 1',
    address: 'Khoa KHMT',
    latitude: 10.77338833011621,
    longitude: 106.66081812349626,
    waterConsumptionPerDay: 2000,
    lifetime: '1 year',
    subDevices: [],
  },
  {
    id: '3',
    name: 'Nguon Con 2',
    address: 'Khoa DDT',
    latitude: 10.772545792252462,
    longitude: 106.65845034545379,
    waterConsumptionPerDay: 1000,
    lifetime: '1 year',
    subDevices: [],
  },
  {
    id: '4',
    name: 'Nguon Con 3',
    address: 'Khoa KTXD',
    latitude: 10.773746089710858,
    longitude: 106.658963924352,
    waterConsumptionPerDay: 1000,
    lifetime: '1 year',
    subDevices: [],
  },
];

const MapComponent: React.FC = () => {
  const [selectedMarker, setSelectedMarker] = useState<Marker>();
  const [isOpenPopup, setIsOpenPopup] = useState<boolean>(false);
  const [optionsID, setOptionsID] = useState<number>(1);
  const [actionID, setActionID] = useState<number>(1);
  const [supplyList, setSupplyList] = useState<Marker[]>(MockSupplyList);
  const [startPoint, setStartPoint] = useState<Marker>();
  const [endPoint, setEndPoint] = useState<Marker>();

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
    setIsOpenPopup(true);
    setSelectedMarker(marker);
    // SET STARTPOINT
    if (optionsID === 1) {
      setStartPoint(marker);
      setOptionsID(2);
    }
    // SET ENDPOINT
    if (optionsID === 2) {
      setEndPoint(marker);
      setOptionsID(1);
    }
  };

  const handleCreateNewLine = () => {
    setStartPoint(undefined);
    setEndPoint(undefined);
    setOptionsID(1);
    setActionID(1);
  };

  const handleRemoveLine = () => {
    setStartPoint(undefined);
    setEndPoint(undefined);
    setOptionsID(2);
    setActionID(2);
  };

  const handleSaveDrawResult = () => {
    if (startPoint && endPoint) {
      const index = supplyList.findIndex((item) => item.address === startPoint?.address);
      if (index !== -1) {
        const newsuplyList = [...supplyList];
        const subDevices = newsuplyList[index].subDevices || []; // Initialize as empty array if undefined
        subDevices.push(endPoint);
        newsuplyList[index].subDevices = subDevices; // Update subDevices
        setSupplyList(newsuplyList);
      } else {
        alert(`Address ${startPoint.address} not found in the list.`);
      }
    }
    handleRemoveOptions();
  };

  const handleSaveRemoveResult = () => {
    if (startPoint && endPoint) {
      if (!startPoint.subDevices?.find((item) => item.address === endPoint.address)) {
        alert('Invalid line to remove');
        return;
      }
      const index = supplyList.findIndex((item) => item.address === startPoint?.address);
      if (index !== -1) {
        const newsuplyList = [...supplyList];
        newsuplyList[index].subDevices = newsuplyList[index].subDevices?.filter(
          (item) => item.address !== endPoint.address,
        );
        setSupplyList(newsuplyList);
      } else {
        alert(`Address ${startPoint.address} not found in the list.`);
      }
    }
    handleRemoveOptions();
  };

  const handleSaveEdit = () => {
    // CREATE NEW LINE
    if (actionID === 1) {
      handleSaveDrawResult();
    } else if (actionID === 2) {
      //REMOVE LINE
      handleSaveRemoveResult();
    }
  };

  const handleRemoveOptions = () => {
    setOptionsID(1);
    setStartPoint(undefined);
    setEndPoint(undefined);
  };

  const handleSearchPlace = async (place: string) => {
    try {
      const response = await fetch(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
          place,
        )}.json?access_token=pk.eyJ1IjoidmluaHBodWMxMyIsImEiOiJjbG54OXUxa3UwZXQ4MnFzMzZxd2ZhZmhpIn0.dNUNqJ3oLydZ8gvbTfLR2g`,
      );
      const data = await response.json();
      console.log(data.features[0]);
      const [longitude, latitude] = data.features[0].center;
      setViewport({
        latitude,
        longitude,
        zoom: 14,
      });
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
      <h2 className=" text-[#4285f4] text-2xl font-bold ml-4">Bản đồ hệ thống nước</h2>
      <div className="flex gap-4 h-[600px]">
        <div className="w-[300px] shadow-md p-4">
          <SearchPlace handleSearchPlace={handleSearchPlace} />
          <LineAction
            handleCreateNewLine={handleCreateNewLine}
            handleRemoveLine={handleRemoveLine}
            handleRemoveOptions={handleRemoveOptions}
            handleSaveEdit={handleSaveEdit}
            startPoint={startPoint as Marker}
            endPoint={endPoint as Marker}
          />
        </div>
        <div className="flex-1 py-4 shadow-md">
          <Map
            {...viewport}
            mapboxAccessToken="pk.eyJ1IjoidmluaHBodWMxMyIsImEiOiJjbG54OXUxa3UwZXQ4MnFzMzZxd2ZhZmhpIn0.dNUNqJ3oLydZ8gvbTfLR2g"
            onMove={(evt) => setViewport(evt.viewState)}
            mapStyle="mapbox://styles/mapbox/streets-v9"
          >
            {isOpenPopup && selectedMarker && (
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
            {supplyList.map((marker, index) => (
              <React.Fragment key={index}>
                <Marker
                  longitude={marker.longitude}
                  latitude={marker.latitude}
                  onClick={() => handleClickMarker(marker)}
                >
                  <div className="marker__desc">
                    <div className="marker__icon">
                      {/* <PinIcon /> */}
                      <img src={waterMeterImg} alt="water meter" className="w-10 h-10" />
                    </div>
                    <p className="marker__name">{marker.name}</p>
                  </div>
                </Marker>

                {marker.subDevices &&
                  marker.subDevices.map((subMarker, subIndex) => (
                    <React.Fragment key={subIndex}>
                      {/* Calculate line coordinates and add a line */}
                      <Source
                        id={`line-source-${index}-${subIndex}`}
                        type="geojson"
                        data={{
                          type: 'Feature',
                          properties: {
                            name: 'Line1',
                          },
                          geometry: {
                            type: 'LineString',
                            coordinates: [
                              [marker.longitude, marker.latitude],
                              [subMarker.longitude, subMarker.latitude],
                            ],
                          },
                        }}
                      >
                        <Layer
                          id={`line-layer-${index}-${subIndex}`}
                          type="line"
                          paint={{
                            'line-color': 'blue',
                            'line-width': 2,
                          }}
                        />
                        <Layer
                          id={`text-layer-${index}-${subIndex}`}
                          type="symbol"
                          layout={{
                            'symbol-placement': 'line-center',
                            'text-field': [
                              'case',
                              ['>', ['to-number', subMarker.longitude], ['to-number', marker.longitude]],
                              '> > >',
                              '< < <',
                            ],
                            'text-size': 20,
                          }}
                          paint={{
                            'text-color': 'blue',
                          }}
                        />
                      </Source>
                    </React.Fragment>
                  ))}
              </React.Fragment>
            ))}
          </Map>
        </div>
      </div>
    </>
  );
};

export default MapComponent;
