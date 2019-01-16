import React from "react";
import { Modal } from "components/Modal";

const MenuItemModal = ({ isOpen, menuItem, onCancel, onAddToCart }) => (
  <Modal
    isOpen={isOpen}
    title={menuItem.name}
    onClose={onCancel}
    cancelMessage="Cancel"
    onConfirm={() => onAddToCart(menuItem.id)}
    confirmMessage={`Add to Cart $${menuItem.price && Number(menuItem.price / 100).toFixed(2)}`}
  >
    <p>${menuItem.price && Number(menuItem.price / 100).toFixed(2)}</p>
    {menuItem.ingredients && menuItem.ingredients.join(", ")}
  </Modal>
);

export default MenuItemModal;
