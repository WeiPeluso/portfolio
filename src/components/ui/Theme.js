import { createMuiTheme } from "@material-ui/core/styles";

const mainPurple = "#6C63FF";
const mainPink = "#FF8684";

export default createMuiTheme({
  palette: {
    common: {
      purple: `${mainPurple}`,
      pink: `${mainPink}`,
    },
    primary: {
      main: `${mainPurple}`,
    },
    secondary: {
      main: `${mainPink}`,
    },
  },
  typography: {
    h3: {
      fontWeight: 300,
    },
    tab: {
      fontFamily: "Raleway",
      textTransform: "None",
      fontWeight: "700",
      fontSize: "1rem",
    },
  },
});
