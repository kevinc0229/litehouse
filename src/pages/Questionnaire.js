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
          pb: 10,
        }}
      >
        <WelcomeQuestionnaire />
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
<<<<<<< HEAD
      </Box>
      
=======
      </Box>{" "}
>>>>>>> 487ba73fb2a8c38666feee3a2fd69d47416c0d17
    </main>
  );
}

export default Questionnaire;
