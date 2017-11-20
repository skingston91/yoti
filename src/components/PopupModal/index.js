import React from 'react';
import PropTypes from 'prop-types';
import { PortalWithState } from 'react-portal';

const PopupModal = ({ receipt }) =>
  <p>Modal Time</p>;

PopupModal.propTypes = {
  receipt: PropTypes.object.isRequired,
};

export default PopupModal;
