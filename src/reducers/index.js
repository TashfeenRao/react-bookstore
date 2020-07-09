import { createStore, combineReducers } from 'redux';
import BookReducer from './Book';
import FilterReducer from './Filter';

const reducers = combineReducers({
  books: BookReducer,
  filters: FilterReducer,
});

const store = createStore(reducers);

export default store;
