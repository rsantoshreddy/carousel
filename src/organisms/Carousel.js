import { useEffect, useState } from 'react';
import Filter from '../molecules/filter/Filter';
import Products from '../molecules/products/Products';
import Arrow from '../atoms/arrow/Arrow';
import './carousel.css';

const defaultActiveItem = 1;

const Carousel = ({ items }) => {
  const categories = [...new Set(items.map((item) => item.category))];
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [activeItem, setActiveItem] = useState(defaultActiveItem);
  const [cItems, setItems] = useState([]);

  useEffect(() => {
    const filteredItems = items.filter(
      (item) => item.category === activeCategory
    );
    setItems([...filteredItems]);
  }, [activeCategory, items]);

  const rotate = (event) => {
    const { dataset } = event.target;
    const { move } = dataset;

    switch (move) {
      case 'left':
        if (activeItem > 1) {
          setActiveItem(activeItem - 1);
        }
        break;
      case 'right':
        if (activeItem < cItems.length - 2) {
          setActiveItem(activeItem + 1);
        }
        break;
      // no default
    }
  };

  const setCategory = (e) => {
    const { dataset } = e.target;
    const { category } = dataset;
    setActiveCategory(category);
    setActiveItem(defaultActiveItem);
  };

  return (
    <div className='carousel'>
      <Filter
        className='carousel__filter p-3 text-center mb-3'
        categories={categories}
        onAction={setCategory}
      />
      <div className='carousel__container'>
        <Arrow direction='left' onClick={rotate} />
        <Products
          items={cItems}
          className='carousel__item'
          activeItem={activeItem}
        />
        <Arrow direction='right' onClick={rotate} />
      </div>
    </div>
  );
};

export default Carousel;
