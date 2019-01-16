import React from 'react';
import './spinner.css';

const Spinner = ({ color }) =>
  <div className="pw-spinner" />

Spinner.defaultProps = {
  color: '#fff'
}

export default Spinner;