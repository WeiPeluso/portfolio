import React from "react";
import { makeStyles } from "@material-ui/styles";
import main from "./assets/main.svg";
const mainPurple = "#6C63FF";
const mainPink = "#FF8684";
const useStyles = makeStyles(() => ({
  header: {
    display: "flex",
    backgroundColor: mainPurple,
    zIndex: "1",
    position: "fixed",
    top: "0px",
    width: "100%",
    height: "70px",
    alignItems: "center",
  },
  mainName: {
    color: "#D3D0FF",
    letterSpacing: ".2rem",
    fontSize: "3rem",
    fontFamily: "Montserrat",
    fontWeight: "800",
  },
  nav: {
    width: "60%",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    marginLeft: "auto",
  },
  links: {
    textDecoration: "none",
    color: "#D3D0FF",
    "&:hover": {
      color: mainPink,
    },
  },
  linkName: {
    fontFamily: "Raleway",
    textTransform: "None",
    fontWeight: "700",
    fontSize: "1.2rem",
  },
  // aboutme: {
  //   position: "relative",
  //   display: "flex",
  //   justifyContent: "space-around",
  //   alignItems: "center",
  //   flexWrap: "wrap",
  //   flexDirection: "row",
  //   width: "100%",
  //   height: "700px",
  // },
}));
function App() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div id="home" className={classes.header}>
        <div>
          <h1 className={classes.mainName}>Wei Peluso</h1>
        </div>
        <nav className={classes.nav}>
          <a className={classes.links} href="#home">
            <h2 className={classes.linkName}>Home</h2>
          </a>
          <a className={classes.links} href="#about">
            <h2 className={classes.linkName}>About Me</h2>
          </a>
          <a className={classes.links} href="#skills">
            <h2 className={classes.linkName}>Skills</h2>
          </a>
          <a className={classes.links} href="#projects">
            <h2 className={classes.linkName}>Projects</h2>
          </a>
          <a className={classes.links} href="#resume">
            <h2 className={classes.linkName}>Resume</h2>
          </a>
          <a className={classes.links} href="#contact">
            <h2 className={classes.linkName}>Contact Me</h2>
          </a>
        </nav>
      </div>
      <div className={classes.content}>
        <img src={main} />
        <div className={classes.space}></div>
        <div id="about" className={classes.aboutme}>
          <p>about me</p>
          <img src={main} />
        </div>
        <div id="skills" className={classes.skills}>
          <p>skills</p>
          <img src={main} />
        </div>
        <div id="projects">
          <p>project</p>
          <img src={main} />
        </div>
        <div>
          <p>contact me</p>
          <img src={main} />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
