import React, { FormEvent, useEffect, useState } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import Map, { Marker, Popup, Source, Layer } from 'react-map-gl';
import PopupContent from '../PopupMapContent';
import waterMeterImg from '@assets/images/waterMeter.png';
import SearchPlace from '../SearchPlace';
import LineAction from '../LineAction';
import { Device } from '@/types/device';
import { useAppDispatch } from '@/hooks/hooks';
import { deviceActions } from '@/redux/slices';
import toast, { Toaster } from 'react-hot-toast';

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

interface MapProps {
  deviceList?: Device[];
}

const MapComponent: React.FC<MapProps> = ({ deviceList }) => {
  const [selectedMarker, setSelectedMarker] = useState<Device>();
  const [isOpenPopup, setIsOpenPopup] = useState<boolean>(false);
  const [optionsID, setOptionsID] = useState<number>(1);
  const [actionID, setActionID] = useState<number>(1);
  const [supplyList, setSupplyList] = useState<Device[]>(deviceList as Device[]);
  const [startPoint, setStartPoint] = useState<Device>();
  const [endPoint, setEndPoint] = useState<Device>();

  useEffect(() => {
    setSupplyList(deviceList as Device[]);
  }, [deviceList]);

  const [viewport, setViewport] = useState({
    latitude: 10.77284540373968,
    longitude: 106.65774091063211,
    zoom: 16,
  });

  const dispatch = useAppDispatch();

  const handleClickMarker = (marker: Device) => {
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

  const handleSaveDrawResult = async () => {
    try {
      if (startPoint && endPoint) {
        const data = {
          childrenId: endPoint.waterMeterId,
          parentId: startPoint.waterMeterId,
        };
        //@ts-ignore
        const response = await dispatch(deviceActions.addLine(data));

        if (response.payload?.statusCode == 200) {
          //@ts-ignore
          const newList = await dispatch(deviceActions.getAllWaterMeter());
          setSupplyList(newList.payload.data.devices);
          toast.success('Add new line successfully');
        } else {
          toast.error('You can not add line');
        }
      } else {
        toast.error('startPoint or endPoint is not defined.');
      }
    } catch (error) {
      console.log(error);
    }
    handleRemoveOptions();
  };

  const handleSaveRemoveResult = async () => {
    try {
      if (startPoint && endPoint) {
        const data = {
          id1: endPoint.waterMeterId,
          id2: startPoint.waterMeterId,
        };
        //@ts-ignore
        const response = await dispatch(deviceActions.removeLine(data));

        if (response.payload?.statusCode == 200) {
          //@ts-ignore
          const newList = await dispatch(deviceActions.getAllWaterMeter());
          setSupplyList(newList.payload.data.devices);
          toast.success('Delete line successfully');
        } else {
          toast.error('Remove line failed');
        }
      } else {
        toast.error('startPoint or endPoint is not defined.');
      }
    } catch (error) {
      console.log(error);
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
      <Toaster />
      <h2 className=" text-[#4285f4] text-2xl font-bold ml-4">Bản đồ hệ thống nước</h2>
      <div className="flex gap-4 h-[600px]">
        <div className="w-[300px] shadow-md p-4">
          <SearchPlace handleSearchPlace={handleSearchPlace} />
          <LineAction
            handleCreateNewLine={handleCreateNewLine}
            handleRemoveLine={handleRemoveLine}
            handleRemoveOptions={handleRemoveOptions}
            handleSaveEdit={handleSaveEdit}
            startPoint={startPoint as Device}
            endPoint={endPoint as Device}
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
                    <p className="marker__name">{marker.address}</p>
                  </div>
                </Marker>

                {marker.children &&
                  marker.children.map((subMarker, subIndex) => (
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
