import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Calculatorbtn from './CalculatorBtn';

// eslint-disable-next-line react/prefer-stateless-function
class Buttons extends Component {
  render() {
    const { onclick } = this.props;
    return (
      <>
        <Calculatorbtn onclick={onclick} name="AC" />
        <Calculatorbtn onclick={onclick} name="+/-" />
        <Calculatorbtn onclick={onclick} name="%" />
        <Calculatorbtn onclick={onclick} name="÷" />
        <Calculatorbtn onclick={onclick} name="7" />
        <Calculatorbtn onclick={onclick} name="8" />
        <Calculatorbtn onclick={onclick} name="9" />
        <Calculatorbtn onclick={onclick} name="x" />
        <Calculatorbtn onclick={onclick} name="4" />
        <Calculatorbtn onclick={onclick} name="5" />
        <Calculatorbtn onclick={onclick} name="6" />
        <Calculatorbtn onclick={onclick} name="-" />
        <Calculatorbtn onclick={onclick} name="1" />
        <Calculatorbtn onclick={onclick} name="2" />
        <Calculatorbtn onclick={onclick} name="3" />
        <Calculatorbtn onclick={onclick} name="+" />
        <Calculatorbtn onclick={onclick} name="0" />
        <Calculatorbtn onclick={onclick} name="." />
        <Calculatorbtn onclick={onclick} name="=" />
      </>
    );
  }
}

Buttons.propTypes = {
  onclick: PropTypes.func.isRequired,
};

export default Buttons;
