import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ActivityOption from '../ActivityOption';
import './styles.scss';

class ActivityTable extends React.Component {
  state = {
    isOpen: true,
  };

  onClick = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    const { receiptsGroup, date } = this.props;
    return (
      <table className={ classNames('table table-bordered') } >
        <thead>
          <tr className="bg-c-16 table-header" onClick={ this.onClick }>
            <th> { date } </th>
          </tr>
        </thead>
        { this.state.isOpen && receiptsGroup
          .map((receipt, index) => (
            <ActivityOption
              key={ index }
              receipt={ receipt }
            />)
        ) }
      </table>
    );
  }
}

ActivityTable.propTypes = {
  receiptsGroup: PropTypes.array.isRequired,
  date: PropTypes.string.isRequired,
};

export default ActivityTable;
