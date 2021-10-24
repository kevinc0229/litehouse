import { Box } from "@mui/system";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";

function TextQuestion() {
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
      <Box sx={{ width: 500 }}>
        <Typography
          variant="body1"
          sx={{
            pl: 1.5,
          }}
        >
          What is your name ?
        </Typography>{" "}
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          sx={{
            width: 500,
            mt: 4,
            mb: 4,
          }}
        />
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

export default TextQuestion;
