export default function listsReducer(state = [], action) {
  if (action.type === 'FETCH_BOARD_SUCCESS') {
    const lists = action.board.lists.map((list) => {
      // exclude cards, bc we have a cards reducer
      const { cards, ...restOfList } = list;
      return restOfList;
    });
    // return the state's current list, concatated with this board's list
    // but with no duplicate lists
    // so that we cache prior requests
    const filteredLists = state.filter((list) => {
      return list.board_id !== action.board.id;
    });
    return filteredLists.concat(lists);
  } else {
    return state;
  }
}