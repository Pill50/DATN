import React, { useEffect, useState } from 'react';
import Sidebar from '@/components/Sidebar/Sidebar';
import CardList from './components/CardList';
import MapComponent from './components/Map';
import Graph from './components/Graph';
import Notification from './components/Notification';
import Top10Consumption from './components/Top10';
import { Device } from '@/types/device';
import { useAppDispatch } from '@/hooks/hooks';
import { deviceActions } from '@/redux/slices';
import toast, { Toaster } from 'react-hot-toast';

const Dashboard: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [cardListData, setCardListData] = useState({
    totalWaterMeters: 0,
    totalPulse: 0,
    totalDigital: 0,
    statusActive: 0,
  });
  const [deviceList, setDeviceList] = useState<Device[]>([]);

  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        //@ts-ignore
        const response = await dispatch(deviceActions.getAllWaterMeter());

        console.log('Response:', response);
        if (response.payload.statusCode === 200) {
          const cardListObj = {
            totalWaterMeters: response.payload.data.totalWaterMeters,
            totalPulse: response.payload.data.totalPulse,
            totalDigital: response.payload.data.totalDigital,
            statusActive: response.payload.data.statusActive,
          };
          setCardListData(cardListObj);
          setDeviceList(response.payload.data.devices);
        } else {
          toast.error('Get info card list failed');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        toast.error('An error occurred while fetching data');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  console.log('devicelist:', deviceList);
  return (
    <div className="flex">
      <Toaster />
      <Sidebar />
      <div className="p-3 flex-1">
        <h1 className="flex justify-center text-[#4285f4] text-3xl font-bold">BẢNG ĐIỀU KHIỂN</h1>
        <div className="flex justify-center gap-4 my-4">
          {isLoading ? <div>Loading...</div> : <CardList cardListData={cardListData} />}
        </div>
        {deviceList && <MapComponent deviceList={deviceList} />}
        <div className="grid grid-cols-3 gap-4 mt-10 mb-[100px]">
          <div className="col-span-2 shadow-lg pb-[200px] rounded-md pt-2">
            <Graph />
          </div>
          <Notification />
        </div>
        <Top10Consumption />
      </div>
    </div>
  );
};

export default Dashboard;
