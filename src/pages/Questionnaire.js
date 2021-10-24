import Questions from "../components/Questions";
import { Box } from "@mui/system";
import Button from "@mui/material/Button";
import WelcomeQuestionnaire from "../components/WelcomeQuestionnaire";
import TestAPI from "../components/Api";

function Questionnaire() {
  // testAPI = new TestAPI();
  return (
    <main>
      {" "}
      <TestAPI />
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
          onClick={TestAPI.callAPI}
        >
          {" "}
          Submit{" "}
        </Button>{" "}
      </Box>{" "}
    </main>
  );
}

export default Questionnaire;
