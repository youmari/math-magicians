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
    <div className="cal">
      <h2>Let&apos;s do some math!</h2>
      <div className="calculator-grid">
        <div data-testid="total" className="calculator-output">
          {total}
          {' '}
          {operation}
          {' '}
          {next}
        </div>
        <Buttons onclick={handleOnClick} />
      </div>
    </div>
  );
};

export default Calculator;
