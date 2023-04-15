import React from 'react';
import { cases } from '../../../data/db';

export const Cases = () => {
  return (
    <div className="cases">
      <h4>Чехлы</h4>
      <div className="case d-flex justify-content-between">
        {cases.map((item) => (
          <div key={item.id} className="d-flex align-items-center justify-content-center flex-column">
            <img src={item.img} alt={item.title} />
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
