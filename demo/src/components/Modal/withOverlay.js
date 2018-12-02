import React, { Component } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";

/**
 * withOverlay is a Higher Order Component (HOC) to add a blocker for a modal window.
 * It manages the events related to opening and closing of a a modal.
 * @param {ReactComponent} ModalComponent - Component to display as a modal
 * @return {ReactComponent} Modal component with overlay functionality
 */
const withOverlay = ModalComponent => {
  class Overlay extends Component {
    constructor() {
      super();
      this.handleOnClose = this.handleOnClose.bind(this);
      this.handleClick = this.handleClick.bind(this);
      this.handleKeyup = this.handleKeyup.bind(this);
      this.bindEvents = this.bindEvents.bind(this);
      this.unbindEvents = this.unbindEvents.bind(this);
    }

    /**
     * Add or remove event listeners when the modal become visible.
     */
    componentDidUpdate() {
      if (this.props.isOpen) {
        this.bindEvents();
      } else {
        this.unbindEvents();
      }
    }

    /**
     * Remove any event listeners if the component will be removed.
     */
    componentWillUnmount() {
      this.unbindEvents();
    }

    /**
     * Add key events for exiting the modal
     */
    bindEvents() {
      if (document) document.addEventListener("keyup", this.handleKeyup);
    }

    /**
     * Remove key events
     */
    unbindEvents() {
      if (document) document.removeEventListener("keyup", this.handleKeyup);
    }

    /**
     * Call the onClose prop. The component's container should manage it's `isOpen` state.
     * Any onClose functions called from the modal (the X or maybe a cancel button) will happen
     * here as well as the overlay click and key exits.
     */
    handleOnClose() {
      const { onClose } = this.props;
      if (onClose) onClose();
    }

    /**
     * Handle overlay click event. Checks that the click event comes from the overlay itself,
     * and not any of it's children.
     * @param {Event} event - Click event anywhere on component
     */
    handleClick(event) {
      const { overlayClassName } = this.props;
      // Event.target.className has problems with the SVG close button, so:
      const targetClass = event.target.getAttribute("class");
      // Make sure the element clicked is the actual overlay
      if (targetClass && targetClass.indexOf(overlayClassName) > -1) {
        this.handleOnClose();
      }
    }

    /**
     * Handle key events and exit if the key matches the allowed exit keys.
     * @param {Event} event - Keyboard event
     */
    handleKeyup(event) {
      const { exitOnKey } = this.props;
      /** @see https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key */
      let keyMatch = event.key === exitOnKey;
      if (Array.isArray(exitOnKey)) {
        keyMatch = exitOnKey.find(item => event.key === item);
      }
      if (keyMatch) {
        this.handleOnClose();
      }
    }

    render() {
      const { isOpen, onClose, overlayClassName, ...rest } = this.props;

      if (!isOpen) return null;

      return createPortal(
        <div onClick={this.handleClick} className={overlayClassName}>
          <ModalComponent
            {...rest}
            onClose={onClose ? this.handleOnClose : null}
          />
        </div>,
        document.body
      );
    }
  }

  Overlay.propTypes = {
    isOpen: PropTypes.bool,
    onClose: PropTypes.func,
    overlayClassName: PropTypes.string,
    exitOnKey: PropTypes.oneOfType([PropTypes.string, PropTypes.array])
  };

  Overlay.defaultProps = {
    overlayClassName: "modal-overlay",
    exitOnKey: "Escape"
  };

  return Overlay;
};

export default withOverlay;
