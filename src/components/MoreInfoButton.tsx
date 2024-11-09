import { FC } from "react";
import ECategory from "../enums/enums";
import ArrowIcon from "../svg/ArrowIcon";
import { CircleButtonWrapper } from "./style";

interface Props {
  onClick: () => void;
  category: keyof typeof ECategory;
}

const MoreInfoButton: FC<Props> = ({ category, onClick }) => {
  const handleClick = () => {
    onClick();
  };
  return (
    <CircleButtonWrapper
      width={ECategory[category]}
      height={ECategory[category]}
      onClick={handleClick}
    >
      <ArrowIcon />
    </CircleButtonWrapper>
  );
};

export default MoreInfoButton;
