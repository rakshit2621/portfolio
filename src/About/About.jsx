import downloadicon from "./Aboutimgs/downloadicon.png";
import resumelinkicon from "./Aboutimgs/resumelinkicon.png";
import profilepic from "./Aboutimgs/profilepic.png";
import "./About.css";
function About() {
  const resumename = "Resume_Rakshit_Chopade";
  const clicked = async (resumename) => {
    try {
      const a = document.createElement("a");
      a.href = process.env.PUBLIC_URL + "/Resume_Rakshit_Chopade.pdf";
      a.download = resumename;
      a.click();
      URL.revokeObjectURL(a.href);
    } catch {
      console.error("Error in downloading the resume");
    }
  };
  return (
    <div id="aboutflex">
      <p className="intropara">
        <div className="aboutparamedia">
          Hello!<span className="handwave">👋</span>
          <br />
          <br />I am{" "}
          <b
            style={{
              textDecorationLine: "underline",
              textDecorationColor: "#276F6F",
            }}
          >
            Rakshit Chopade
          </b>{" "}
          a Software Developer. I love to build stuff and I'm always ready to
          code. I aspire toward a career that will allow me to channel my
          creativity through crafting beautiful software and engaging
          experiences.
        </div>
        <br />
        <br />
        <button id="resumecontainer">
          <div id="myresume">My Resume</div>
          <div className="resumeonhover">
            <span
              onClick={() => clicked(resumename)}
              style={{ position: "relative", width: "100%", height: "100%" }}
            >
              {" "}
              <img
                src={downloadicon}
                alt="download"
                className="resumeonhoveranimateup"
              />
            </span>
            <span> | </span>
            <span
              style={{ position: "relative", width: "100%", height: "100%" }}
            >
              {" "}
              <a
                href="https://drive.google.com/file/d/1R_ltVO3r68zhV7qDLCJMY5LExq4_vWub/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={resumelinkicon}
                  alt="link"
                  className="resumeonhoveranimatedown"
                />
              </a>
            </span>
          </div>
        </button>
      </p>
      <div className="profilepicandloc">
        <img src={profilepic} alt="my pic" className="profilepic" />
        <div className="mylocation">
          <span style={{ paddingRight: "3.5vw" }}>
            &nbsp;&nbsp;Currently in <br />
            📍Bangalore, India
          </span>
        </div>
      </div>
    </div>
  );
}

export default About;
