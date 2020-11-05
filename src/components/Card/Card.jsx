import React from "react";
import Header from "./components/Header";
import { CardContainer } from "./components/styles";

const Card = () => {
  return (
    <CardContainer>
      <Header />
      <Content />
    </CardContainer>
  );
};

export default Card;
