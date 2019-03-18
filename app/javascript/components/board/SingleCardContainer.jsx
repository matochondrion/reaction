import React from 'react';
import PropTypes from 'prop-types';
import * as actions from '../../actions/BoardActions';
import SingleCard from './SingleCard';
import Popover from './Popover';

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