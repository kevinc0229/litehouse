import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

function Item(props) {
  const { sx, ...other } = props;
  return (
    <Button
      sx={{
        color: "black",
        textAlign: "left",
        fontSize: 15,
        fontWeight: "500",
        mx: 20,
        width: 200,
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
        display: "grid",
        gap: 2,
        gridTemplateColumns: "repeat(2, 1fr)",
      }}
    >
      <Item> Contact </Item> <Item> Change Country </Item>{" "}
      <Item> About Us </Item> <Item> FAQ </Item>{" "}
      <Item> Terms & Conditions </Item>{" "}
    </Box>
  );
}
