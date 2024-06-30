// src/reducers/usersReducer.js

const initialState = {
    users: [],
  };
  
  const usersReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_USER':
        return {
          ...state,
          users: [...state.users, action.payload],
        };
      case 'REMOVE_USER':
        return {
          ...state,
          users: state.users.filter(user => user.id !== action.payload.id),
        };
      default:
        return state;
    }
  };
  
  export default usersReducer;
  