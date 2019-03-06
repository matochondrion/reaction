export default function cardsReducer(state = [], action) {
  if (action.type === 'FETCH_BOARD_SUCCESS') {
    // iterate over all lists and return single array of cards
    const cards = action.board.lists.reduce((acc, list) => {
      return acc.concat(list.cards);
    }, []);
    return cards;
  }
}
