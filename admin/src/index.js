import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
<<<<<<< HEAD
import { Provider } from "react-redux";
import { store } from "./store";
=======
import { BrowserRouter } from "react-router-dom";
import { store } from "./store";
import { Provider } from "react-redux";
>>>>>>> frontend
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
<<<<<<< HEAD
    <ToastContainer autoClose={10000} />
    <App />
=======
    <BrowserRouter>
      <ToastContainer autoClose={10000} limit={1} />
      <App />
    </BrowserRouter>
>>>>>>> frontend
  </Provider>
);
