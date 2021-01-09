import './App.css';
import Carousel from './organisms/Carousel';
import { products } from './models/products';
import CurrencyContext from './context/currencyContext';

const App = () => {
  return (
    <CurrencyContext.Provider value={{ currency: 'Rs.' }}>
      <div className='App'>
        <Carousel items={products} />
      </div>
    </CurrencyContext.Provider>
  );
};

export default App;
