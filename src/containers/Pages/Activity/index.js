import React from 'react';
import PropTypes from 'prop-types';
// import ActivityOption from '../../../components/ActivityOption';
import ActivityTable from '../../../components/ActivityTable';
import PopupModel from '../../../components/PopupModal';
import classNames from 'classnames';
import moment from 'moment';
import groupby from 'lodash.groupby';

class ActivityPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      popUpOpen: props.popUpOpen || '',
    };
  }
  sortGroup(receipts) {
    const groupedReceipts = receipts
      .sort((a, b) => b.transaction['unix-timestamp'] - a.transaction['unix-timestamp'])
      .map((receipt => {
        receipt.date = moment.unix(receipt.transaction['unix-timestamp']).format('DD MMMM YYYY');
        return receipt;
      })
    );
    return groupby(groupedReceipts, 'date');
  }

  render() {
    const { receipts } = this.props;
    const groupedReceipts = this.sortGroup(receipts);

    return (
      <div className={ classNames('ActivityPage', this.state.popUpOpen ? 'unFocused' : '') } >
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
        { this.state.popUpOpen && <PopupModel /> }
      </div>
    );
  }
}

ActivityPage.propTypes = {
  receipts: PropTypes.array.isRequired,
  popUpOpen: PropTypes.bool,
};
export default ActivityPage;
