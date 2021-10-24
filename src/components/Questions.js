import { Box } from "@mui/system";
// import TextQuestion from "../components/TextQuestion";
import SingleQuestion from "./SingleQuestion";
import MultipleQuestion from "./MultipleQuestion";

function Questions() {
  return (
    <Box>
      <SingleQuestion
        question="Did you grow up with religious beliefs?"
        ans={["Yes", "No"]}
      />{" "}
      <SingleQuestion
        question="Are you currently attending a church?"
        ans={["Yes", "No"]}
      />{" "}
      <MultipleQuestion
        question="What part of the Bible would you most interested in learning about? "
        ans={["Theology", "Stories", "Parables", "Jesus", "Others"]}
      />{" "}
      <MultipleQuestion
        question="What promoted you to search through the Bible? "
        ans={[
          "Life Questions",
          "Friends",
          "Curiosity",
          "Circumstances",
          "Others",
        ]}
      />{" "}
    </Box>
  );
}

export default Questions;
