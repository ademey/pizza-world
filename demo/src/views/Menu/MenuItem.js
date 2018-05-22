import React from 'react';
import PropTypes from 'prop-types';

const MenuItem = ({ name, description, price, selected, onSelect }) => (
  <div
    className={`menu-item ${selected && 'menu-item--selected'}`}
    onClick={onSelect}
  >
    <h4>{ name }</h4>
    <div className="menu-item__price">
      { price }
    </div>
    { description && <p className="menu-item__description">{ description }</p> }
  </div>
);

MenuItem.propTypes = {
  name: PropTypes.string,
  price: PropTypes.string
};

export default MenuItem;