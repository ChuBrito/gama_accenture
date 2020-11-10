import React from "react";
import { Card } from "@material-ui/core";
import Header from "./components/Header";
import Content from "./components/Content/Content";

// TODO Falta terminar

const InfoCard = (data) => {
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
    <Card>
      <Header header={header_info} />
      <Content content={content_info} />
    </Card>
  );
};

export default InfoCard;
