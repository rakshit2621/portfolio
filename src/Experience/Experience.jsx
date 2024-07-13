import React from "react";
import "./Exp.css";
function Experience() {
  return (
    <div id="expmaincontainer">
      <div id="exphead">
        <span className="expupline" id="Experience"></span>
        <span className="expheadname">Experience</span>
        <span className="expdownline"></span>
      </div>
      <div id="gradcontainer">
        <h2 className="headtextmedia">
          After my BE graduation in the specialization in{" "}
          <span id="csebackground">Computer Science and Engineering(CSE)</span>{" "}
          from{" "}
          <a
            href="https://www.becbgk.edu/"
            target="_blank"
            rel="noreferrer"
            style={{ color: "#cdb4db" }}
          >
            Basaveshware Engineering College, Bagalkot
          </a>{" "}
          in 2022, I worked at{" "}
        </h2>
      </div>
      <div id="expcontainer">
        <div id="expflexcontainer">
          <div className="expitems">
            <h2 style={{ color: "white", fontSize: "x-large" }}>
              Configuration Engineer @
              <a
                href="https://www.signzy.com/"
                target="_blank"
                rel="noreferrer"
                style={{ color: "#76c893" }}
              >
                Signzy Technologies
              </a>
            </h2>
            <p style={{ color: "white" }}>Oct 2023 - June 2024</p>
            <hr
              style={{
                width: "86%",
                justifyContent: "center",
                marginTop: "0.7vmax",
                height: "1px",
              }}
            />
            <ul className="expdesc">
              <li>
                Analyzed requirements and accordingly developed and fixed the
                application's functional part on 410+ pages.
              </li>
              <li>
                Logically building processes, integrating API's wherever
                required.
              </li>
              <li>
                Managed and restructured 50% of the configuration part in the
                major project for Axis bank client which is used by millions of
                users.
              </li>
            </ul>
            <p className="expskilldesc">
              Skills Developed: Javascript, API, API testing
            </p>
          </div>
          <div className="expitems">
            <h2 style={{ color: "white", fontSize: "x-large" }}>
              Trainee Software Engineer @
              <a
                href="https://recruitcrm.io/"
                target="_blank"
                rel="noreferrer"
                style={{ color: "#76c893" }}
              >
                Recruit CRM
              </a>
            </h2>
            <p style={{ color: "white" }}>May 2022 - Aug 2022</p>
            <hr
              style={{
                width: "86%",
                justifyContent: "center",
                marginTop: "0.7vmax",
                height: "1px",
              }}
            ></hr>
            <ul className="expdesc">
              <li>
                Worked and provided support mainly on the frontend, increasing
                team efficiency by 15%.
              </li>
              <li>
                Participated in sprint retrospective presentations, helpful in
                scrum meetings and overall collaboration with team members.
              </li>
              <li>Solved 70+ bugs and other development tasks.</li>
            </ul>
            <p className="expskilldesc">
              Skills Developed: Vue.js, HTML, CSS, Javascript, PHP
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
