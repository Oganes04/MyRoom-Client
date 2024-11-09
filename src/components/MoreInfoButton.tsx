import { FC } from "react";
import ECategory from "../enums/enums";
import ArraowIcon from "../svg/ArrowIcon";
import { CircleButtonWrapper } from "./style";

interface Props {
  category: keyof typeof ECategory;
}

const MoreInfoButton: FC<Props> = ({ category }) => {
  return (
    <CircleButtonWrapper
      width={ECategory[category]}
      height={ECategory[category]}
    >
      <ArraowIcon />
    </CircleButtonWrapper>
  );
};

export default MoreInfoButton;
