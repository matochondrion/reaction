import React from 'react';
import CardsContainer from './CardsContainer';
import ChangeTitleForm from './ChangeTitleForm';
import ToggleableCardForm from './ToggleableCardForm';
import * as actions from '../../actions/BoardActions';
import PropTypes from 'prop-types';

export default class List extends React.Component {
  static contextTypes = {
    store: PropTypes.object.isRequired
  };

  state = {
    editableTitle: false,
    title: this.props.title
  };

  handleTitleClick = (evt) => (
    this.setState({
      editableTitle: true
    })
  );

  handleOnBlur = (evt) => {
    const newTitle = evt.target.value;
    this.context.store.dispatch(actions.updateListTitle(this.props.id, newTitle));
    
    this.setState({
      editableTitle: false,
      title: newTitle
    })
  };

  render() {
    //TODO: add toggleable add-dropdown-active class to list-wrapper
    return (
      <div className="list-wrapper">
          <div className="list-background">
              <div className="list">
                  <a className="more-icon sm-icon" href=""></a>
                  <div>
                      {
                        this.state.editableTitle ?
                        (<ChangeTitleForm
                          title={this.props.title}
                          onBlur={this.handleOnBlur}
                        />) :
                        (<p 
                          onClick={this.handleTitleClick}
                          className="list-title">
                          {this.state.title}
                        </p>)
                      }
                  </div>
                  <div className="add-dropdown add-top">
                      <div className="card"></div><a className="button">Add</a><i className="x-icon icon"></i>
                      <div className="add-options"><span>...</span>
                      </div>
                  </div>

                  <div id="cards-container" data-id={`list-${this.props.id}-cards`}>
                    <CardsContainer
                      listId={this.props.id}
                    />
                  </div>

                  <ToggleableCardForm
                    listId={this.props.id}
                  />

              </div>
          </div>
      </div>
    );
  }
}
