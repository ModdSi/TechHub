import "../style/App.css";
import "../style/home.css";

import Home from "./home";
import { useEffect, useState } from "react";
import About from "./About";
import Footer from "../components/footer";
import { Routes, Route, Outlet } from "react-router-dom";
import Header from "../components/header";
import Services from "./Services";
import Community from "./Community";
import Learned from "./Learned";

function App() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
