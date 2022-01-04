import React, { Component } from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends Component {
  render() {
    return (
      <div className="calculator-grid">
        <div className="calculator-output" />
        <span className="calculator-btn">AC</span>
        <span className="calculator-btn">+/-</span>
        <span className="calculator-btn">%</span>
        <span className="calculator-btn btn-div">/</span>
        <span className="calculator-btn">7</span>
        <span className="calculator-btn">8</span>
        <span className="calculator-btn">9</span>
        <span className="calculator-btn btn-x">x</span>
        <span className="calculator-btn">4</span>
        <span className="calculator-btn">5</span>
        <span className="calculator-btn">6</span>
        <span className="calculator-btn btn--">-</span>
        <span className="calculator-btn">1</span>
        <span className="calculator-btn">2</span>
        <span className="calculator-btn">3</span>
        <span className="calculator-btn btn-add">+</span>
        <span className="calculator-btn btn-0">0</span>
        <span className="calculator-btn">.</span>
        <span className="calculator-btn btn-equal">=</span>
      </div>
    );
  }
}

export default Calculator;
