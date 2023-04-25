import './../styles/CatalogItems.scss';
import { useParams } from 'react-router-dom';
import { CatalogItemImages } from './../components/catalogItemPage/CatalogItemImages';
import { CatalogItemBlock } from './../components/catalogItemPage/CatalogItemBlock';

export const CatalogItem = ({ handleAddToCart, db }) => {
  window.scrollTo(0, 0);
  const { id } = useParams();

  const headphonesItems = db[0].headphones.find((item) => item.id === parseInt(id));
  const casesItems = db[1].cases.find((item) => item.id === parseInt(id));
  const airPodsItems = db[2].airpods.find((item) => item.id === parseInt(id));
console.log(headphonesItems);
console.log(casesItems);
  return (
    <div className="catalog-item container">
      <h4>Автодержатель</h4>
      <CatalogItemImages
        headphonesItems={headphonesItems}
        casesItems={casesItems}
        airPodsItems={airPodsItems}
      />
      <CatalogItemBlock
        headphonesItems={headphonesItems}
        casesItems={casesItems}
        airPodsItems={airPodsItems}
        handleAddToCart={handleAddToCart}
      />
    </div>
  );
};
