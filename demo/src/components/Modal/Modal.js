import React from "react";
import PropTypes from "prop-types";
import withOverlay from "./withOverlay";
import "./modal.css";

const Modal = ({
  title,
  children,
  onClose,
  confirmMessage,
  cancelMessage,
  onConfirm
}) => (
  <div className="modal-wrapper">
    <div className="modal">
      {onClose && (
        <button onClick={onClose} className="modal__close-btn">
          X
        </button>
      )}
      <h1 className="modal__title">{title}</h1>
      <div className="modal__body">{children}</div>
      <div className="modal__footer">
        {onConfirm && <button onClick={onConfirm}>{confirmMessage}</button>}
        {cancelMessage && <button onClick={onClose}>{cancelMessage}</button>}
      </div>
    </div>
  </div>
);

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func
};

export default withOverlay(Modal);
