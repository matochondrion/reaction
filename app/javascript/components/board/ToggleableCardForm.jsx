import React from 'react';
import * as actions from '../../actions/BoardActions';
import PropTypes from 'prop-types';

export default class ToggleableCardForm extends React.Component {
  state = {
    cardFormOpen: false,
    
  }

  static contextTypes = {
    store: PropTypes.object.isRequired
  };

  onClickAddCard = () => {
    this.setState({cardFormOpen: true});
  }

  handleAddClick = (evt) => {
    evt.preventDefault()
    this.setState({cardFormOpen: false});

    const listId = this.props.listId;
    const newTitle = 
    this.context.store.dispatch(actions.createCard(listId, {''}));
  }

  render() {

    const addFormClass = this.state.cardFormOpen ? "add-dropdown add-dropdown-active active-card" : "add-dropdown add-bottom add-bottom";
    const addButtonClass = this.state.cardFormOpen ? "add-dropdown-active add-card-toggle" : "add-card-toggle";

    return (
      <div>
        <div className={addFormClass}>
          <div className="card">
            <div className="card-info"></div>
            <textarea name="add-card"></textarea>
            <div className="members"></div>
          </div>
          <a 
            className="button"
            onClick={this.handleAddClick}
          >Add</a>
          <i className="x-icon icon"></i>
          <div className="add-options">
            <span>...</span>
          </div>
        </div>
        <div className={addButtonClass}
          data-position="bottom"
          onClick={this.onClickAddCard}>
        Add a card...
        </div>
      </div>
    )
    }
}