import React, { MouseEventHandler } from 'react';

interface MapActionProps {
  isDisabled: boolean;
  isEditLineFlow: boolean;
  isRemoveLineFlow: boolean;
  handleClickEditLine: MouseEventHandler<HTMLButtonElement>;
  handleClickRemoveLine: MouseEventHandler<HTMLButtonElement>;
  handleSaveDrawResult: MouseEventHandler<HTMLButtonElement>;
  handleRemoveOptions: MouseEventHandler<HTMLButtonElement>;
  handleSaveRemoveResult: MouseEventHandler<HTMLButtonElement>;
  startPoint: any;
  endPoint: any;
}

const MapAction: React.FC<MapActionProps> = ({
  isDisabled,
  isEditLineFlow,
  isRemoveLineFlow,
  handleClickEditLine,
  handleClickRemoveLine,
  handleSaveDrawResult,
  handleRemoveOptions,
  handleSaveRemoveResult,
  startPoint,
  endPoint,
}) => {
  return (
    <>
      <button style={{ padding: 10, background: 'red' }} onClick={handleClickEditLine}>
        {isEditLineFlow ? 'Kết thúc điều chỉnh' : 'Điều chỉnh đường nước'}{' '}
      </button>
      <button style={{ padding: 10, background: 'red' }} onClick={handleClickRemoveLine}>
        {isRemoveLineFlow ? 'Kết thúc xóa line' : 'Xóa line'}{' '}
      </button>
      {isEditLineFlow && (
        <div style={{ display: 'flex', justifyContent: 'center', gap: 100, padding: 10 }}>
          <div className="box" style={{ border: '1px solid #333', padding: 50 }}>
            <h2>Nguồn bắt đầu</h2>
            <p>{startPoint?.address}</p>
          </div>
          <div className="box" style={{ border: '1px solid #333', padding: 50 }}>
            <h2>Nguồn kết thúc</h2>
            <p>{endPoint?.address}</p>
          </div>
          <button disabled={isDisabled} style={{ padding: 10, background: 'green' }} onClick={handleSaveDrawResult}>
            Save
          </button>
          <button disabled={isDisabled} style={{ padding: 10, background: 'gray' }} onClick={handleRemoveOptions}>
            Hủy
          </button>
        </div>
      )}

      {isRemoveLineFlow && (
        <div style={{ display: 'flex', justifyContent: 'center', gap: 100, padding: 10 }}>
          <div className="box" style={{ border: '1px solid #333', padding: 50 }}>
            <h2>Nguồn bắt đầu</h2>
            <p>{startPoint?.address}</p>
          </div>
          <div className="box" style={{ border: '1px solid #333', padding: 50 }}>
            <h2>Nguồn kết thúc</h2>
            <p>{endPoint?.address}</p>
          </div>
          <button disabled={isDisabled} style={{ padding: 10, background: 'green' }} onClick={handleSaveRemoveResult}>
            Save
          </button>
          <button disabled={isDisabled} style={{ padding: 10, background: 'gray' }} onClick={handleRemoveOptions}>
            Hủy
          </button>
        </div>
      )}
    </>
  );
};

export default MapAction;
