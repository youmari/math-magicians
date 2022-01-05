import React, { Component } from 'react';
import calculate from '../logic/calculate';
import Buttons from './Buttons';

// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numbersAndSymbolys: {
        total: '',
        next: '',
        operation: '',
      },
    };

    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick(e) {
    const { numbersAndSymbolys } = this.state;
    this.setState({
      numbersAndSymbolys: calculate(numbersAndSymbolys, e.target.textContent),
    });
  }

  render() {
    const { numbersAndSymbolys: { next, total, operation } } = this.state;
    return (
      <div className="calculator-grid">
        <div className="calculator-output">
          {total}
          {' '}
          {operation}
          {' '}
          {next}
        </div>
        <Buttons onclick={this.handleOnClick} />
      </div>
    );
  }
}

export default Calculator;
