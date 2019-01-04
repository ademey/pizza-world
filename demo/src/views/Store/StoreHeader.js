import React from "react";
import PropTypes from "prop-types";
import "./store-header.css";

/**
 * @param {object} props
 * @param {string} props.name - Name of this store/restaurant
 * @param {string} props.description - Restaurant description
 * @param {string} props.imageUrl - Path for restaurant image
 */
const StoreHeader = ({ name, description, imageUrl }) => (
  <div className="pw-store-header">
    <div className="pw-store-header__title">
      <h1>Pizza World</h1>
    </div>
  </div>
);

StoreHeader.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  imageUrl: PropTypes.string
};

export default StoreHeader;
