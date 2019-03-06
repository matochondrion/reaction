import React from 'react';
import ListsContainer from './ListsContainer';

class Board extends React.Component {
  render() {
    return (
      <div>
        <header>
          <ul>
            <li id="title">{this.props.board.title}</li>
            <li className="star-icon icon"></li>
            <li className="private private-icon icon">Private</li>
          </ul>
          <div className="menu">
            <i className="more-icon sm-icon"></i>Show Menu</div>
          <div className="subscribed">
            <i className="sub-icon sm-icon"></i>Subscribed</div>
        </header>
        <main>
            <ListsContainer />
        </main>
      </div>
    );
  }
}

export default Board;