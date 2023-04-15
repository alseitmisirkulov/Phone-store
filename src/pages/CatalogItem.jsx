import catalogItemImg from './../assets/images/catalogItemImg.png'
import './../styles/CatalogItems.scss'

export const CatalogItem = () => {
  return (
    <div className='catalog-item container'>
      <h4>Автодержатель</h4>
      <div className='catalog-item__images'>
        <figure>
          <img src={catalogItemImg} alt="" />
          <img src={catalogItemImg} alt="" />
          <img src={catalogItemImg} alt="" />
          <img src={catalogItemImg} alt="" />
          <img src={catalogItemImg} alt="" />
        </figure>
        <div className='d-flex align-items-center justify-content-between pt-4'>
          <h5>BOROFONE BH32</h5>
          <div className='d-flex align-items-center justify-content-between '>
            <div className='d-flex flex-column mx-4'>
              <span>2 927 ₸</span>
              <span>3 527 ₸</span>
            </div>
            <span>-20%</span>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className="col col-md-9">
          
        </div>
        <div className="col col-md-3"></div>
      </div>
    </div>
  )
}
