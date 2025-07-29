import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./app/App.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./app/About.jsx";
import Services from "./app/Services.jsx";
import Home from "./app/home.jsx";
import Community from "./app/Community.jsx";
import Learned from "./app/Learned.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="community" element={<Community />} />
          <Route path="learned" element={<Learned />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
