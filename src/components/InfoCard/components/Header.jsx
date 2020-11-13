import React from "react";
import { Typography } from "@material-ui/core";
import { HeaderContainer } from "./styles";

const Header = ({ header, infos }) => {
  const dateText = header.oneWay
    ? `${infos[0].dates.initialDate} até ${infos[0].dates.arriveDate}`
    : `${infos[0].dates.initialDate} até ${infos[1].dates.arriveDate}`;

  return (
    <HeaderContainer>
      <Typography>
        {(header.oneWay ? "Somente Ida" : "Ida e Volta").toLocaleUpperCase()}
      </Typography>
      <Typography>
        {`${header.initialDestination} - ${header.finalDestination}`}
      </Typography>
      <Typography>{dateText}</Typography>
    </HeaderContainer>
  );
};

export default Header;
