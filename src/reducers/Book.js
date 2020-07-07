import Actions from '../actions/index';

const BookReducer = (state = [], action) => {
  switch (action.type) {
    case Actions.CREATE_BOOK:
      return [...state, action.book];
    case Actions.REMOVE_BOOK:
      return state.filter(bok => bok.id !== action.id);
    default:
      return state;
  }
};
export default BookReducer;
