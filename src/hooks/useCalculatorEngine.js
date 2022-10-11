import {
  useCallback, useReducer, useMemo, useState,
} from 'react';

const useCalculatorEngine = () => {
  const [operations, setOperations] = useState([]);
  const [previousEntryType, dispatchPreviousEntryType] = useReducer((state, action) => {
    switch (action.type) {
      case 'number':
        return 'number';
      case 'string':
        return 'symbol'; // + - * /
      default:
        return 'none';
    }
  }, 'none');

  const operationDisplay = useMemo(() => operations.join(' '), [operations]);

  const result = useMemo(() => {
    let value = 0;
    try {
      // eslint-disable-next-line no-eval
      value = eval(operationDisplay);
    } catch (error) {
      value = '';
    }
    return value;
  }, [operationDisplay]);

  const addSymbol = useCallback((symbol) => {
    const entryType = typeof symbol;
    if (entryType === 'string' && previousEntryType === 'symbol') {
      // Replace the previous symbol
      setOperations([...operations.slice(0, operations.length - 1), symbol]);
    } else {
      setOperations([...operations, symbol]);
    }
    dispatchPreviousEntryType({ type: entryType });
  }, [operations, setOperations, previousEntryType, dispatchPreviousEntryType]);

  const clear = useCallback(() => {
    setOperations([]);
  }, [setOperations]);

  return {
    operationDisplay,
    result,
    addSymbol,
    clear,
  };
};

export default useCalculatorEngine;
