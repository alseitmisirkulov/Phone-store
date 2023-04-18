import React from 'react';
import { Link } from 'react-router-dom';

export const Cases = ({ db }) => {
  return (
    <div className="cases">
      <h4>Чехлы</h4>
      <div className="case d-flex justify-content-between">
        {db[1].cases.map((item) => (
          <div
            key={item.id}
            className="d-flex align-items-center justify-content-center flex-column">
            <Link to={`/catalog-item/${item.id}`}>
              <img src={item.img} alt={item.title} />
              <p>{item.description}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
