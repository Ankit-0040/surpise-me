import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // ✅ Ensure App is imported

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
