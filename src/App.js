import "./App.css";
import * as React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

import Home from "./pages/Home";
import Questionnaire from "./pages/Questionnaire";

function App() {
  return (
    <Router>
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
            <Button
              component={Link}
              to="/questionnaire"
              color="inherit"
              sx={{ color: "black" }}
            >
              {" "}
              Questionnaire
            </Button>{" "}
            <Button color="inherit" sx={{ color: "black" }}>
              {" "}
              Login{" "}
            </Button>{" "}
          </Toolbar>{" "}
        </AppBar>{" "}
      </Box>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>{" "}
        <Route path="/questionnaire" exact>
          <Questionnaire />
        </Route>{" "}
        <Redirect to="/" />
      </Switch>{" "}
    </Router>
  );
}

export default App;
