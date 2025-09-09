import { BrowserRouter, Route, Routes } from "react-router-dom";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./pages/App.tsx";
import Home from "./pages/Home.tsx";
import Rules from "./pages/Rules.tsx";
import EditDeck from "./pages/EditDeck.tsx";
import Deck from "./pages/Deck.tsx";
import CustomDeck from "./pages/CustomDeck.tsx";
import LoginOrSignUp from "./pages/LoginOrSignUp.tsx";
import Login from "./pages/Login.tsx";
import SignUp from "./pages/SignUp.tsx";

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
          <Route path="/loginorsignup" element={<LoginOrSignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
