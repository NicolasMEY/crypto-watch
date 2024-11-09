import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "../src/styles/index.scss";

const rootElement = document.getElementById("root");

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
} else {
  console.error("Élément #root non trouvé dans le DOM");
}
