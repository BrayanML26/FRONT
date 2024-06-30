// reducers/index.js
import { combineReducers } from 'redux';
import booksReducer from './booksReducer'; // Asume que tienes un reducer para libros
import usersReducer from './usersReducer'; // Asume que tienes un reducer para usuarios

const rootReducer = combineReducers({
  books: booksReducer,
  users: usersReducer,
  // Agrega más reducers aquí según sea necesario
});

export default rootReducer;
