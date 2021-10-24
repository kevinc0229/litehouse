import * as React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import welcome from "../img/welcome.jpg";

export default function Welcome() {
  return (

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          p: 5,
          height: '30vh',
          alignItems: "center",
          justifyContent: "center",
          backgroundImage: `url(${welcome})`,
        }}
      >
        <Typography
          variant="h2"
          sx={{
            mx: "auto",
            textAlign: "center",
            color: "#f1f2f6",
          }}
        >
          Let's get to know you.{" "}
        </Typography>{" "}
        <Typography
          variant="body1"
          sx={{
            mx: "auto",
            textAlign: "center",
            color: "#f1f2f6",
            width: 500,
          }}
        >
          filler{" "}
        </Typography>{" "}
      </Box>
  );
}
