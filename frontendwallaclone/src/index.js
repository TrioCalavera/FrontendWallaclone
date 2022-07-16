import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import storage from "./utils/storage";
import { setAuthorizationHeader } from "./api/client";
import { BrowserRouter as Router } from "react-router-dom";

import "../src/css/bootstrap.min.css";
import "../src/css/style.css";
import "../src/fonts/font-awesome/css/font-awesome.min.css";

const accessToken = storage.get('auth');
setAuthorizationHeader(accessToken);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
    <App isInitiallyLogged={!!accessToken} />
    </Router>
  </React.StrictMode>
);
