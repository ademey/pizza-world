import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import CheckListContainer from './CheckListContainer';
import { logFunction } from 'utils/log';
import './optionsSidebar.css';

const renderLabel = (item) => (
  <Fragment>
    {item.name}
    <span className="options-item__price">
      {item.price_monetary_fields.display_string}
    </span>
  </Fragment>
);

const OptionsSidebar = ({ name, price, optionsPrice, total, isOpen }) => {
  if (!isOpen) return null;
  return (
    <div className="options-sidebar">
      <h3>{ name }</h3>
      <CheckListContainer
        className="options-checklist"
        labelKey="name"
        idKey="id"
        labelRenderer={renderLabel}
      />
      <div className="options-sidebar__subtotal">
        Subtotal:
        <span className="options-item__price">{ price }</span>
      </div>
      <div className="options-sidebar__extras">
        Extras:
        <span className="options-item__price">{ optionsPrice }</span>
      </div>
      <div className="options-sidebar__total">
        Total:
        <span className="options-item__price">{ total }</span>
      </div>
    </div>
  );
};

OptionsSidebar.propTypes = {
  name: PropTypes.string,
  isOpen: PropTypes.bool
};

export default OptionsSidebar;
