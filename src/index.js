// index.js
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // Import your App component

// Initialize the root only once
const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

// Render the App component
root.render(<App />);
