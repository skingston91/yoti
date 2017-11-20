import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import moment from 'moment';

const PopupModal = ({ receipt, closePortal }) => {
  const time = moment.unix(receipt.transaction['unix-timestamp']);
  return (
    <div className="overlay app-overlay">
      <div className="modal-content popUpModal">
        <span className="closeIcon" onClick={ closePortal }> X </span>
        { receipt.type !== 'share' &&
          <div className="bg-color modal-header">
            <span className="bg-logo" />
          </div>
        }
        <div className="modal-body">
          { receipt.type === 'share' &&
            <div className="selfie">
              { receipt.transaction &&
                receipt.transaction.attributes &&
                receipt.transaction.attributes.selfie &&
                <img
                  src={ receipt.transaction.attributes.selfie }
                  className="selfiePicture"
                  alt="selfie"
                />
              }
              { !receipt.transaction &&
                !receipt.transaction.attributes &&
                !receipt.transaction.attributes.selfie && <span className="selfiePicture icon-user_selfie_ph" />
              }
            </div>
          }
        </div>
        { receipt.type !== 'application' && <p> Yoti Shared </p> }
        { receipt.type === 'application' &&
          receipt.application &&
          receipt.application.name &&
          <p> { `${ receipt.application.name } viewed this information about you` } </p>
        }
        <p className="text-centre receipt-item-date"> { `at ${ time.format('HH:MM DD MMMM YYYY') }` } </p>
      </div>
    </div>
  );
};

/*
{ receipt.transaction &&
  receipt.transaction.attributes &&
  receipt.transaction.attributes
  .map((attribute, index) => <p key={ index }> `${ attribute } ` </p>)
}
*/

PopupModal.propTypes = {
  receipt: PropTypes.object.isRequired,
  closePortal: PropTypes.func.isRequired,
};

export default PopupModal;
