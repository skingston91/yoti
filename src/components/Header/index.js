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
    <div className="navbarRight">
      <ConnectionStatus status={ connectionStatus } />
      <Link to="/profile">
        { profilePictureImage &&
          <img
            src={ profilePictureImage }
            className="profilePicture"
            alt="profile"
          />
        }
        { !profilePictureImage && <span className="profilePicture icon-user_selfie_ph" /> }
      </Link>
    </div>
  </nav>;

Header.propTypes = {
  profilePictureImage: PropTypes.string,
  connectionStatus: PropTypes.bool,
};
export default Header;
