import React from 'react';
import PropTypes from 'prop-types';
import { Repeater } from '../Repeater';

const CheckList = ({
  options,
  checked,
  labelRenderer,
  idKey,
  onCheck,
  className
}) => (
  <ul className={className}>
    <Repeater list={options}>
      { (item) => {
        const id = item[idKey];
        return (
          <li key={id}>
            <input 
              id={id}
              type="checkbox"
              checked={checked[id] || false}
              onChange={() => onCheck(id)}
            />
            <label htmlFor={id}>{ labelRenderer(item) }</label>
          </li>
        )}
      }
    </Repeater>
  </ul>
);

CheckList.defaultProps = {
  labelRenderer: (item) => item.name
};

CheckList.propTypes = {
  options: PropTypes.array,
  checked: PropTypes.object.isRequired,
  labelRenderer: PropTypes.func.isRequired,
  idKey: PropTypes.string.isRequired,
  onCheck: PropTypes.func.isRequired,
  className: PropTypes.string
};

export default CheckList;