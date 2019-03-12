import React from 'react';
import ExistingLists from './ExistingLists';
import CreateListContainer from './CreateListContainer';
import PropTypes from 'prop-types';


export default class ListsContainer extends React.Component {
  static contextTypes = {
    store: PropTypes.object.isRequired
  };

  render() {
    const lists = this.context.store.getState().lists;
    // Consider: filtering for only this list

    // return
    // <addList />
    // <ExistingLists lists={lists} />


    return (

      <div id="list-container" className="list-container">
          <ExistingLists
            lists={lists}
          />

          <CreateListContainer
            boardId={this.props.boardId}
          />

      </div>
    );
  }
}
