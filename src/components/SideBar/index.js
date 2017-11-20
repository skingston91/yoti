import React from 'react';
import PropTypes from 'prop-types';
import SideBarOption from './SideBarOption';

const SideBarOptions = [{
  text: 'Activity',
  className: 'icon-activity',
}];

class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: props.selected || '',
    };
  }
  onClick(name) {
    this.setState({ selected: name });
  }
  render() {
    return (
      <div className="SideBar sidebar-open" id="yoti-menu-sidebar" >
        { SideBarOptions.map((option, index) => (
          <SideBarOption
            key={ index }
            text={ option.text }
            className={ option.className }
            selected={ this.state.selected === option.text }
            onClick={ () => { this.onClick(option.text); } }
          />
          ))
        }
      </div>
    );
  }
}

SideBar.propTypes = {
  selected: PropTypes.string,
};

export default SideBar;
