import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Global } from "@emotion/react";
import reset from "./styles/reset";

ReactDOM.render(
  <React.StrictMode>
    <Global styles={reset} />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
