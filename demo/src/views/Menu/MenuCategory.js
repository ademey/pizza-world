import React from "react";
import PropTypes from "prop-types";
import { logFunction } from "utils/log";
import MenuItemContainer from "./MenuItemContainer";

const MenuCategory = ({ title, items }) => {
  logFunction(`[render] MenuCategory ${title}`);
  return (
    <div className="menu-category">
      <h3>{title}</h3>
      <div className="menu-items">
        {items.map(item => (
          <MenuItemContainer key={item.id} itemData={item} />
        ))}
      </div>
    </div>
  );
};

MenuCategory.propTypes = {
  title: PropTypes.string,
  items: PropTypes.array
};

export default MenuCategory;
