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
