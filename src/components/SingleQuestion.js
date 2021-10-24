import { Box } from "@mui/system";
import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Button from "@mui/material/Button";

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
        <FormControl
          component="fieldset"
          sx={{
            width: 500,
          }}
        >
          <FormLabel
            component="legend"
            sx={{
              pl: 1.5,
              color: "black",
            }}
          >
            What is Your Favorite Number ?
          </FormLabel>{" "}
          <RadioGroup
            defaultValue="one"
            name="radio-buttons-group"
            sx={{
              pt: 2,
              pb: 2,
            }}
          >
            <FormControlLabel value="one" control={<Radio />} label="One" />
            <FormControlLabel value="two" control={<Radio />} label="Two" />
            <FormControlLabel value="three" control={<Radio />} label="Three" />
          </RadioGroup>{" "}
        </FormControl>{" "}
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
