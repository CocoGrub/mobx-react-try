import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from  './App';
import appStore from "./store";

const storeContext = React.createContext()

ReactDOM.render(
  <React.StrictMode>
      <storeContext.Provider value={appStore}>
          <App />
      </storeContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
