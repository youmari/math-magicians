import React, { Component } from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prefer-stateless-function
class Calculatorbtn extends Component {
  render() {
    const { name, onclick } = this.props;
    let classes = 'calculator-btn btn-';
    if (name === '0') classes += '0';
    if (name === '÷') classes += 'div';
    if (name === 'x') classes += 'x';
    if (name === '-') classes += '-';
    if (name === '+') classes += 'add';
    if (name === '=') classes += 'equal';
    return (
      <>
        <button type="button" onClick={onclick} className={classes}>{name}</button>
      </>
    );
  }
}

Calculatorbtn.propTypes = {
  name: PropTypes.string.isRequired,
  onclick: PropTypes.func.isRequired,
};

export default Calculatorbtn;
