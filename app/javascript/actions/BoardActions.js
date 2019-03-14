import apiClient from '../lib/ApiClient';
import * as types from '../constants/ActionTypes';

export function fetchBoardsRequest() {
  return { type: types.FETCH_BOARDS_REQUEST };
}

export function fetchBoardSuccess(board) {
  return { type: types.FETCH_BOARD_SUCCESS, board };
}

export function fetchBoardsSuccess(boards) {
  return { type: types.FETCH_BOARDS_SUCCESS, boards };
}

export function fetchBoardRequest() {
  return {type: types.FETCH_BOARD_REQUEST };
}

export function createBoardRequest() {
  return { type: types.CREATE_BOARD_REQUEST };
}

export function createBoardSuccess(board) {
  return { type: types.CREATE_BOARD_SUCCESS, board: board };
}

export function updateListTitleRequest() {
  // TODO: should be UPDATE_LIST_REQUEST
  return { type: types.LIST_TITLE_REQUEST };
}

export function updateListTitleSuccess(list) {
  // TODO: should be UPDATE_LIST_SUCCESS
  return { type: types.LIST_TITLE_SUCCESS, list: list };
}

export function createListRequest() {
  return { type: types.CREATE_LIST_REQUEST };
}

export function createListSuccess(list) {
  return { type: types.CREATE_LIST_SUCCESS, list: list};
}

export function createCardRequest() {
  return { type: types.CREATE_CARD_REQUEST };
}

export function createCardSuccess(card) {
  return { type: types.CREATE_CARD_SUCCESS, card: card }
}

export function setActiveCardSuccess(id) {
  return { type: types.SET_ACTIVE_CARD_SUCCESS, id: id}
}

export function removeActiveCardSucess() {
  return { type: types.REMOVE_ACTIVE_CARD_SUCCESS }
}

export function fetchCardRequest() {
  return { type: types.FETCH_CARD_REQUEST };
}

export function fetchCardSuccess(card) {
  return { type: types.FETCH_CARD_SUCCESS, card: card };
}

export function updateListTitle(id, newTitle) {
  return function(dispatch) {
    dispatch(updateListTitleRequest());
    apiClient.updateList(id, newTitle, (list) => {
      dispatch(updateListTitleSuccess(list))
    });
  }
}

export function fetchBoards() {
  return function(dispatch) {
    dispatch(fetchBoardsRequest());
    apiClient.getBoards(boards => dispatch(fetchBoardsSuccess(boards)));
  };
}

export function fetchBoard(id) {
  return function(dispatch) {
    dispatch(fetchBoardRequest());
    apiClient.getBoard(id, (board) => {
      dispatch(fetchBoardSuccess(board))
    });
  }
}

export function createBoard(board, callback) {
  return function(dispatch) {
    dispatch(createBoardRequest());
    apiClient.createBoard(board, newBoard => {
      dispatch(createBoardSuccess(newBoard))

      if (callback) { callback(newBoard); }
    })
  }
}

export function createList(boardId, list, callback) {
  return function(dispatch) {
    dispatch(createListRequest());
    apiClient.createList(boardId, list, (newList) => {

      dispatch(createListSuccess(newList))

      if (callback) { callback(newList); }
    });
  }
}

export function createCard(listId, card, callback) {
  return function(dispatch) {
    dispatch(createCardRequest());
    apiClient.createCard(listId, card, (newCard) => {
      dispatch(createCardSuccess(newCard));

      if (callback) { callback(newCard) }
    });
  }
}

export function setActiveCard(cardId) {
  return function(dispatch) {
    dispatch(setActiveCardSuccess(cardId));
  }
}

export function removeActiveCard() {
  return function(dispatch) {
    dispatch(removeActiveCardSucess());
  }
}

export function fetchCard(cardId, callback) {
  return function(dispatch) {
    dispatch(fetchCardRequest());
    apiClient.getCard(cardId, (card) => {
      dispatch(fetchCardSuccess(card));

      if (callback) { callback(card) }
    })
  }
}
