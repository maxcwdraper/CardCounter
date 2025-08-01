import { BrowserRouter, Route, Routes } from "react-router-dom";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./pages/App.tsx";
import Home from "./pages/Home.tsx";
import Rules from "./pages/Rules.tsx";
import EditDeck from "./pages/EditDeck.tsx";
import Deck from "./pages/Deck.tsx";
import CustomDeck from "./pages/CustomDeck.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="/deck" element={<Deck />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/edit" element={<EditDeck />} />
          <Route path="/customdeck" element={<CustomDeck />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
