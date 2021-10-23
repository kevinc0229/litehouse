import * as React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

export default function Welcome() {
  return (
    <Box
      sx={{
        height: 400,
        backgroundColor: "#F8F2F0",
      }}
    >
      <Box
        sx={{
          width: 500,
          height: 400,
          mx: "auto",
        }}
      >
        <Typography variant="h1" sx={{ mx: "auto" }}>
          LOGO
        </Typography>{" "}
        <Typography variant="body1" sx={{ mx: "auto" }}>
          Something regarding what we believe
        </Typography>
      </Box>
    </Box>
  );
}
