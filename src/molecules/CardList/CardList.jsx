import React from "react";
import InfoCard from "../../components/InfoCard/InfoCard";
import { Container } from "@material-ui/core";

const CardList = ({ infos }) => {
  return (
    <Container>
      {infos && infos.map((info) => <InfoCard data={info} />)}
    </Container>
  );
};

export default CardList;
