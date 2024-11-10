import { FC } from "react";
import { Typography } from "@mui/material";
import { ConfirmButtonWrapper } from "./style";
import theme from "../theme";

interface Props {
  dark?: boolean;
  small?: boolean;
  onClick: () => void;
}

const ConfirmButton: FC<Props> = ({ dark, small, onClick }) => {
  const handleClick = () => {
    onClick();
  };

  return (
    <ConfirmButtonWrapper
      onClick={handleClick}
      width={small ? "236px" : "368px"}
      height={small ? "40px" : "60px"}
      sx={{
        backgroundColor: dark
          ? theme.palette.general.secondary
          : theme.palette.general.white,
        color: dark
          ? theme.palette.general.white
          : theme.palette.general.secondary,
      }}
    >
      <Typography
        variant="Text"
        fontSize={small ? "17px" : "22px"}
        lineHeight={small ? "21.93px" : "28.38px"}
      >
        Подтвердить
      </Typography>
    </ConfirmButtonWrapper>
  );
};

export default ConfirmButton;
