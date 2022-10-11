import Calculator from './components/Calculator';
import CalculatorDisplay from './components/CalculatorDisplay';
import ClearButton from './components/ClearButton';
import OperationButton from './components/OperationButton';
import Result from './components/Result';

function App() {
  return (
    <div className="h-screen w-screen flex flex-row justify-center items-center">
      <div className="text-5xl font-bold w-fit">
        <Calculator>
          <div className="border border-black w-full min-h-[100px]">
            <div className="text-2xl">
              <CalculatorDisplay />
            </div>
            <div className="text-6xl font-bold">
              <Result />
            </div>
          </div>
          <div className="grid grid-cols-4 gap-2 w-fit mt-8">
            <OperationButton value={7} />
            <OperationButton value={8} />
            <OperationButton value={9} />
            <OperationButton value="/" display="÷" />
            <OperationButton value={4} />
            <OperationButton value={5} />
            <OperationButton value={6} />
            <OperationButton value="*" display="×" />
            <OperationButton value={1} />
            <OperationButton value={2} />
            <OperationButton value={3} />
            <OperationButton value="-" />
            <OperationButton value={0} />
            <OperationButton value="" />
            <ClearButton />
            <OperationButton value="+" />
          </div>
        </Calculator>
      </div>
    </div>
  );
}

export default App;
