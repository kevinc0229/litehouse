import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

function Item(props) {
  const { sx, ...other } = props;
  return (
    <Button
      sx={{
        color: "black",
        fontSize: 15,
        fontWeight: "500",
        mx: "auto",
        width: 300,
        ...sx,
      }}
      {...other}
    />
  );
}
export default function BottomNavigation() {
  return (
    <Box
      sx={{
        mt: 5,
        width: 600,
        mx: "auto",
        display: "grid",
        gap: 2,
        gridTemplateColumns: "repeat(2, 1fr)",
        pb: 20,
      }}
    >
      <Item> Contact </Item> <Item> Change Country </Item>{" "}
      <Item> About Us </Item> <Item> Terms & Conditions </Item>{" "}
      <Item> FAQ </Item>{" "}
    </Box>
  );
}
