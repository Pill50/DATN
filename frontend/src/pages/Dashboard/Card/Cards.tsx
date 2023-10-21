import React from 'react';
import './Cards.scss';

type Card = {
  title: string;
  icon?: React.FC;
  color: string;
  value: number;
};

const Cards: React.FC<{ cardList: Card[] }> = ({ cardList }) => {
  return (
    <>
      <div className="card">
        {cardList.map((cardItem, index) => {
          const IconComp = cardItem.icon;
          return (
            <div key={index} className={`card__wrapper card__${cardItem.color}`}>
              <div className="card__label">
                {IconComp && <IconComp />}
                <span>{cardItem.title}</span>
              </div>
              <p className="card__value">{cardItem.value}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Cards;
