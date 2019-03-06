import React from 'react';
import List from './List';

export default class ExistingLists extends React.Component {
  // static contextTypes = {
  //   store: PropTypes.object.isRequired
  // };

  render() {
    const lists = this.props.lists.map((list) => {
      return <List
              key={list.id}
              {...list}
              />
    });
    return (
      <div id="existing-lists" className="existing-lists">
          {lists}
      </div>
    );
  }
}