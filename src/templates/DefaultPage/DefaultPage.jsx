import { Container } from "@material-ui/core";
import React from "react";
import Header from "../../organisms/Header/Header";

const DefaultPage = (props) => {
  return (
    <Container style={{ paddingTop: "96px", minHeight: "100vh" }}>
      <Header />
      {props.children}
    </Container>
  );
};

export default DefaultPage;
