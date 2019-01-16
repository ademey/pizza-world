import React from 'react';
import classnames from 'classnames';
import './logo.css';

const Logo = ({ className }) =>
  <div className={classnames("pw-logo", className)}>
    <div className="pw-logo__circle" />
    <div className="pw-logo__wedge" />
    <div className="pw-logo__spin" />
  </div>


export default Logo;