import { useState } from 'react';

import './Select.scss';

export const Select = ({ selectType, text, data, img }) => {
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
          src={img}
          className={`arrow-icon ${active ? 'open' : ''}`}
          alt="Стрелка выпадащего списка"
        />
      </div>
      {active && (
        <div className="select-options">
          {data.map((el) => (
            <div
              key={el.id}
              className="option"
              onClick={() => handleOptionSelect(el.option || el.model)}>
              {el.option || el.model}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
