import React from "react";
import { CardHeader, HeaderTextDestination } from "./styles";

const Header = () => {
  return (
    <CardHeader>
      <HeaderTextDestination>
        São Paulo - Salvador
      </HeaderTextDestination>
      <HeaderTextDestination>
        Ida e Volta
      </HeaderTextDestination>
      <HeaderTextDestination>
        Novembro - 03 até 06 de 2020
      </HeaderTextDestination>
    </CardHeader>
  );
};

export default Header;
