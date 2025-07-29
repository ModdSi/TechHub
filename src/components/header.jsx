import "../style/FoHe.css";
import logo from "../assets/TH logo.png";
import { Link } from "react-router-dom";
import OptionsMenu from "./dropDown";
import SideMenu from "./SideMenu";

function Header() {
  return (
    <>
      <header>
        <SideMenu />
        <img id="logo" src={logo} />
        <div className="btns">
          <Link to="/" id="buttons">
            HOME
          </Link>
          <Link to="/about" id="buttons">
            ABOUT
          </Link>

          <Link to="/services" id="buttons">
            SERVICES
          </Link>
          <Link to="/community" id="buttons">
            COMMUNITY
          </Link>

          <OptionsMenu />
        </div>
      </header>
      ;
    </>
  );
}

export default Header;
