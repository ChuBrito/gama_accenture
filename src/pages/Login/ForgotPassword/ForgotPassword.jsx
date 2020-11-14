import React from "react";
import Header from "../../../organisms/Header/Header";

import { Grid, TextField, Button } from "@material-ui/core";

import { Container, Content, Form } from "./styles";

const ForgotPassword = () => {
  const handleSend = (e) => {
    e.preventDefault();
    console.log(e, "textSend");
  };
  return (
    <Container>
      <Header />
      <Content>
        <Grid container xs={12} sm={8} md={3} elevation={6}>
          <Form noValidate>
            <span className="texto">
              Insira seu endereço de e-mail abaixo e enviaremos um link para
              redefinir sua senha.
            </span>
            <TextField
              className="textFieldInput"
              id="outlined-secondary"
              variant="outlined"
              placeholder="Email"
            />
            <Button
              className="ButtonEnviar"
              type="sybmit"
              onSubmit={handleSend}
            >
              Enviar
            </Button>
          </Form>
        </Grid>
      </Content>
    </Container>
  );
};

export default ForgotPassword;
