import React from 'react';
import StoreHeaderContainer from './StoreHeaderContainer';
import { Menu } from 'views/Menu';
import './store.css';

/**
 * The Store component is the main view of this demo.
 */
const Store = () => (
  <div>
    <StoreHeaderContainer />
    <Menu />
  </div>
);


export default Store;
