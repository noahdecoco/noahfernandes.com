import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import JourneysPage from "./pages/journeys/JourneysPage.tsx";

const rootElement = document.getElementById("root");

if (!rootElement) {
    throw new Error("Root element not found — check journeys/index.html for #root.");
}

ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
        <JourneysPage/>
    </React.StrictMode>
);
