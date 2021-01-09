import { createContext } from 'react';
const defaultCurrencyContext = {
  currency: 'Rs.',
  setCurrency: (currency) => {
    this.currency = currency;
  },
};

const CurrencyContext = createContext({ ...defaultCurrencyContext });

export default CurrencyContext;
