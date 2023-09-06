import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// 750rem is total width
document.documentElement.style.fontSize = 100 / 750 + "vw";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //<React.StrictMode>
  <App />
  //</React.StrictMode>
);

{
  /* <React.StrictMode>
<App />
</React.StrictMode> */
}
