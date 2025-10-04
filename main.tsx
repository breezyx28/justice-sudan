import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
// import "./styles/globals.css";
import "./index.css";

// Set the document direction to RTL for Arabic support
document.documentElement.dir = "rtl";
document.documentElement.lang = "ar";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
