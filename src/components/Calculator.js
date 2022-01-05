import { useState } from 'react';
import calculate from '../logic/calculate';
import Buttons from './Buttons';

const Calculator = () => {
  const [calculation, setCalculation] = useState({
    total: '',
    next: '',
    operation: '',
  });

  const { total, next, operation } = calculation;

  const handleOnClick = (e) => {
    setCalculation((prevState) => calculate(prevState, e.target.textContent));
  };
  return (
    <div className="calculator-grid">
      <div className="calculator-output">
        {total}
        {' '}
        {operation}
        {' '}
        {next}
      </div>
      <Buttons onclick={handleOnClick} />
    </div>
  );
};

export default Calculator;
