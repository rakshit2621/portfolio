import "./Skills.css";
import { skillsimg } from "./Skillsimages";
function Skills() {
  const array = [
    "#6c584c",
    "green",
    "#ffd60a",
    "#669bbc",
    "#588157",
    "#588157",
    "#9d4edd",
    "#669bbc",
    "#669bbc",
    "#669bbc",
    "#669bbc",
    "#669bbc",
    "#ff9e00",
    "#dc2f02",
    "#ff7900",
    "#b5179e",
    "#38b000",
  ];
  return (
    <div className="maincontainer" id="Skills">
      <div className="skillscartoon">
        <div className="floatcontainer">
          <span className="floatitems1"></span>
          <span className="floatitems2"></span>
          <span className="floatitems3"></span>
          <span className="floatitems4"></span>
          <span className="floatitems5"></span>
          <span className="floatitems6"></span>
        </div>
      </div>
      <div className="maincontainerlist">
        <span id="headinghover">
          <span className="skillshead">
            <span className="skillsupline"></span>
            <span className="skillheadname">Skills</span>
            <span className="skillsdownline"></span>
          </span>
        </span>
        <div>
          <div className="imagescontainer">
            {Object.keys(skillsimg).map((data, index) => {
              return (
                <div className="imgitems">
                  <img className="skillimgs" src={skillsimg[data]} alt="Java" />
                  <span className="skillnames">{data}</span>
                  <div
                    className="shadow"
                    style={{
                      backgroundColor: `${array[index % array.length]}`,
                    }}
                  ></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
