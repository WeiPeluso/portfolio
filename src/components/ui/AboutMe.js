import React from "react";
import main from "../../assets/main.svg";
import { makeStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";

const mainPurple = "#6C63FF";
const mainPink = "#FF8684";

const useStyles = makeStyles(() => ({
  main: {
    //border: "2px solid red",
    position: "relative",
    paddingTop: "70px",
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
    fontFamily: "fira code",
    letterSpacing: ".1rem",
  },

  paragraph: {
    margin: "auto",
    width: "80%",
    fontFamily: "Raleway",
    textTransform: "None",
    fontWeight: "700",
    fontSize: "2rem",
    letterSpacing: ".2rem",
    //  border: "2px solid red",
  },
  button: {
    display: "inline-block",
    textTransform: "uppercase",
    textDecoration: "none",
    padding: "20px 75px",
    backgroundColor: mainPurple,
    color: "#D3D0FF",
    fontFamily: "Raleway",
    fontWeight: "700",
    fontSize: "1.4rem",
    borderRadius: "100px",
    "&:hover": {
      color: mainPink,
      transform: "translateY(-3px)",
      boxShadow: "0 10px 20px rgba(0, 0, 0, 0.5)",
    },
    "&:active": {
      transform: "translateY(1px)",
      boxShadow: "0 5px 10px rgba(0, 0, 0, 0.5)",
    },
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
        <h2>
          Hi, I am <strong> Wei Pelsuo</strong>
        </h2>
        <p className={classes.paragraph}>
          <br />I am a full stack web developer with a computer science degree
          from Rutgers University-New Brunswick, and I am passionate about
          designing and developing web apps. I am eager to practice mine
          knowledge and determination, turn information into action and bring
          ideas to real life.
        </p>
        <a href="#resume" className={classes.button}>
          Resume
        </a>
      </div>
    </div>
  );
};

export default AboutMe;
