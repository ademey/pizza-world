import React from "react";
import { Menu } from "views/Menu";
import StoreHeader from "./StoreHeader";

const Store = () => (
  <div className="pw-store-view">
    <StoreHeader />
    <Menu />
  </div>
);

export default Store;
