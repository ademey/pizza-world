import React from 'react';
import PropTypes from 'prop-types';
import { Repeater } from 'components/Repeater';
import { logFunction } from 'utils/log';
import MenuItemContainer from './MenuItemContainer';

const MenuCategory = ({ title, items }) => {
  logFunction(`[render] MenuCategory ${title}`);
  return (
    <div className="menu-category">
      <h3>{ title }</h3>
      <div className="menu-items">
        <Repeater list={items}>
          {(item) => <MenuItemContainer key={item.id} itemData={item} />}
        </Repeater>
      </div>
    </div>
  );
}

MenuCategory.propTypes = {
  title: PropTypes.string,
  items: PropTypes.array
};

export default MenuCategory;