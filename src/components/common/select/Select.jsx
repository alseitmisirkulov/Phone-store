import { useState } from 'react';
import arrowDownSvg from './../../../assets/images/arrowDown.svg';
import './Select.scss';

export const Select = ({ selectType, text }) => {
  const [active, setActive] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  console.log(active);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setActive(false);
  };
  return (
    <div className="select-popup">
      <div className="select-header" onClick={() => setActive(!active)}>
        <img src={selectType} alt="Картинка телефона" />
        <span className="selected-option">{selectedOption || text}</span>
        <img
          src={arrowDownSvg}
          className={`arrow-icon ${active ? 'open' : ''}`}
          alt="Стрелка выпадащего списка"
        />
      </div>
      {active && (
        <div className="select-options">
          <div className="option" onClick={() => handleOptionSelect('option 1')}>
            option 1
          </div>
          <div className="option" onClick={() => handleOptionSelect('option 1')}>
            option 1
          </div>
        </div>
      )}
    </div>
  );
};
