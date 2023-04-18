import React from 'react';

export const Cases = ({db}) => {
  return (
    <div className="cases">
      <h4>Чехлы</h4>
      <div className="case d-flex justify-content-between">
        {db[1].cases.map((item) => (
          <div key={item.id} className="d-flex align-items-center justify-content-center flex-column">
            <img src={item.img} alt={item.title} />
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
