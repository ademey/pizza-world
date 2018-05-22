import React from 'react';
import PropTypes from 'prop-types';

/**
 * @param {object} props
 * @param {string} props.name - Name of this store/restaurant
 * @param {string} props.description - Restaurant description
 * @param {string} props.imageUrl - Path for restaurant image
 */
const StoreHeader = ({ name, description, imageUrl }) => (
  <div className="store-header">
    <div className="store-header__info">
      <h1>{name}</h1>
      <h3>{description}</h3>
    </div>
    <div className="store-header__logo-container">
      <img alt="store-logo" src={imageUrl} />
    </div>
  </div>
);

StoreHeader.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  imageUrl: PropTypes.string
};

export default StoreHeader;
