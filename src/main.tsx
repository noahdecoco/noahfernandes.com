import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import HomePage from "./pages/home/HomePage.tsx";


const rootElement = document.getElementById("root");

if (!rootElement) {
    throw new Error("Root element not found — check index.html for #root.");
}

ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
        <HomePage/>
    </React.StrictMode>
);