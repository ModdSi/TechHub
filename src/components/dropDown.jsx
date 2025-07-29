import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "../style/dropDown.css";

export default function OptionsMenu() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef();

  // Close menu if you click outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="options-menu" ref={menuRef}>
      <button className="menu-button" onClick={() => setOpen(!open)}>
        ⋮
      </button>

      {open && (
        <div className="dropdown">
          <Link to="/learned" onClick={() => setOpen(false)}>
            Learning Track{" "}
          </Link>
          <a href="https://api-requests-practice.vercel.app">Api Task</a>
        </div>
      )}
    </div>
  );
}
