import {applyMiddleware, compose, createStore} from "redux";
import reducer from "./reducer.js"

import reduxThunk from "redux-thunk";
/* import thunkMiddleware from "redux-thunk"; */
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancer(applyMiddleware(reduxThunk)));

export default store;
/* const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancer(applyMiddleware(thunkMiddleware)))
export default store; */
