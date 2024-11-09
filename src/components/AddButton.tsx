import { FC, useState } from "react";
import { Box } from "@mui/material";
import { CircleButtonWrapper } from "./style";
import AddIcon from "../svg/AddIcon";

interface Props {
  onAdd: () => void;
  onAbort: () => void;
}

const AddButton: FC<Props> = ({ onAdd, onAbort }) => {
  const [isSelected, setIsSelected] = useState(false);

  const style = {
    transform: isSelected ? "rotate(45deg)" : "",
    transition: "transform 150ms ease",
  };

  const handleClick = () => {
    if (!isSelected) {
      onAdd();
      setIsSelected(true);
    } else {
      onAbort();
      setIsSelected(false);
    }
  };

  return (
    <CircleButtonWrapper sx={{ width: "60px", height: "60px" }}>
      <Box sx={style} height="20px" onClick={handleClick}>
        <AddIcon />
      </Box>
    </CircleButtonWrapper>
  );
};

export default AddButton;
