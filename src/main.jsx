import ReactDOM from "react-dom/client";
// import React from "react";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./redux/config/store.js";
import GlobalStyle from "./GlobalStyle.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <Provider store={store}>
    <App />
    <GlobalStyle />
  </Provider>
  // </React.StrictMode>
);
