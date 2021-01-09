import Product from '../../atoms/product/Product';
const Products = ({ items, className, activeItem }) => {
  const getClass = (key) => {
    if (key === activeItem - 1) {
      return `${className}--previous`;
    }
    if (key === activeItem) {
      return `${className}--active`;
    }
    if (key === activeItem + 1) {
      return `${className}--next`;
    }
    return '';
  };

  return (
    <div className='carousel__items'>
      {items.map((item, key) => (
        <Product
          className={`${className} ${getClass(key)}`}
          key={key}
          item={item}
        />
      ))}
    </div>
  );
};

export default Products;
