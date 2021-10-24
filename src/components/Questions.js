import { Box } from "@mui/system";
import TextQuestion from "../components/TextQuestion";
import SingleQuestion from "./SingleQuestion";
import MultipleQuestion from "./MultipleQuestion";

function Questions() {
  return (
    <Box>
      <TextQuestion />
      <SingleQuestion />
      <MultipleQuestion />
    </Box>
  );
}

export default Questions;
