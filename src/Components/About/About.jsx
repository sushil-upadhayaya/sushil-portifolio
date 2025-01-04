import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/photosushil.jpg";
const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="" style={{borderRadius:"10px"}}/>
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>A passionate frontend developer from Kathmandu, Nepal. With 2 years of experience, I've contributed to innovative projects at companies like Graycode, LeafFrog, and f1 Soft. Let's build something amazing together.</p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "100%" }} />{" "}
            </div>
            <div className="about-skill">
              <p>React JS</p>
              <hr style={{ width: "90%" }} />{" "}
            </div>
            <div className="about-skill">
              <p>Javascript</p>
              <hr style={{ width: "70%" }} />{" "}
            </div>
            <div className="about-skill">
              <p>Next JS</p>
              <hr style={{ width: "95%" }} />{" "}
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>2+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>30+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>20+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  );
};

export default About;
