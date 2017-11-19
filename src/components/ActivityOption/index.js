import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const ActivityOption = ({ receipt }) => {
  const time = moment.unix(receipt.transaction['unix-timestamp']);
  console.log(receipt);
  return (
    <tbody>
      <tr>
        <td>
          <span className="icon-receipt-confirmed" />
        </td>
        <td>
          <span className="profilePicture icon-user-selfie-ph-small" />
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
  time: PropTypes.string.isRequired,
};

export default ActivityOption;
