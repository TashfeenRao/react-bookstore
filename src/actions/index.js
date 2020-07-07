
const Actions = () => {
  const CREATE_BOOK = 'CREATE_BOOK';
  const REMOVE_BOOK = 'REMOVE_BOOK';

  const createBook = () => {
    return {
      type: CREATE_BOOK,
    }
  }

  const removeBook = () => {
    return {
      type: REMOVE_BOOK,
    }
  }

  return {
    createBook,
    removeBook
  }
}

export default Actions;

