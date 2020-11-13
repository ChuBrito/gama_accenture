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

const MOCKITEM = {
  initialDestination: "New York",
  initialIataCode: "NYC",
  finalDestination: "Madrid",
  finalIataCode: "MAD",
  oneWay: "true",
  value: 455.45,
  flyInfos: [
    {
      //infos da ida
      airline: "Gol", // ele envia o codigo ai tem que traduzir pelo campo dictionaries no final da response
      flyType: "Econômica",
      flyDuration: "1:00",
      dates: {
        initialDate: "12/04/2021",
        initialTime: "17:00",
        arriveDate: "12/05/2021",
        arriveTime: "13:00",
      },
    },
    {
      //infos da volta
      airline: "Gol",
      flyType: "Econômica",
      flyDuration: "1:00",
      dates: {
        initialDate: "12/04/2021",
        initialTime: "17:00",
        arriveDate: "12/05/2021",
        arriveTime: "13:00",
      },
    },
  ],
};

const InfoCard = ({ data, type }) => {
  console.log(data);
  const classes = useStyles();
  const dates = [];
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
  return (
    <Card className={classes.cardStyles}>
      <Header header={header_info} infos={{ ...data.flyInfos }} />
      <Content content={content_info} />
    </Card>
  );
};

export default InfoCard;
