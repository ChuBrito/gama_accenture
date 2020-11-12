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

const InfoCard = (data) => {
  const classes = useStyles();

  const header_info = {
    initialDestination: data.initialDestination,
    finalDestination: data.finalDestination,
    flyType: data.flyType,
    date: data.date,
  };

  const content_info = {
    airline: data.airline,
    flyInfo: data.flyInfo,
    value: data.value,
  };

  return (
    <Card className={classes.cardStyles}>
      <Header header={header_info} />
      <Content content={content_info} />
    </Card>
  );
};

export default InfoCard;
