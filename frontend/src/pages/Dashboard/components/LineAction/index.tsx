import React, { useState } from 'react';

type Point = {
  name: string;
  address: string;
  latitude: number;
  longitude: number;
  waterConsumptionPerDay: number;
  lifetime: string;
};

interface LineActionProps {
  handleCreateNewLine: Function;
  handleRemoveLine: Function;
  handleRemoveOptions: Function;
  handleSaveEdit: React.MouseEventHandler<HTMLButtonElement>;
  startPoint: Point;
  endPoint: Point;
}

const LineAction: React.FC<LineActionProps> = ({
  handleCreateNewLine,
  handleRemoveLine,
  handleRemoveOptions,
  handleSaveEdit,
  startPoint,
  endPoint,
}) => {
  const [isOpenInfoBlock, setIsOpenInfoBlock] = useState<boolean>(false);
  const [options, setOptions] = useState<number>(1);

  return (
    <>
      {/* TẠO ĐƯỜNG NƯỚC MỚI*/}
      <button
        type="button"
        className={`text-white w-full font-medium rounded-md text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none 
        ${options === 1 ? 'bg-green-800' : 'bg-[#0F9C58] hover:bg-green-800'}`}
        onClick={() => {
          setIsOpenInfoBlock(true);
          setOptions(1);
          handleCreateNewLine();
        }}
      >
        TẠO ĐƯỜNG NƯỚC MỚI
      </button>
      {/* XÓA ĐƯỜNG NƯỚC */}
      <button
        type="button"
        className={`text-white w-full font-medium rounded-md text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none 
        ${options === 2 ? 'bg-green-800' : 'bg-[#0F9C58] hover:bg-green-800'}`}
        onClick={() => {
          setIsOpenInfoBlock(true);
          setOptions(2);
          handleRemoveLine();
        }}
      >
        XÓA ĐƯỜNG NƯỚC
      </button>
      {/* THÔNG TIN ĐƯỜNG NƯỚC */}
      {isOpenInfoBlock && (
        <div className="flex flex-col gap-2 mt-2">
          <p className="text-[#DB4437] font-semibold text-center">
            Chọn 2 trạm bạn muốn {options === 1 ? 'nối' : 'xóa'}
          </p>
          <div className="border-[1px] border-[#4285f4] rounded-md p-2">
            <p className="text-center font-semibold text-lg">Nguồn bắt đầu</p>
            {startPoint ? (
              <>
                <p>Tên: {startPoint.name}</p>
                <p>Địa chỉ: {startPoint.address}</p>
                <p>Kinh độ: {startPoint.longitude}</p>
                <p>Vĩ độ: {startPoint.latitude}</p>
              </>
            ) : (
              <></>
            )}
          </div>
          <div className="border-[1px] border-[#4285f4] rounded-md p-2">
            <p className="text-center font-semibold text-lg">Nguồn kết thúc</p>
            {endPoint ? (
              <>
                <p>Tên: {endPoint.name}</p>
                <p>Địa chỉ: {endPoint.address}</p>
                <p>Kinh độ: {endPoint.longitude}</p>
                <p>Vĩ độ: {endPoint.latitude}</p>
              </>
            ) : (
              <></>
            )}
          </div>
          <div className="flex justify-end mx-[-8px]">
            <button
              type="button"
              className="text-[#333] bg-[#e3e3e3] hover:bg-slate-400 font-medium rounded-md text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none "
              onClick={() => {
                setIsOpenInfoBlock(false);
                handleRemoveOptions();
              }}
            >
              HỦY
            </button>
            <button
              type="button"
              className="text-white bg-[#4285f4] hover:bg-blue-800 font-medium rounded-md text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none "
              onClick={handleSaveEdit}
            >
              LƯU
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default LineAction;
