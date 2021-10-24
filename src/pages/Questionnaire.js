import Questions from "../components/Questions";
import { Box } from "@mui/system";
import Button from "@mui/material/Button";
import WelcomeQuestionnaire from "../components/WelcomeQuestionnaire";

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
        }}
      >
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
      </Box>{" "}
    </main>
  );
}

export default Questionnaire;
