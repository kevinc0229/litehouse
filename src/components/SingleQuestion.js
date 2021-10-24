import { Box } from "@mui/system";
import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Button from "@mui/material/Button";

function SingleQuestion(props) {
  let questionlist = [];

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
            {props.question}{" "}
          </FormLabel>{" "}
          <RadioGroup
            name="radio-buttons-group"
            sx={{
              pt: 2,
              pb: 2,
            }}
          >
            {props.ans.forEach((element) => {
              questionlist.push(
                <FormControlLabel
                  value={element}
                  control={<Radio />}
                  label={element}
                />
              );
            })}
            {questionlist}
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
