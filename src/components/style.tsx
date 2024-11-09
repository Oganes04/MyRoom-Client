import { Box, styled } from "@mui/material";

export const CounterWrapper = styled(Box)(({ theme }) => ({
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

export const CircleButtonWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: theme.palette.general.secondary,
  borderRadius: "100%",
}));

export const ButtonCounterWrapper = styled(Box)(({ theme }) => ({
  width: "14px",
  height: "14px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: theme.palette.general.error,
  borderRadius: "100%",
  position: "absolute",
  top: "41.25px",
  left: "38.75px",
}));

export const ConfirmButtonWrapper = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "32px",
}));

export const MoreDetailsButtonWrapper = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "40px",
  width: "144px",
  height: "32px",
  paddingTop: "5px",
  paddingBottom: "5px",
  paddingLeft: "20px",
  paddingRight: "20px",
}));

export const YesNoButtonWrapper = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "40px",
  width: "106px",
  height: "52px",
}));
