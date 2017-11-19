import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ActivityOption from '../ActivityOption';
import moment from 'moment';

const ActivityTable = ({ receipts }) => {
  const time = moment.unix(receipt.transaction['unix-timestamp']);
  return (
    <table className={ classNames('table table-bordered') } >
      <thead>
        <tr className="bg-c-16">
          <span> { time.format('YYYY-MM-DD HH:mm') } </span>
        </tr>
      </thead>
      { receipts
        .map((receipt, index) => (
          <ActivityOption
            key={ index }
            receipt={ receipt }
            onClick={ (data) => { this.onClick(data); } }
          />)
      ) }
    </table>
  );
};

ActivityTable.propTypes = {
  receipts: PropTypes.object.isRequired,
  time: PropTypes.string.isRequired,
};

export default ActivityTable;
