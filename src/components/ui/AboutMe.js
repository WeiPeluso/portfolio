import React from "react";
import main from "../../assets/main.svg";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  main: {
    //  border: "2px solid red",
    position: "relative",
    marginTop: "100px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
    flexDirection: "column",
    width: "100%",
    height: "900px",
  },
  mainImg: {
    //  border: "2px solid red",
    width: "100%",
    height: "400px",
  },
  mainContent: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    // border: "2px solid green",
    height: "450px",
  },

  paragraph: {
    margin: "auto",
    width: "60%",
    fontFamily: "Raleway",
    textTransform: "None",
    fontWeight: "700",
    fontSize: "1.2rem",
    letterSpacing: ".2rem",
    //  border: "2px solid red",
  },
}));
const AboutMe = () => {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <div>
        <img className={classes.mainImg} alt="web developer" src={main} />
      </div>
      <div className={classes.mainContent}>
        <p className={classes.paragraph}>
          <span>Hi, I am Wei Pelsuo</span>
          <br />I am a full stack web developer with a computer science degree
          from Rutgers University-New Brunswick, and I am passionate about
          designing and developing web apps. I am eager to practice mine
          knowledge and determination, turn information into action and bring
          ideas to real life.
        </p>
        <a href="#resume">Resume</a>
      </div>
    </div>
  );
};

export default AboutMe;
