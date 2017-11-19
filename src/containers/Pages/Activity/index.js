import React from 'react';
import PropTypes from 'prop-types';
import ActivityOption from '../../../components/ActivityOption';
import PopupModel from '../../../components/PopupModal';
import classNames from 'classnames';
import moment from 'moment';

class ActivityPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      popUpOpen: props.popUpOpen || '',
    };
  }

  render() {
    const { receipts } = this.props;
    return (
      <div className={ classNames('container', 'ActivityPage', this.state.popUpOpen ? 'unFocused' : '') } >
        <h2> Activity </h2>
        <h1> Activity </h1>
        <p> See everyone you have an activity with </p>
        <div className="row col-xs-12">
          { receipts
            .sort((a, b) => a.transaction['unix-timestamp'] - b.transaction['unix-timestamp'])
            .map((receipt, index) => {
              const time = moment.unix(receipt.transaction['unix-timestamp']);
              return (
                <ActivityOption
                  key={ index }
                  receipt={ receipt }
                  time={ time }
                  onClick={ (data) => { this.onClick(data); } }
                />
              );
            }
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
