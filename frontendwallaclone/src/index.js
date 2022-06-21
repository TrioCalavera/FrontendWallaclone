import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import "../src/css/bootstrap.min.css";
import "../src/css/style.css";
import "../src/fonts/font-awesome/css/font-awesome.min.css";
// import "../src/images/cta-background.jpg";
// import "../src/images/subscription-back.jpg";
// import "../src/images/hero.jpg";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
