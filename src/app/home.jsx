import { useState } from "react";
import logo from "../assets/TH logo.png";
import squares from "../assets/squares.png";
import comunity from "../assets/comunity.png";
import courses from "../assets/courses.png";
import projects from "../assets/projects.png";

import "../style/home.css";
import "../style/App.css";

function Home() {
  return (
    <>
      <header>
        <img id="logo" src={logo} />
        <div>
          <button id="buttons">HOME</button>
          <button id="buttons">ABOUT</button>
          <button id="buttons">SERVICES</button>
          <button id="buttons">COMMUNITY</button>
        </div>
      </header>

      <main>
        <div className="hero">
          <h1>
            Welcome to <span>Tech Hub</span>
          </h1>
          <p>Your Gateway to Technology Learning</p>
          <button id="join-btn">Join Tech Hub</button>
        </div>

        <div className="main-content">
          <img src={squares} style={{ width: "100vw", zIndex: -1 }} />

          <div className="cards">
            <div id="card">
              <img
                style={{ height: "70px", marginBottom: "30px" }}
                src={courses}
                alt=""
              />
              <h1
                style={{
                  margin: "4px",
                  fontSize: "30px",
                  marginBottom: "10px",
                }}
              >
                Courses
              </h1>
              <p style={{ margin: "4px", fontSize: "larger" }}>
                Learn programming and tech skills
              </p>
            </div>

            <div id="card">
              <img
                style={{ height: "70px", marginBottom: "30px" }}
                src={projects}
                alt=""
              />
              <h1
                style={{
                  margin: "4px",
                  fontSize: "30px",
                  marginBottom: "10px",
                }}
              >
                Projects
              </h1>
              <p style={{ margin: "4px", fontSize: "larger" }}>
                Build real-world applications
              </p>
            </div>

            <div id="card">
              <img
                style={{ height: "70px", marginBottom: "30px" }}
                src={comunity}
                alt=""
              />
              <h1
                style={{
                  margin: "4px",
                  fontSize: "30px",
                  marginBottom: "10px",
                }}
              >
                Community
              </h1>
              <p style={{ margin: "4px", fontSize: "larger" }}>
                Connect with tech enthusiasts
              </p>
            </div>
          </div>
        </div>
      </main>

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

export default Home;
