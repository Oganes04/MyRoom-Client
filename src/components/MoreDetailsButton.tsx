import { FC } from "react";
import { Typography } from "@mui/material";
import { MoreDetailsButtonWrapper } from "./style";
import theme from "../theme";

interface Props {
  onClick: () => void;
  dark?: boolean;
}

const MoreDetailsButton: FC<Props> = ({ onClick, dark }) => {
  const handleClick = () => {
    onClick();
  };

  return (
    <MoreDetailsButtonWrapper
      onClick={handleClick}
      sx={{
        backgroundColor: dark
          ? theme.palette.general.secondary
          : theme.palette.general.white,
        color: dark
          ? theme.palette.general.white
          : theme.palette.general.secondary,
      }}
    >
      <Typography variant="H2Car" fontSize="15px" lineHeight="19.35px">
        Подробнее
      </Typography>
    </MoreDetailsButtonWrapper>
  );
};

export default MoreDetailsButton;
