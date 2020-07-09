import Actions from '../actions/index';
import initialState from './InitialState';

const BookReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.CREATE_BOOK:
      return [...state, action.book];
    case Actions.REMOVE_BOOK:
      return [...state].filter(bok => bok.ID !== action.book.ID);
    default:
      return state;
  }
};
export default BookReducer;
