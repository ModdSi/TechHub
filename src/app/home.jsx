import { useState } from "react";
import squares from "../assets/squares.png";
import comunity from "../assets/comunity.png";
import courses from "../assets/courses.png";
import projects from "../assets/projects.png";

import "../style/home.css";
import "../style/App.css";

function Home() {
  return (
    <>
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
    </>
  );
}

export default Home;
