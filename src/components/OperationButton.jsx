import { useCallback } from 'react';
import PropTypes from 'prop-types';
import useCalculator from '../hooks/useCalculator';

function OperationButton({ value, display }) {
  const { addSymbol } = useCalculator();

  const commit = useCallback(() => {
    addSymbol(value);
  }, [value, addSymbol]);

  return (
    <button type="button" onClick={() => commit()} className="text-center flex flex-row justify-center items-center p-12 border border-black h-[100px] w-[100px]">
      <span className="text-5xl font-bold ">{ display !== '' ? display : value }</span>
    </button>
  );
}

OperationButton.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  display: PropTypes.string,
};

OperationButton.defaultProps = {
  display: '',
};

export default OperationButton;
