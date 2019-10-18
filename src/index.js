import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { createStore, combineReducers } from "redux";
import * as reducers from "./store/reducers";
import { Provider } from "react-redux";

const store = createStore(
  combineReducers(reducers)
  // applyMiddleware(thunk)
  // composeWithDevTools(
  //   applyMiddleware(thunk)
  //   // other store enhancers if any
  // )
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
