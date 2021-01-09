import { useContext, memo } from 'react';
import CurrencyContext from '../../context/currencyContext';
import './product.css';

const Product = ({ className, item }) => {
  const currencyContext = useContext(CurrencyContext);
  return (
    <div className={`product ${className}`}>
      <div className={`product__image`}>
        <img src={item.image.src} alt={item.image.alt} />
      </div>
      <div className='p-3'>
        <div className='product__price'>{`${currencyContext.currency} ${item.price}`}</div>
        <div className='d-flex justify-space-between'>
          <span className='product__name'>{item.name}</span>
          <span className='product__category'>{item.category}</span>
        </div>
      </div>
    </div>
  );
};

export default Product;
