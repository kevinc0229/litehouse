import * as React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

export default function Welcome() {
  return (
    <Box
      sx={{
        p: 5,
        height: '70vh',
        backgroundColor: "#F8F2F0",
        display: "flex",
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Box
        sx={{
          display: "inline-block",
          width: "auto",
          height: "auto",
          mx: "auto",
          p: 5
           
        }}
      >
        <Typography variant="h1" sx={{ mx: "auto",  textAlign: "center" }}>
          LOGO
        </Typography>{" "}
        <Typography variant="body1" sx={{ mx: "auto", textAlign: "center" }}>
          Something regarding what we believe
        </Typography>
      </Box>
    </Box>
  );
}
