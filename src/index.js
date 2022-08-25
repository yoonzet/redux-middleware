import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { applyMiddleware, legacy_createStore } from "redux";
import rootReducer from "./modules";
import { Provider } from "react-redux";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import ReduxThunk from "redux-thunk";

const store = legacy_createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(ReduxThunk, logger)) // logger 를 사용하는 경우, logger가 가장 마지막에 와야합니다.
); // 여러개의 미들웨어를 적용 할 수 있습니다.

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
