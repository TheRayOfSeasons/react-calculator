import { useContext } from 'react';
import CalculatorContext from '../context/calculator-context';

const useCalculator = () => {
  const values = useContext(CalculatorContext);
  if (!values) {
    throw new Error('Component is not within a CalculatorContext');
  }
  return values;
};

export default useCalculator;
