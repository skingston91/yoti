import React from 'react';
import PropTypes from 'prop-types';
import ActivityTable from '../../../components/ActivityTable';
import classNames from 'classnames';
import moment from 'moment';
import groupby from 'lodash.groupby';

const sortGroup = (receipts) => {
  const groupedReceipts = receipts
    .sort((a, b) => b.transaction['unix-timestamp'] - a.transaction['unix-timestamp'])
    .map((receipt => {
      receipt.date = moment.unix(receipt.transaction['unix-timestamp']).format('DD MMMM YYYY');
      return receipt;
    })
  );
  return groupby(groupedReceipts, 'date');
};

const ActivityPage = ({ receipts }) => {
  const groupedReceipts = sortGroup(receipts);

  return (
    <div className={ classNames('ActivityPage') } >
      <h3> Activity </h3>
      <h2> Activity </h2>
      <p> See everyone you have an activity with </p>
      <div className="row col-xs-12">
        { Object.keys(groupedReceipts)
          .map((keyName, index) => (
            <ActivityTable
              key={ index }
              receiptsGroup={ groupedReceipts[keyName] }
              date={ keyName }
            />)
        ) }
      </div>
    </div>
  );
};

ActivityPage.propTypes = {
  receipts: PropTypes.array.isRequired,
  popUpOpen: PropTypes.bool,
};
export default ActivityPage;
