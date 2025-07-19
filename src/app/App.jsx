import "../style/App.css";
import Home from "./home";
import { useEffect, useState } from "react";

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
      <div style={{ textAlign: "center", marginTop: "40vh", padding: "20px" }}>
        <h1>Phone screens aren't supported yet</h1>
        <p>Please use a larger device.</p>
      </div>
    );
  }

  return (
    <>
      <Home />
    </>
  );
}

export default App;
