import React from "react";
import { makeStyles } from "@material-ui/styles";
const lightPurple = "#9999ff";
//const mainPink = "#FF8684";
const useStyle = makeStyles(() => ({
  main: {
    border: "2px solid red",
    height: "40vh",
    backgroundColor: lightPurple,
    textAlign: "center",
    color: "#f2f2f2",
    fontSize: "1.8rem",
    paddingTop: "5rem",
    letterSpacing: ".1rem",
  },
}));

const ContactMe = () => {
  const classes = useStyle();
  return (
    <div className={classes.main}>
      <h2>Contact Me</h2>
      <p>Give Me a Call</p>
      <p>856-495-3071</p>
      <p>or Send Me an Email</p>
      <p>weipeluso@gmail.com</p>
      <p>Follow</p>
      <div>Icons</div>
    </div>
  );
};

export default ContactMe;
