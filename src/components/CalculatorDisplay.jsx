import useCalculator from '../hooks/useCalculator';

function CalculatorDisplay() {
  const { operationDisplay } = useCalculator();
  return (
    <div>
      { operationDisplay }
    </div>
  );
}

export default CalculatorDisplay;
