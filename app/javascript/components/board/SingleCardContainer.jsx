import React from 'react';
import PropTypes from 'prop-types';
import * as actions from '../../actions/BoardActions';
import SingleCard from './SingleCard';
import Popover from './Popover';

export default class SingleCardContainer extends React.Component {
  state = {
    popover: {
      visible: false,
      attachedTo: null,
      type: null
    },
  }
  render() {
    return (
      <div>
        <SingleCard id={this.props.activeCard} />
        <Popover {...this.state.popover}>
          {/*this.popoverChildren()*/}
        </Popover>
      </div>
    );
  }
}