import React from "react";
import {createRoot} from "react-dom";
import App from "./App.jsx";
const root = document.createElement("div");
root.setAttribute("id", "root");
document.body.appendChild(root);
const rootApp = createRoot(root);
rootApp.render(<App />);