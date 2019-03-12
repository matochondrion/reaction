import { createStore as cs, applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk';

import boardsReducer from '../reducers/BoardsReducer';
import listsReducer from '../reducers/ListsReducer';
import cardsReducer from '../reducers/cardsReducer';
import activeCardReducer from '../reducers/activeCardReducer';

function reducer(state = {}, action) {
  return {
    boards: boardsReducer(state.boards, action),
    lists: listsReducer(state.lists, action),
    cards: cardsReducer(state.cards, action),
    activeCard: activeCardReducer(state.activeCard, action)
  };
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export function createStore(initialState = {}) {
  return cs(reducer, initialState, composeEnhancers(applyMiddleware(ReduxThunk)));
}
