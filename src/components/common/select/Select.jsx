import arrowDownSvg from './../../../assets/images/arrowDown.svg';

export const Select = ({ selectType, text }) => {
  return (
    <div className="menu_nime">
      <img src={selectType} alt="" />
      <span className="">{text}</span>
      <img src={arrowDownSvg} alt="" />
    </div>
  );
};
