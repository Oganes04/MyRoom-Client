import { Box } from "@mui/material";
import PWABadge from "./PWABadge";
import MyRoomCounter from "./components/MyRoomCounter";

function App() {
  return (
    <Box>
      <PWABadge />
      <MyRoomCounter
        onCounterChange={(count: number) => {
          console.log(count);
        }}
      />
    </Box>
  );
}

export default App;
