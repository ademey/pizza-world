import React, { Component } from "react";
import PropTypes from "prop-types";
import MenuItem from "./MenuItem";
import MenuItemModal from "./MenuItemModal";
import "./menu.css";

class Menu extends Component {
  componentDidMount() {
    const { onFetchMenu } = this.props;
    onFetchMenu();
  }

  render() {
    const { items } = this.props;
    return (
      <div className="menu">
        <div className="menu-categories">
          <div className="menu-category">
            <div className="menu-items">
              {items &&
                items.map(item => <MenuItem key={item.id} data={item} />)}
            </div>
          </div>
        </div>
        <MenuItemModal />
      </div>
    );
  }
}

Menu.propTypes = {
  items: PropTypes.array,
  onFetchMenu: PropTypes.func.isRequired
};

export default Menu;
