import catalogItemImg from './../assets/images/catalogItemImg.png';
import './../styles/CatalogItems.scss';
import addCart from './../assets/images/cart.svg';

export const CatalogItem = ({ handleAddToCart }) => {
  const onAddToCart = () => {
    const newObj = {
      id: 6,
      img: catalogItemImg,
      title: 'Автодержатель',
      price: 3000,
      count:1
    };
    handleAddToCart(newObj)
  };

  return (
    <div className="catalog-item container">
      <h4>Автодержатель</h4>
      <div className="catalog-item__images">
        <figure>
          <img src={catalogItemImg} alt="" />
          <img src={catalogItemImg} alt="" />
          <img src={catalogItemImg} alt="" />
          <img src={catalogItemImg} alt="" />
          <img src={catalogItemImg} alt="" />
        </figure>
        <div className="d-flex align-items-center justify-content-between pt-4">
          <h5>BOROFONE BH32</h5>
          <div className="d-flex align-items-center justify-content-between ">
            <div className="d-flex flex-column mx-4">
              <span>2 927 ₸</span>
              <span>3 527 ₸</span>
            </div>
            <span>-20%</span>
          </div>
        </div>
      </div>
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
    </div>
  );
};
