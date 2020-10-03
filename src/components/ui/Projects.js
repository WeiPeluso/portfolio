import { makeStyles } from "@material-ui/styles";
import React from "react";
import project from "../../assets/project.png";
const useStyle = makeStyles(() => ({
  main: {
    paddingTop: "60px",
    margin: "auto",
    textAlign: "center",
  },
  project: {
    width: "90%",
    border: "1px solid #FF8684",
    display: "flex",
    margin: "auto",
    backgroundColor: "#F0F8FF",
    marginBottom: "5rem",
  },
  header: {
    fontSize: "4rem",
    letterSpacing: ".2rem",
    textTransform: "capitalize",
    color: "#777",
    marginBottom: "5rem",
  },
  image: {
    width: "50%",
  },
  projectP: {
    fontFamily: "Raleway",
    textTransform: "None",
    fontSize: "1.5rem",
    fontWeight: "700",
    letterSpacing: ".1rem",
    color: "#696969",
  },
}));
const Projects = () => {
  const classes = useStyle();
  return (
    <div className={classes.main}>
      <h2 className={classes.header}>Projects</h2>
      <div>
        <div className={classes.project}>
          <img src={project} className={classes.image} alt="project 1" />
          <div className={classes.projectText}>
            <a href="#project">Deployed Site</a>
            <p className={classes.projectP}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
        <div className={classes.project}>
          <img src={project} className={classes.image} alt="project 2" />
          <p className={classes.projectP}>
            <span>
              <a href="#project">Deployed Site</a>
            </span>
            <span>
              <a href="#project">Project Name</a>
            </span>
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className={classes.project}>
          <img src={project} className={classes.image} alt="project 3" />
          <p className={classes.projectP}>
            <span>
              <a href="#project">Deployed Site</a>
            </span>
            <span>
              <a href="#project">Project Name</a>
            </span>
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className={classes.project}>
          <img src={project} className={classes.image} alt="project 4" />
          <p className={classes.projectP}>
            <span>
              <a href="#project">Deployed Site</a>
            </span>
            <span>
              <a href="#project">Project Name</a>
            </span>
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
