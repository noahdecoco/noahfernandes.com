import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import Hero from "./components/Hero.tsx";
import WhoThisIsFor from "./components/WhoThisIsFor.tsx";
import Philosophy from "./components/Philosophy.tsx";
import HowItWorks from "./components/HowItWorks.tsx";
import Music from "./components/Music.tsx";
import OfferingsAndEvents from "./components/OfferingsAndEvents.tsx";
import AboutMe from "./components/About.tsx";
import Contact from "./components/Contact.tsx";

const rootElement = document.getElementById("root");

if (!rootElement) {
    throw new Error("Root element not found — check index.html for #root.");
}

ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
        <Hero />
        <WhoThisIsFor />
        <Philosophy />
        <HowItWorks />
        <Music />
        <OfferingsAndEvents />
        <AboutMe />
        <Contact  />


    </React.StrictMode>
);