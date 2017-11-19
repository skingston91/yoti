import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import moment from 'moment';

const ActivityOption = ({ receipt }) => {
  const time = moment.unix(receipt.transaction['unix-timestamp']);
  return (
    <div className={ classNames('table table-bordered') } >
      <h1> { time.format('YYYY-MM-DD HH:mm') } </h1>
      <div className="icon-receipt-confirmed" />
      <div className="profilePicture icon-user-selfie-ph-small" />
      { receipt.transaction
        && receipt.transaction.attributes
        && receipt.transaction.attributes[0]
        && <h1>{ receipt.transaction.attributes[0]['given-names'] } </h1> }
      <p> { time.format('YYYY-MM-DD HH:mm') } </p>
    </div>
  );
};

ActivityOption.propTypes = {
  receipt: PropTypes.object.isRequired,
};

export default ActivityOption;
