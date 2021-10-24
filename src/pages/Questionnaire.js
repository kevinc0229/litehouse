import BottomNavigation from "../components/BottomNavigation";
import Questions from "../components/Questions";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Button from "@mui/material/Button";

function Questionnaire() {
  return (
    <main>
      {" "}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          mx: "auto",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#F8F2F0",
          pb: 10,
        }}
      >
        <Typography
          sx={{
            pt: 10,
          }}
        >
          QUESTIONNAIRE
        </Typography>
        <Questions />
        <Button
          sx={{
            color: "black",
          }}
          variant="contained"
          color="inherit"
        >
          {" "}
          Submit{" "}
        </Button>{" "}
      </Box>
      <BottomNavigation />
    </main>
  );
}

export default Questionnaire;
