import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import './styles.scss';

const ActivityOption = ({ receipt }) => {
  const time = moment.unix(receipt.transaction['unix-timestamp']);
  return (
    <tbody>
      <tr>
        <td>
          <em className="icon-receipt_confirmed" />
        </td>
        <td>
          <em className="profilePicture icon-user_selfie_ph" />
        </td>
        <td>
          { receipt.type === 'share'
            && receipt.transaction
            && receipt.transaction.attributes
            && receipt.transaction.attributes[0]
            && <p>{ `${ receipt.transaction.attributes[0]['given-names'] } shared` } </p> }
          { receipt.type === 'application'
            && receipt.application
            && receipt.application.name
            && <p>{ receipt.application.name } </p> }
        </td>
        <td>
          <p className="text-right receipt-item-date"> { time.format('HH:MM DD MMMM YYYY') } </p>
        </td>
      </tr>
    </tbody>
  );
};

ActivityOption.propTypes = {
  receipt: PropTypes.object.isRequired,
};

export default ActivityOption;
