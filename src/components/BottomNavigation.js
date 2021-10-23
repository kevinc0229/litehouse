import * as React from "react";
import Box from "@mui/material/Box";
import "./css/BottomNavigation.css";

export default function SimpleBottomNavigation() {
  return (
    <div classname="footer">
      <Box
        sx={{
          height: 300,
          backgroundColor: "primary.dark",
        }}
      />
    </div>
  );
}
