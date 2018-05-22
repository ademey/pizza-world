import React from 'react';
import { OptionsSidebarContainer } from 'views/OptionsSidebar';
import MenuCategoryContainer from './MenuCategoryContainer';
import MenuCategoryExpensive from './MenuCategoryExpensive';
import './menu.css';

const Menu = () => (
  <div className="menu">
    <div className="menu-categories">
      <MenuCategoryContainer
        title="Pizza"
        category="pizza"
      />
      {/* <MenuCategoryExpensive
        title="Salads"
        category="salad"
      /> */}
      <MenuCategoryExpensive
        title="Salads"
        category="salad"
      />
    </div>
    <OptionsSidebarContainer />
  </div>
);

export default Menu;