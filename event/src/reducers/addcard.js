const initialState = {
  card_def: '',
  card_word: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_HIGHLIGHT_TO_CARDDEF':
      return {oldState: state, card_def: action.payload} || state;
    case 'ADD_HIGHLIGHT_TO_CARDWORD':
      return {card_def: action.payload, oldState: state} || state;
    default:
      return state;
  }
};
