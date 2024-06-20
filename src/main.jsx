import React from 'react';
import { createRoot } from 'react-dom/client'; // Correct import for createRoot
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';

// Create root using the correct createRoot function
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
