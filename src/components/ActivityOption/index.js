import React from 'react';
import PopupModal from '../PopupModal';
import ReceiptTableBody from '../ReceiptTableBody';
import PropTypes from 'prop-types';
import { PortalWithState } from 'react-portal';

const ActivityOption = ({ receipt }) => (
  <PortalWithState closeOnOutsideClick closeOnEsc>
    { ({ openPortal, closePortal, portal }) => [
      <ReceiptTableBody key="table row" receipt={ receipt } onClick={ openPortal } />,
      portal(
        <div>
          <PopupModal receipt={ receipt } />
          <p><button onClick={ closePortal }>Close me!</button></p>
        </div>
      ),
    ] }
  </PortalWithState>
);

ActivityOption.propTypes = {
  receipt: PropTypes.object.isRequired,
};

export default ActivityOption;
