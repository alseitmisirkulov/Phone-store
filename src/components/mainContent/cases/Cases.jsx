import React from 'react';
import cases1 from './../../../assets/images/cases1.svg';
import cases2 from './../../../assets/images/cases2.svg';
import cases3 from './../../../assets/images/cases3.svg';

export const Cases = () => {
  return (
    <div className="cases">
      <h4>Чехлы</h4>
      <div className="case d-flex justify-content-between">
        <div className="d-flex align-items-center justify-content-center flex-column">
          <img src={cases1} alt="" />
          <p>Стеклянные</p>
        </div>
        <div className="d-flex align-items-center justify-content-center flex-column">
          <img src={cases2} alt="" />
          <p>Силиконовые</p>
        </div>
        <div className="d-flex align-items-center justify-content-center flex-column">
          <img src={cases3} alt="" />
          <p>Кожаные</p>
        </div>
      </div>
    </div>
  );
};
