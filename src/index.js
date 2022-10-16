import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./app/App";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/store";
import { Provider } from "react-redux";

import {buttonTypes, storageSizes, shippingPrice} from './mock-resource/mockResource';
import {buttonTypesContext, storageContext, shippingContext} from './context';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <shippingContext.Provider value={shippingPrice}>
      <storageContext.Provider value={storageSizes}>
        <buttonTypesContext.Provider value={buttonTypes}>
          <React.StrictMode>
            <App />
          </React.StrictMode>
        </buttonTypesContext.Provider>
      </storageContext.Provider>
    </shippingContext.Provider>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
