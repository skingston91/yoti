import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const ConnectionStatus = ({ status }) =>
  <div className="connectionStatus">
    { status &&
      <div>
        <div className="icon-connect-on" />
        <p className="connectionStatusText"> Connected</p>
      </div> }
    { !status &&
      <div>
        <div className="icon-connect-off" />
        <p className="connectionStatusText">Not Connected</p>
      </div> }
  </div>;

ConnectionStatus.propTypes = {
  status: PropTypes.bool.isRequired,
};

export default ConnectionStatus;
