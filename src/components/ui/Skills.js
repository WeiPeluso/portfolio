import React from "react";
import { makeStyles } from "@material-ui/styles";
import frontend from "../../assets/frontend.png";
import backend from "../../assets/backend.png";
import programming from "../../assets/programming.png";

const useStyles = makeStyles(() => ({
  main: {
    paddingTop: "70px",
    //border: "2px solid red",
    width: "100%",
    margin: "auto",
    textAlign: "center",
    height: "50vh",
    fontFamily: "fira code",
  },
  header: {
    fontSize: "4rem",
    letterSpacing: ".2rem",
    textTransform: "capitalize",
    color: "#777",
    marginBottom: "5rem",
  },
  content: {
    display: "flex",
    justifyContent: "space-around",
  },
  section: {
    paddingTop: "2rem",
    paddingBottom: "2rem",
    width: "30%",
    backgroundColor: "#F0F8FF",
    fontSize: "2rem",
    color: "#696969",
  },
  hr: {
    width: "90%",
    fontSize: "5rem",
  },
}));

const Skills = () => {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <h2 className={classes.header}>Skills Set</h2>
      <div className={classes.content}>
        <div className={classes.section}>
          <img alt="frontend" src={frontend} />
          <h3>
            Front-End
            <br />
            Development
          </h3>
          <hr className={classes.hr} />

          <ul>
            <li>HTML/CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>CSS Framworks(Materail-UI)</li>
            <li>Responsive Web Design</li>
          </ul>
        </div>
        <div className={classes.section}>
          <img alt="backend" src={backend} />
          <h3>
            Back-End
            <br />
            Development
          </h3>
          <hr className={classes.hr} />
          <ul>
            <li>Node.js</li>
            <li>Express</li>
            <li>RDBMS(postgreSQL, SQlite,etc)</li>
            <li>REST</li>
            <li>Testing</li>
          </ul>
        </div>
        <div className={classes.section}>
          <img alt="programming" src={programming} />
          <h3>
            Programming
            <br /> Languages
            <hr className={classes.hr} />
          </h3>
          <ul>
            <li>Java</li>
            <li>Python</li>
            <li>C Language</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
