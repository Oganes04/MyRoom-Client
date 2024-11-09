import { FC } from "react";
import { Typography } from "@mui/material";
import { YesNoButtonWrapper } from "./style";
import theme from "../theme";

interface Props {
  no?: boolean;
  onClick: () => void;
}

const YesNoButton: FC<Props> = ({ onClick, no }) => {
  const handleClick = () => {
    onClick();
  };

  return (
    <YesNoButtonWrapper
      onClick={handleClick}
      sx={{
        backgroundColor: no
          ? theme.palette.general.white
          : theme.palette.general.secondary,
        color: no
          ? theme.palette.general.secondary
          : theme.palette.general.white,
      }}
    >
      <Typography
        variant="Text"
        fontSize="25px"
        lineHeight="32.25px"
        letterSpacing="-0.28px"
      >
        {no ? "Нет" : "Да"}
      </Typography>
    </YesNoButtonWrapper>
  );
};

export default YesNoButton;
