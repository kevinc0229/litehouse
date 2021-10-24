import * as React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Box } from "@mui/system";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";

function MultipleQuestion(props) {
  let questionlist = [];
  let res = {};

  const handleChange = (e, element) => {
    res[element] = e.target.checked;
  };

  const handleClick = (e) => {
    let query = [];

    for (const key in res) {
      if (res[key] == true) {
        query.push(key);
      }
    }

    console.log(query);
  };

  return (
    <Box
      sx={{
        height: 400,
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
        <Typography> {props.question} </Typography>{" "}
        <FormGroup
          sx={{
            pt: 2,
            pb: 2,
          }}
        >
          {props.ans.forEach((element) => {
            questionlist.push(
              <FormControlLabel
                control={<Checkbox />}
                label={element}
                onChange={(e) => handleChange(e, element)}
              />
            );
          })}
          {questionlist}
        </FormGroup>{" "}
        <Button
          sx={{
            color: "black",
          }}
          onClick={handleClick}
        >
          {" "}
          Save{" "}
        </Button>{" "}
      </Box>{" "}
    </Box>
  );
}

export default MultipleQuestion;
