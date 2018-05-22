import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Repeater = ({ list, children }) => (
  <Fragment>
    { list && list.length && list.map(item => children(item)) }
  </Fragment>
);

Repeater.defaultProps = {}

Repeater.propTypes = {
  list: PropTypes.array.isRequired,
  children: PropTypes.func.isRequired
};

export default Repeater;
