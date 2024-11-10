import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "../src/styles/index.scss";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducer"; //le fichier index.js est le premier à être lu dans reducer

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

const rootElement = document.getElementById("root");

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <Provider store={store}>
      <App />
    </Provider>
  );
} else {
  console.error("Élément #root non trouvé dans le DOM");
}
