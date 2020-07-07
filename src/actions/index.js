const Actions = () => {
  const CREATE_BOOK = 'CREATE_BOOK';
  const REMOVE_BOOK = 'REMOVE_BOOK';

  const createBook = () => ({
    type: CREATE_BOOK,
  });

  const removeBook = () => ({
    type: REMOVE_BOOK,
  });

  return {
    createBook,
    removeBook,
  };
};

export default Actions;
