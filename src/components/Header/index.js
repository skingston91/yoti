import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ConnectionStatus from '../ConnectionStatus';
import './styles.scss';

const Header = ({ profilePictureImage, connectionStatus }) =>
  <nav className="headerContainer navbar navbar-default navbar-fixed-top" id="top-navbar">
    <div className="navbar-left">
      <Link to="/">
        <div
          className="icon-logo"
        />
      </Link>
    </div>
    <div className="nav navbar-nav navbar-right">
      <ConnectionStatus status={ connectionStatus } />
      <Link to="/profile">
        <img
          src={ profilePictureImage }
          className="icon-user-selfie-ph-small"
          alt="profile"
        />
      </Link>
    </div>
  </nav>;

Header.propTypes = {
  profilePictureImage: PropTypes.string.isRequired,
  connectionStatus: PropTypes.bool.isRequired,
};
export default Header;
