import React from 'react';
import PropTypes from 'prop-types';
import './styles.less';
import Icons from '../../components/Icons/index';

const NavigationBar = (props) => (
  <div className="navigationBar">
  { props.icons.map(icon => (
    <Icons
      key={ icon.name }
      className={ 'navigationIcon' }
      { ...icon }
    />
  )) }
  </div>
);

NavigationBar.propTypes = {
  icons: PropTypes.array,
  link: PropTypes.string,
};

export default NavigationBar;
