import axios from 'axios';
import * as routes from '../constants/ApiRoutes';

function logError(errorResponse) {
  const response = errorResponse.response;

  if (response && response.data && response.data.error) {
    console.error(`HTTP Error: ${response.data.error}`);
  } else {
    console.error("Error: ", errorResponse);
  }
}

function unwrapData(response) {
  return response.data;
}

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.headers.common['Accept'] = 'application/json';

const apiClient = {
  updateList: function(id, title, callback) {
    return axios.put(`/api/lists/${id}`, { title })
      .then(unwrapData)
      .then(callback)
      .then(logError)
  },
  createList: function(boardId, list, callback) {
    // TODO: extract route urls to constants
    return axios.post(`/api/lists`, {board_id: boardId, list: list})
      .then(unwrapData)
      .then(callback)
      .then(logError)
  },
  getBoard: function(id, callback) {
    return axios.get(`/api/boards/${id}`)
      .then(unwrapData)
      .then(callback)
      .catch(logError);
  },
  getBoards: function(callback) {
    return axios.get(routes.BOARDS_INDEX_URL)
      .then(unwrapData)
      .then(callback)
      .catch(logError);
  },
  createBoard: function(board, callback) {
    return axios.post(routes.CREATE_BOARD_URL, { board })
      .then(unwrapData)
      .then(callback)
      .catch(logError);
  },

  createCard: function(listId, card, callback) {
    return axios.post(routes.CREATE_CARD_URL, {'list_id': listId, 'card': card})
      .then(unwrapData)
      .then(callback)
      .catch(logError);
  },

  getCard: function(cardId, callback) {
    return axios.get(`${routes.CARDS_INDEX_URL}/${cardId}`)
      .then(unwrapData)
      .then(callback)
      .catch(logError);
  },

  updateCard: function(card, callback) {
    console.log({card: {...card}});
    return axios.put(`${routes.CARDS_INDEX_URL}/${card.id}`, {card: {...card}})
      .then(unwrapData)
      .then(callback)
      .catch(logError);
  },
};

export default apiClient;
