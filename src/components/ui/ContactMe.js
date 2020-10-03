import React from "react";
import { makeStyles } from "@material-ui/styles";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const lightPurple = "#9999ff";
const useStyle = makeStyles(() => ({
  main: {
    height: "60vh",
    backgroundColor: lightPurple,
    textAlign: "center",
    color: "#f2f2f2",
    fontSize: "1.8rem",
    paddingTop: "5rem",
    letterSpacing: ".1rem",
    fontFamily: "Raleway",
  },
  header: {
    fontSize: "4rem",
    letterSpacing: ".2rem",
    textTransform: "capitalize",
    marginBottom: "5rem",
  },
  phoneNo: {
    fontSize: "3rem",
    fontWeight: 700,
    letterSpacing: ".2rem",
    fontFamily: "Arial, Helvetica, sans-serif",
  },
  email: {
    textDecoration: "None",
    fontSize: "3rem",
    fontWeight: 700,
    fontFamily: "Arial, Helvetica, sans-serif",
    color: "#fff",

    "&:hover": {
      textDecoration: "underline",
    },
  },
  follow: {
    marginTop: "4rem",
  },
  icons: {
    width: "20%",
    margin: "auto",
    display: "flex",
    justifyContent: "space-around",
  },
  icon: {
    textDecoration: "none",
    color: "#fff",
  },
}));

const ContactMe = () => {
  const classes = useStyle();
  return (
    <div className={classes.main}>
      <h2 className={classes.header}>Contact Me</h2>
      <p>Give Me a Call</p>
      <p className={classes.phoneNo}>856-495-3071</p>
      <p>or Send Me an Email</p>
      <a href="mailto:weipeluso@gmail.com" className={classes.email}>
        weipeluso@gmail.com
      </a>
      <p className={classes.follow}>Follow</p>
      <div className={classes.icons}>
        <a
          className={classes.icon}
          href="https://www.linkedin.com/in/weipeluso/"
        >
          <LinkedInIcon style={{ fontSize: 35 }} />
        </a>
        <a className={classes.icon} href="https://github.com/WeiPeluso">
          <GitHubIcon style={{ fontSize: 30 }} />
        </a>
        <a className={classes.icon} href="https://twitter.com/peluso_wei">
          <TwitterIcon style={{ fontSize: 35 }} />
        </a>
      </div>
    </div>
  );
};

export default ContactMe;
