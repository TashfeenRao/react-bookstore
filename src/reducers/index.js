import { createStore, combineReducers } from 'redux';
import BookReducer from './Book';

const reducers = combineReducers({
  books: BookReducer,
});

const store = createStore(reducers);

export default store;
