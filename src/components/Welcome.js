import * as React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import welcome from "../img/welcome.jpg";

export default function Welcome() {
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
          width: 500,
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
          LOGO{" "}
        </Typography>{" "}
        <Typography
          variant="body1"
          sx={{
            mx: "auto",
            textAlign: "center",
            color: "#f1f2f6",
          }}
        >
          -The state of our souls, our need for Christ(Romans 3: 23) - We are
          all deserving of eternal hell(Romans 6: 23) - We are saved by faith
          through trust in Jesus Christ(Romans 10: 9 - 10, Galatians 2: 16,
          Ephesians 2: 8 - 9){" "}
        </Typography>{" "}
      </Box>{" "}
    </Box>
  );
}
