import * as React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Box } from "@mui/system";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";

function SingleQuestion() {
  return (
    <Box
      sx={{
        height: 400,
        backgroundColor: "#F8F2F0",
        display: "flex",
        flexDirection: "column",
        mx: "auto",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {" "}
      <Box
        sx={{
          width: 500,
        }}
      >
        <Typography>What days are you available?</Typography>
        <FormGroup sx={{ pt: 2, pb: 2 }}>
          <FormControlLabel control={<Checkbox />} label="Monday" />
          <FormControlLabel control={<Checkbox />} label="Tuesday" />
          <FormControlLabel control={<Checkbox />} label="Wednesday" />
          <FormControlLabel control={<Checkbox />} label="Thursday" />
          <FormControlLabel control={<Checkbox />} label="Friday" />
        </FormGroup>
        <Button
          sx={{
            color: "black",
          }}
        >
          {" "}
          Save{" "}
        </Button>{" "}
      </Box>{" "}
    </Box>
  );
}

export default SingleQuestion;
