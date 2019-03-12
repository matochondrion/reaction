import React from 'react';
import * as actions from '../../actions/BoardActions';
import PropTypes from 'prop-types';

export default class List extends React.Component {
  state = {
    cardFormOpen: false,
  }

  onClickAddCard = () => {
    this.setState({cardFormOpen: true});
  }

  render() {

    if (this.state.cardFormOpen) {
      return (
        <div class="add-dropdown add-bottom active-card">
          <div class="card"><div class="card-info"></div><textarea name="add-card"></textarea><div class="members"></div></div>
          <a class="button">Add</a><i class="x-icon icon"></i>
          <div class="add-options"><span>...</span>
        </div>
      </div>
      )
    } else {
      return (
        <div className="add-card-toggle"
          data-position="bottom"
          onClick={this.onClickAddCard}>
        Add a card...
        </div>
    )
    }
  }
}
