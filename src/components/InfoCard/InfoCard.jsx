import React from "react";
import { Card } from "@material-ui/core";
import Header from "./components/Header";
import Content from "./components/Content/Content";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  cardStyles: {
    padding: "0 0 10px 0 ",
    margin: "10px 0",
  },
});

const InfoCard = ({ data, reserv, bookmarked, actionFunction }) => {
  const classes = useStyles();

  const header_info = {
    initialDestination: data.initialDestination,
    finalDestination: data.finalDestination,
    oneWay: data.oneWay,
  };

  const content_info = {
    initialIataCode: data.initialIataCode,
    finalIataCode: data.finalIataCode,
    price: data.value,
    oneWay: data.oneWay,
    flyInfos: { ...data.flyInfos },
  };

  const shareMyTicket = () => {
    alert("sharing");
    //TODO: Chamada para compartilhar informações da passagem em rede social
  };

  return (
    <Card className={classes.cardStyles}>
      <Header
        header={header_info}
        infos={{ ...data.flyInfos }}
        share={reserv || bookmarked}
        shareHandler={shareMyTicket}
      />
      <Content
        content={content_info}
        reserv={reserv}
        bookmarked={bookmarked}
        ticketDetailsHandler={actionFunction}
        data={data}
      />
    </Card>
  );
};

export default InfoCard;
