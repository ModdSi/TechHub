import { useState } from "react";
import "../style/SideMenu.css";
import OptionsMenu from "./dropDown";
import { Link } from "react-router-dom";

export default function SideMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      {/* Hamburger Button */}
      <button className="hamburger" onClick={() => setOpen((prev) => !prev)}>
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Side Menu */}
      <div className={`side-menu ${open ? "open" : ""}`}>
        <div className="uul">
          <Link id="lli" to="/">
            HOME
          </Link>
          <Link id="lli" to="/about">
            ABOUT
          </Link>
          <Link id="lli" to="/services">
            SERVICES
          </Link>
          <Link id="lli" to="/community">
            COMMUNITY
          </Link>
          <Link id="lli" to="/learned">
            Learning Track
          </Link>
          <a id="lli" href="https://api-requests-practice.vercel.app">
            Api Task
          </a>
        </div>
      </div>

      {/* Overlay */}
      {open && <div className="overlay" onClick={() => setOpen(false)}></div>}
    </div>
  );
}
