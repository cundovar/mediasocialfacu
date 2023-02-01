import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import "./styles/index.scss";
import { Provider } from 'react-redux';

import { BrowserRouter } from "react-router-dom";
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk'
import rootReducer from "./reducers"
import { getUsers } from './actions/users.actions';
// outils de developpement dev tools
import {composeWithDevTools} from 'redux-devtools-extension'
import logger from 'redux-logger'

const store= createStore(
 rootReducer,composeWithDevTools(applyMiddleware(thunk,logger) )
)
store.dispatch(getUsers())
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
    // <React.StrictMode>
    <Provider store={store}>

 <BrowserRouter>
   <App />
  
 </BrowserRouter>

    </Provider>
//  </React.StrictMode>
 
);

