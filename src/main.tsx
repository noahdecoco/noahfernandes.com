import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import OnePage from "./components/OnePage.tsx";


const rootElement = document.getElementById("root");

if (!rootElement) {
    throw new Error("Root element not found — check index.html for #root.");
}

ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
        <OnePage/>
    </React.StrictMode>
);