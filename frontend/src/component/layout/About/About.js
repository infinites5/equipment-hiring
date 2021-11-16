import React from "react";
import "./aboutSection.css";
import { Typography, Avatar } from "@material-ui/core";
import Linkedin from "@material-ui/icons/LinkedIn";
import Github from "@material-ui/icons/GitHub";
const About = () => {
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src=""
              alt="Founder"
            />
            <span>
              This Rental E-commerce is bulit by <a href="">Nivetha.</a><br/>
               Certified Mern stack developer
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Contact me @..</Typography>
            <a
              href="
              target="blank"
            >
              <Linkedin className="youtubeSvgIcon" />
            </a>

            <a href="" target="blank">
              <Github className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
