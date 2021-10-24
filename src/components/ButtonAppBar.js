import * as React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function ButtonAppBar() {
  return (
    <Box
      sx={{
        flexGrow: 1,
      }}
    >
      <AppBar
        position="static"
        elevation={0}
        sx={{
          backgroundColor: "white",
        }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              color: "black",
            }}
          >
            LOGO{" "}
          </Typography>{" "}
          <Router>
            <Button
              component={Link}
              to="/questionnaire"
              color="inherit"
              sx={{
                color: "black",
              }}
            >
              {" "}
              Questionnaire{" "}
            </Button>{" "}
          </Router>{" "}
          <Button
            color="inherit"
            sx={{
              color: "black",
            }}
          >
            {" "}
            Login{" "}
          </Button>{" "}
        </Toolbar>{" "}
      </AppBar>{" "}
    </Box>
  );
}
