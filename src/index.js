import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import App from  './App';
import appStore from "./store";

export const StoreContext = React.createContext('')

ReactDOM.render(
  <React.StrictMode>
      <StoreContext.Provider value={appStore}>
          <App />
      </StoreContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
