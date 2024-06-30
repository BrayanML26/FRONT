// src/reducers/booksReducer.js

const initialState = {
    books: [],
  };
  
  const booksReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_BOOK':
        return {
          ...state,
          books: [...state.books, action.payload],
        };
      case 'REMOVE_BOOK':
        return {
          ...state,
          books: state.books.filter(book => book.id !== action.payload.id),
        };
      default:
        return state;
    }
  };
  
  export default booksReducer;
  