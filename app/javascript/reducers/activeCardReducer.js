export default function activeCardReducer(state = undefined, action) {
  if (action.type === 'SET_ACTIVE_CARD_SUCCESS') {
    return action.id;
  } else if (action.type === 'REMOVE_ACTIVE_CARD_SUCESS') {
    return undefined;
  } else {
    return state;
  }
}