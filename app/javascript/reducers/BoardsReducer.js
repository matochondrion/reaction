export default function boardsReducer(state = [], action) {
  if (action.type === 'FETCH_BOARDS_SUCCESS') {
    return action.boards;
  } else if (action.type === 'CREATE_BOARD_SUCCESS') {
    const newBoard = action.board;
    newBoard.id = Number(newBoard.id);

    return state.concat(newBoard);
  } else if (action.type === 'FETCH_BOARD_SUCCESS') {
    // coming from dashboard, we have all the boards in our state
    // with no lists or cards
    const excludedBoards = state.filter(board => board.id !== action.board.id);
    const { lists, ...newBoardWithoutLists } = action.board;
    // discarding lists
    // i want all properties of board excep lists property
    // becuase i want that in the lists reducer
    return excludedBoards.concat(newBoardWithoutLists);
  } else {
    return state;
  }
}
