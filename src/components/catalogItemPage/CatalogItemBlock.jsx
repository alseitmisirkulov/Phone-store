import React from 'react';
import addCart from './../../assets/images/cart.svg';

export const CatalogItemBlock = ({
  headphonesItems,
  casesItems,
  airPodsItems,
  handleAddToCart,
}) => {
  const onAddToCart = () => {
    let newObj = null;
    if (headphonesItems) {
      newObj = {
        id: headphonesItems.id,
        img: headphonesItems.img,
        title: headphonesItems.title,
        price: headphonesItems.newPrice,
        count: 1,
      };
    } else if (casesItems) {
      newObj = {
        id: casesItems.id,
        img: casesItems.img,
        title: casesItems.description,
        price: casesItems.price,
        count: 1,
      };
    } else if (airPodsItems) {
      newObj = {
        id: airPodsItems.id,
        img: airPodsItems.img,
        title: airPodsItems.description,
        price: airPodsItems.newPrice,
        count: 1,
      };
    }
    handleAddToCart(newObj);
  };

  return (
    <div className="description-block row mt-5">
      <div className="description__text p-0 col col-md-9">
        <div className="p-3">
          <h5>Описание и характеристики</h5>
        </div>
        <ul className="">
          <li>Активное шумоподавление: Нет</li>
          <li>Вес: 10 гр</li>
          <li>Влагозащита: Нет</li>
          <li>Длина кабеля: 1.2 м</li>
          <li>Комплектация: Наушники</li>
          <li>Материал корпуса: Пластик, резина</li>
          <li>Микрофон: Да</li>
          <li>Назначение: Проводные наушники</li>
          <li>Ответить/закончить разговор: Да</li>
          <li>Разъем наушников: Lightning</li>
          <li>Регулятор громкости: Да</li>
          <li>Тип крепления: Без крепления</li>
          <li>Тип наушников: Вкладыши ("таблетки")</li>
          <li>Тип подключения: Проводное</li>
          <li>Частотный диапазон: 20 Гц - 20000 Гц</li>
          <li>Чувствительность: 109 дБ</li>
        </ul>
      </div>
      <div className="col col-md-3 d-flex flex-column gap-3">
        <button>Купить!</button>
        <button onClick={onAddToCart}>
          <img src={addCart} alt="" />
          Добавить в корзину
        </button>
      </div>
    </div>
  );
};
