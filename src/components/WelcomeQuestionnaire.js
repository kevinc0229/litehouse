import * as React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import welcome from "../img/welcome.jpg";

export default function WelcomeQuestionnaire() {
  return (
    <Box
      sx={{
        height: 400,
        backgroundImage: `url(${welcome})`,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: 400,
          mx: "auto",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            mx: "auto",
            textAlign: "center",
            color: "#f1f2f6",
          }}
        >
          LET'S GET TO KNOW YOU{" "}
        </Typography>{" "}
        <Typography
          variant="body1"
          sx={{
            mx: "auto",
            textAlign: "center",
            color: "#f1f2f6",
          }}
        >
          Here are some questions for you{" "}
        </Typography>{" "}
      </Box>{" "}
    </Box>
  );
}
