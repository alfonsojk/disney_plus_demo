import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store from "./app/store";
import { Provider } from "react-redux";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      {/*grap the app in the redux store, letting app to gain access to everything in the store */}
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);


