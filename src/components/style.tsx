import { Box, styled } from "@mui/material";

const CounterWrapper = styled(Box)(({ theme }) => ({
  width: "120px",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: theme.palette.general.secondary,
  paddingTop: "10px",
  paddingBottom: "10px",
  paddingLeft: "20px",
  paddingRight: "20px",
  borderRadius: "26px",
}));

export default CounterWrapper;
