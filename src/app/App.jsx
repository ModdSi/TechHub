import "../style/App.css";
import "../style/Home.css";

import Home from "./home";
import { useEffect, useState } from "react";
import About from "./About";

import Footer from "../components/footer";
import { Routes, Route } from "react-router-dom";
import Header from "../components/header";
import Services from "./Services";
import Community from "./Community";

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  if (isMobile) {
    return (
      <div
        style={{
          textAlign: "center",
          marginTop: "40vh",
          padding: "20px",
          background: "#333333",
          color: "#fffff",
        }}
      >
        <h1>Phone screens aren't supported yet</h1>
        <p>Please use a larger device.</p>
      </div>
    );
  }

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/community" element={<Community />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
