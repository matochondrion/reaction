import React from 'react';
import PropTypes from 'prop-types';
import * as actions from '../../actions/BoardActions';
import SingleCard from './SingleCard';
import Popover from './Popover';
import DueDateForm from './DueDateForm';

export default class SingleCardContainer extends React.Component {
  state = {
    popover: {
      type: null,
      attachedTo: null,
      visible: false,
    },
  };

  popoverChildren = () => {
    if (this.state.popover.visible && this.state.popover.type) {
      switch (this.state.popover.type) {
        case 'due-date':
          return (
            <DueDateForm />
          );
      }
    }
  };

  render() {
    return (
      <div>
        <SingleCard id={this.props.activeCard} />
        <Popover { ...this.state.popover }>
          {this.popoverChildren()}
        </Popover>
      </div>
    );
  }
}