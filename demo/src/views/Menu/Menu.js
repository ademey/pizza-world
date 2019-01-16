import React, { Component } from "react";
import PropTypes from "prop-types";
import classnames from 'classnames';
import MenuItem from "./MenuItem";
import MenuItemModal from "./MenuItemModalContainer";
import Cart from './CartContainer';
import "./menu.css";

class Menu extends Component {
  componentDidMount() {
    const { onFetchMenu } = this.props;
    onFetchMenu();
  }

  render() {
    const { items, onSelectItem, selectedItem, cartCount } = this.props;
    return (
      <div className={classnames("menu", {
        'menu--cart-open': cartCount > 0
      })}>
        <div className="menu-categories">
          <div className="menu-category">
            <div className="menu-items">
              {items &&
                items.map(item => (
                  <MenuItem
                    key={item.id}
                    data={item}
                    selected={selectedItem && selectedItem.id === item.id}
                    onSelect={onSelectItem}
                  />
                ))}
            </div>
          </div>
        </div>
        {!!selectedItem && <MenuItemModal />}
        {cartCount > 0 && <Cart />}
      </div>
    );
  }
}

Menu.propTypes = {
  items: PropTypes.array,
  onFetchMenu: PropTypes.func.isRequired,
  onSelectItem: PropTypes.func.isRequired
};

export default Menu;
