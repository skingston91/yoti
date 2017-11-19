import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const SideBarOption = ({ text, className, selected }) =>
  <div className={ classnames('SideBarOption', selected ? 'SideBarOptionSelected' : '') } >
    <div className={ className } />
    <h3>{ text } </h3>
  </div>;

SideBarOption.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
};

export default SideBarOption;