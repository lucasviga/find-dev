import React from "react";
import { Provider } from "react-redux";
import store from "./store";
// import Map from "./components/Map";
import Routes from "./routes";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "font-awesome/css/font-awesome.css";
import "./styles.css";

const App = () => (
  <Provider store={store}>
    <Routes />
    <ToastContainer autoclose={3000} />
  </Provider>
);
export default App;
