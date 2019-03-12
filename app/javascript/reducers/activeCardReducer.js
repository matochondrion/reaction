export default function activeCardReducer(state = undefined, action) {
  if (action.type === 'SET_ACTIVE_CARD_SUCCESS') {
    return action.id;
  } else {
    return state;
  }
}