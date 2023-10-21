import React from 'react';
import './CustomTooltip.scss';

const CustomTooltip: React.FC = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="tooltip">
        <p className="label">{`${label}`}</p>
        <div className="list">
          {payload.map((data: any, index: number) => {
            return (
              <p key={index} className="item">
                Value : {data.value}
              </p>
            );
          })}
        </div>
      </div>
    );
  }
  return null;
};

export default CustomTooltip;
