import { useState } from 'react';
import Button from '../../atoms/button/Button';

const Filter = ({ categories, className, onAction }) => {
  const [activeFilter, setActiveFilter] = useState(0);
  const onFilterSelect = (e) => {
    const { dataset } = e.target;
    const { index } = dataset;
    setActiveFilter(+index);
    onAction(e);
  };

  return (
    <div className={`filter ${className}`}>
      {categories.map((category, key) => (
        <Button
          onClick={onFilterSelect}
          data-category={category}
          data-index={key}
          className={activeFilter === key ? 'btn--outline active' : ''}
          key={category}
        >
          {category}
        </Button>
      ))}
    </div>
  );
};

export default Filter;
