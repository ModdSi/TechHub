import "../style/FoHe.css";

function Footer() {
  return (
    <>
      <footer>
        <div>
          <button id="buttons">ABOUT</button>
          <button id="buttons">COURSES</button>
          <button id="buttons">CONTACT</button>
        </div>
        <p
          style={{
            color: "#333333",
            fontFamily: "LamaSans",
            fontWeight: "bold",
            fontSize: "larger",
            margin: "30px",
          }}
        >
          © 2025 Tech Hub
        </p>
      </footer>
    </>
  );
}

export default Footer;
