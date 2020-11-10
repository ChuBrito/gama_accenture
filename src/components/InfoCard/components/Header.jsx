import React from "react";
import { Typography } from "@material-ui/core";
import { HeaderContainer } from "./styles";

const Header = () => {
  return (
    <HeaderContainer>
      <Typography>
        {"Ida e Volta".toLocaleUpperCase()}
      </Typography>
      <Typography>
        São Paulo - Salvador
      </Typography>
      <Typography>
        Novembro - 03 até 06 de 2020
      </Typography>
    </HeaderContainer>
  );
};

export default Header;
