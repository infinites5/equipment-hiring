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
              src="https://res.cloudinary.com/dviij6cqr/image/upload/v1633644045/IMG-20190410-WA0012_rqzqa6.jpg"
              alt="Founder"
            />
            <span>
              This Rental E-commerce is bulit by <a href="https://vijay-anand.netlify.app/">Vijay Anand.M.</a><br/>
               Certified Mern stack developer
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Contact me @..</Typography>
            <a
              href="https://www.linkedin.com/in/vijay-anand-305b4b17b/"
              target="blank"
            >
              <Linkedin className="youtubeSvgIcon" />
            </a>

            <a href="https://github.com/VijayAnand2408/" target="blank">
              <Github className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
