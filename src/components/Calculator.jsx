import PropTypes from 'prop-types';
import CalculatorContext from '../context/calculator-context';
import useCalculatorEngine from '../hooks/useCalculatorEngine';

function Calculator({ children }) {
  const engine = useCalculatorEngine();
  return (
    <CalculatorContext.Provider value={engine}>
      { children }
    </CalculatorContext.Provider>
  );
}

Calculator.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Calculator;
