import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ActivityOption from '../ActivityOption';

const ActivityTable = ({ receiptsGroup, date, onClick }) => (
  <table className={ classNames('table table-bordered') } >
    <thead>
      <tr className="bg-c-16">
        <span> { date } </span>
      </tr>
    </thead>
    { receiptsGroup
      .map((receipt, index) => (
        <ActivityOption
          key={ index }
          receipt={ receipt }
          onClick={ onClick }
        />)
    ) }
  </table>
);

ActivityTable.propTypes = {
  receiptsGroup: PropTypes.object.isRequired,
  date: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ActivityTable;
