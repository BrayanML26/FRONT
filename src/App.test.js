import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux'; // Importa createStore de Redux
import rootReducer from './reducers'; // Asume que tienes un rootReducer definido

import App from './App';

// Define un store mínimo para las pruebas
const store = createStore(rootReducer); // Ajusta según tu configuración de reducers

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Provider store={store}><App /></Provider>, div);
});
