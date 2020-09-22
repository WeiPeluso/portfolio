import React from "react";
import { makeStyles } from "@material-ui/styles";
import AboutMe from "./components/ui/AboutMe";
import Skills from "./components/ui/Skills";
import ContactMe from "./components/ui/ContactMe";
import Projects from "./components/ui/Projects";

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
  footer: {
    height: "8vh",
    position: "relative",
    color: mainPink,
  },
  footerP: {
    margin: "0",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
  },
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
        <div id="about">
          <AboutMe />
        </div>
        <div id="skills">
          <Skills />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="contact">
          <ContactMe />
        </div>
        <footer className={classes.footer}>
          <p className={classes.footerP}>
            © 2020 Wei Peluso | Full Stack Web Developer | Personal Portfolio
          </p>
        </footer>
      </div>
    </React.Fragment>
  );
}

export default App;
