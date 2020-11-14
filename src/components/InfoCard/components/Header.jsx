import React from "react";
import { IconButton, Typography } from "@material-ui/core";
import ShareIcon from "@material-ui/icons/Share";
import { HeaderContainer } from "./styles";

const Header = ({ header, infos, share, shareHandler }) => {
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

      {share ? (
        <IconButton size="small" onClick={() => shareHandler()} color="secondary">
          <ShareIcon />
        </IconButton>
      ) : null}
    </HeaderContainer>
  );
};

export default Header;
