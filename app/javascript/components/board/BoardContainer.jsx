import React from 'react';
import Board from './Board.jsx';
import PropTypes from 'prop-types';
import * as actions from '../../actions/BoardActions';
import SingleCard from './SingleCard';

class BoardContainer extends React.Component {
  static contextTypes = {
    store: PropTypes.object.isRequired
  };

  componentDidMount() {
    const store = this.context.store;
    this.unsubscribe = store.subscribe(() => this.forceUpdate());
    let boardId = Number(this.props.match.params.id);
    store.dispatch(actions.fetchBoard(boardId));
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    // if there is a board, return the board, otherwise return null
    let store = this.context.store;
    let boardId = Number(this.props.match.params.id);
    let board = store.getState().boards.find((board) => {
      return board.id === boardId;
    });
    const activeCard = store.getState().activeCard

    if (board) {
      return (
        <div>
          {activeCard ? <SingleCard id={activeCard.id} /> : null }
          <Board
            board={board}
            boardId={boardId}
          />
        </div>
        );
    } else {
      return null;
    }
    // return (
    //   <div>
    //     {activeCard ? <SingleCard id={activeCard.id} /> : null }
    //     <Board
    //       board={board}
    //       boardId={boardId}
    //     />
    //   </div>
    // );
  }
}

export default BoardContainer;
