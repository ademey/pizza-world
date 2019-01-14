import React from "react";
import PropTypes from "prop-types";

const MenuItem = ({ data, name, description, price, selected, onSelect }) => (
  <div
    className={`menu-item ${selected && "menu-item--selected"}`}
    onClick={onSelect}
  >
    <h4>{data.name}</h4>
    <div className="menu-item__price">{`$${Number(data.price / 100).toFixed(
      2
    )}`}</div>
    {data.ingredients && (
      <p className="menu-item__description">{data.ingredients.join(", ")}</p>
    )}
  </div>
);

MenuItem.propTypes = {
  name: PropTypes.string,
  price: PropTypes.string
};

export default MenuItem;
