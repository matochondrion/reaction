import React from 'react';
import ExistingLists from './ExistingLists';
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
          <div id="new-list" className="new-list"><span>Add a list...</span>
              <input type="text" placeholder="Add a list..." />
              <div>
                  <input type="submit" className="button" value="Save" /><i className="x-icon icon"></i>
              </div>
          </div>
      </div>
    );
  }
}