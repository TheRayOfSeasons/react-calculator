import useCalculator from '../hooks/useCalculator';

function ClearButton() {
  const { clear } = useCalculator();
  return (
    <button type="button" onClick={() => clear()} className="text-center flex flex-row justify-center items-center p-12 border border-black h-[100px] w-[100px]">
      <span className="text-5xl font-bold ">CE</span>
    </button>
  );
}

export default ClearButton;
