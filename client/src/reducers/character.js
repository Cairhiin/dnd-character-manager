const character = (state = {}, action) => {
  switch(action.type) {
    case 'RETURN_ALL_CHARACTERS':
      return Object.assign({}, state);
    case 'CHARACTERS_LIST_ADD':
      return Object.assign({}, action.payload.response);
    default:
      return state;
  }
}

export default character;
