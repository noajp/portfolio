import React from "react";
import ReactDOM from "react-dom/client";
import "./globals.css";

export function App() {
  return (
    <div>
      <h1>Hello, App Component!</h1>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);