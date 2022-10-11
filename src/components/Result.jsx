import useCalculator from '../hooks/useCalculator';

function Result() {
  const { result } = useCalculator();
  return (
    <div>
      { result }
    </div>
  );
}

export default Result;
