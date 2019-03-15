// TODO: update file name to CardsReducer.js

export default function cardsReducer(state = [], action) {
  if (action.type === 'FETCH_BOARD_SUCCESS') {
    // iterate over all lists and return single array of cards
    const cards = action.board.lists.reduce((acc, list) => {
      return acc.concat(list.cards);
    }, []);
    return cards;
  } else if (action.type === 'CREATE_CARD_SUCCESS') {
      return state.concat(action.card);
  } else if (action.type === 'UPDATE_CARD_SUCCESS') {
    return state.map((card) => {
      if (card.id === action.card.id) {
        return Object.assign({}, card, {...action.card});
      } else {
        return card;
      }
    });
  } else if (action.type === 'FETCH_CARD_SUCCESS') {
    return state.map((card) => {
      if (card.id === action.card.id) {
        return action.card;
      } else {
        return card;
      }
    });
  } else if (action.type === 'DELETE_CARD_SUCCESS') {
    return state.filter(card => card.id !== action.cardId);
  } else if (action.type === 'CREATE_COMMENT_SUCCESS') {
    return state.map((card) => {
      if (card.id === action.comment.card_id) {
        comments = card.comments.filter(comment => comment.id !== action.comment.id);

        return Object.assign({}, card, {
          comment: comments.concat(action.comment),
        });
      } else {
        return card;
      }
    });
  } else {
    return state;
  }
}
