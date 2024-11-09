import { Box, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import { FC, useEffect, useState } from "react";
import CounterWrapper from "./style";

interface Props {
  onCounterChange: (count: number) => void;
}

const MyRoomCounter: FC<Props> = ({ onCounterChange }) => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    onCounterChange(count);
  }, [count, onCounterChange]);

  const handleIncreament = () => {
    setCount((value) => value + 1);
  };

  const handleDecreament = () => {
    if (count > 1) {
      setCount((value) => value - 1);
    }
  };

  return (
    <CounterWrapper>
      <Box height="16px" width="16px" onClick={handleDecreament}>
        <HorizontalRuleIcon fontSize="small" sx={{ transform: "scale(0.8)" }} />
      </Box>
      <Typography variant="Text">{count}</Typography>
      <Box height="16px" width="16px" onClick={handleIncreament}>
        <AddIcon fontSize="small" sx={{ transform: "scale(0.8)" }} />
      </Box>
    </CounterWrapper>
  );
};

export default MyRoomCounter;
