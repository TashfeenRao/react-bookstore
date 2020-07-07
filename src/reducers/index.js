import { createStore } from 'redux';
import BookReducer from './Book';

const initialState = [
  {
    ID: Math.floor(Math.random() * 100),
    title: 'learn redux',
    category: 'Action',
  },
  {
    ID: Math.floor(Math.random() * 100),
    title: 'Imran Khan',
    category: 'Biography',
  },
  {
    ID: Math.floor(Math.random() * 100),
    title: 'world war 2',
    category: 'History',
  },
  {
    ID: Math.floor(Math.random() * 100),
    title: 'wrong turn',
    category: 'Horror',
  },
];

const store = createStore(BookReducer, initialState);

export default store;
