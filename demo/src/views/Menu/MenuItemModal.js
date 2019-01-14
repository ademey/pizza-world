import React from "react";
import { Modal } from "components/Modal";

const MenuItemModal = ({ isOpen }) => (
  <Modal
    isOpen={true}
    title="Menu Item Name"
    onClose={() => {}}
    cancelMessage="Cancel"
    onConfirm={() => {}}
    confirmMessage="Add to Cart"
  >
    Your Order content
  </Modal>
);

export default MenuItemModal;
