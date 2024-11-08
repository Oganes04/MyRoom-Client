import { createTheme } from "@mui/material";

const colors = {
  primary: "#F9F9F9",
  secondary: "#232323",
  text: "#232323",
  white: "#FFFFFF",
  error: "#F91D1D",
  orange: "#F99724",
  success: "#31C137",
  active: "#036FED",
};

const theme = createTheme({
  palette: {
    general: {
      primary: colors.primary,
      secondary: colors.secondary,
      text: colors.text,
      white: colors.white,
      error: colors.error,
      orange: colors.orange,
      success: colors.success,
      active: colors.active,
    },
  },
  typography: {
    h1: {
      fontFamily: "TT Firs Text Trial Variable",
      fontSize: "40px",
      fontWeight: 600,
      lineHeight: "43px",
    },
    h2: {
      fontFamily: "TT Firs Text Trial",
      fontSize: "30px",
      fontWeight: 600,
      lineHeight: "30px",
    },
    Text: {
      fontFamily: "TT Firs Text Trial",
      fontWeight: 500,
      fontSize: "15px",
      lineHeight: "17px",
      letterSpacing: "1px",
    },
    FunctionText1: {
      fontFamily: "Helvetica Neue",
      fontWeight: 400,
      fontSize: "20px",
      lineHeight: "25px",
    },
    Message: {
      fontFamily: "TT Firs Text Trial",
      fontWeight: 500,
      fontSize: "18px",
      lineHeight: "23.22px",
    },
    HeadPageText: {
      fontFamily: "TT Firs Text Trial",
      fontWeight: 600,
      fontSize: "25px",
      lineHeight: "25px",
    },
    FunctionText2: {
      fontFamily: "TT Firs Text Trial",
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "16px",
    },
    CardTitle: {
      fontFamily: "TT Firs Text Trial Variable",
      fontWeight: 500,
      fontSize: "17px",
      lineHeight: "16px",
    },
    CardServise: {
      fontFamily: "TT Firs Text Trial Variable",
      fontWeight: 500,
      fontSize: "26px",
      lineHeight: "28px",
    },
    CommentText: {
      fontFamily: "TT Firs Text Trial",
      fontWeight: 450,
      fontSize: "15px",
      lineHeight: "25px",
    },
    InputText: {
      fontFamily: "TT Firs Text Trial",
      fontWeight: 450,
      fontSize: "16px",
      lineHeight: "20.64px",
    },
    H1Car: {
      fontFamily: "TT Firs Text Trial Variable",
      fontWeight: 600,
      fontSize: "30px",
      lineHeight: "27px",
    },
    H2Car: {
      fontFamily: "TT Firs Text Trial Variable",
      fontWeight: 600,
      fontSize: "18px",
      lineHeight: "27px",
    },
  },
});

export default theme;
