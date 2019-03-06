export default function listsReducer(state = [], action) {
  if (action.type === 'FETCH_BOARD_SUCCESS') {
    const lists = action.board.lists.map((list) => {
      // exclude cards
      const { cards, ...restOfList } = list;
      return restOfList;
    });
    return lists;
  }
}