import React from "react";
import { BrowserRouter } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.scss";
import "macro-css";
import App from "./App";
import Favorites from "./pages/Favorites";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
