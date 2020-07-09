import Actions from '../actions/index';

const FilterReducer = (state = 'All', action) => {
  switch (action.type) {
    case Actions.CHANGE_FILTER:
      return action.book;
    default:
      return state;
  }
};
export default FilterReducer;
