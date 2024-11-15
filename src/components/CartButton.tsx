import { FC } from "react";
import { Typography } from "@mui/material";
import { ButtonCounterWrapper, CircleButtonWrapper } from "./style";
import CartIcon from "../svg/CartIcon";

interface Props {
  onClick: () => void;
  itemsCount?: number;
}

const CartButton: FC<Props> = ({ itemsCount, onClick }) => {
  const handleClick = () => {
    onClick();
  };

  return (
    <CircleButtonWrapper
      width="70px"
      height="70px"
      position="relative"
      onClick={handleClick}
    >
      <CartIcon />
      {itemsCount ? (
        <ButtonCounterWrapper>
          <Typography
            variant="Text"
            fontSize="10px"
            width="100%"
            align="center"
            marginLeft="1px"
          >
            {itemsCount < 100 ? itemsCount : "..."}
          </Typography>
        </ButtonCounterWrapper>
      ) : null}
    </CircleButtonWrapper>
  );
};

export default CartButton;
