import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import PropTypes from 'prop-types';
import './styles.scss';

const transitions = {
  fade: {
    transitionName: 'fade',
    transitionAppear: true,
    transitionAppearTimeout: 500,
    transitionEnter: true,
    transitionEnterTimeout: 500,
    transitionLeave: true,
    transitionLeaveTimeout: 500,
  },
};

const TransitionComponent = props =>
  <ReactCSSTransitionGroup { ...transitions[props.transitionsName] }>
    { props.children }
  </ReactCSSTransitionGroup>;

TransitionComponent.propTypes = {
  children: PropTypes.object,
  transitionsName: PropTypes.string.isRequired,
};

export default TransitionComponent;
