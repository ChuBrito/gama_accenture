import React from "react";
import { CardHeader } from "./styles";
import { Typography } from "@material-ui/core";

const Header = () => {
  return (
    <CardHeader>
      <Typography variant="h3" color="textSecondary">{"Ida e Volta".toLocaleUpperCase()}</Typography>
      <Typography variant="h3" color="textSecondary">São Paulo - Salvador</Typography>
      <Typography variant="h3" color="textSecondary">Novembro - 03 até 06 de 2020</Typography>
    </CardHeader>
  );
};

export default Header;
