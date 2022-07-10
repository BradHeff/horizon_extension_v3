import React from 'react'
import ReactDOM from 'react-dom'
import App from './views/Options/App'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
//import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { OptionSelect } from './views/Reducer/Reducer';

//const logger = createLogger();
const rootReducer = combineReducers({ OptionSelect });
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware/*, logger*/));
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
); 
