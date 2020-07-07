import { createStore } from 'redux';
import BookReducer from './Book';

const store = createStore(BookReducer);

export default store;
