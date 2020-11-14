import React, { useState } from "react";
import Logo from "../../components/Logo/Logo";
import { Grid, Paper, Box } from "@material-ui/core";
import { ArrowRightAlt } from "@material-ui/icons";
import RegisterService from "../../services/registerService/RegisterService";
import CustomInput from "../../components/CustomInput/CustomInput";
import CustomButton from "../../components/CustomButton/CustomButton";
import useStyles from "./RegisterComponentStyle/styles";
import { ImageLogo, Title, LinkVoltar } from "./styles";

export const Register = () => {
  const classes = useStyles();

  const [cpf, setCpf] = useState("");
  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");
  const [email, setEmail] = useState("");

  const Signup = () => {
    let userData = {
      cpf: cpf.replace(".", "").replace(".", "").replace("-", ""),
      nome: nome,
      senha: senha,
      login: email,
      email: email,
    };
    RegisterService(userData);
  };

  return (
    <Grid container className={classes.root}>
      <Grid
        item
        xs={12}
        sm={8}
        md={5}
        component={Paper}
        elevation={6}
        className={classes.box}
      >
        <div className={classes.paper}>
          <ImageLogo>
            <Logo large />
          </ImageLogo>

          <Title>
            <h1>Faça seu cadastro</h1>
          </Title>

          <Grid
            id="login-form-items"
            container
            item
            direction="column"
            alignItems="center"
          >
            <Box
              display="flex"
              flexDirection="column"
              width="80%"
              maxWidth="450px"
              alignItems="stretch"
            >
              <Box display="flex" flexDirection="column" marginY="3px">
                <CustomInput
                  color="primary"
                  name="CPF"
                  type="text"
                  onChange={(e) => setCpf(e.target.value)}
                />
              </Box>
              <Box display="flex" flexDirection="column" marginY="3px">
                <CustomInput
                  color="primary"
                  name="Email"
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Box>
              <Box display="flex" flexDirection="column" marginY="3px"></Box>
              <Box display="flex" flexDirection="column" marginY="3px">
                <CustomInput
                  color="primary"
                  name="Nome"
                  type="text"
                  onChange={(e) => setNome(e.target.value)}
                />
              </Box>
              <Box display="flex" flexDirection="column" marginY="3px">
                <CustomInput
                  color="primary"
                  name="Senha"
                  type="password"
                  onChange={(e) => setSenha(e.target.value)}
                />
              </Box>
              <Box display="flex" flexDirection="column" marginY="3px">
                <CustomButton
                  text="Cadastrar"
                  color="secondary"
                  type="submit"
                  onClick={() => Signup()}
                />
              </Box>
            </Box>
            <LinkVoltar>
              <a href="forgot">
                Volta para login
                <ArrowRightAlt />
              </a>
            </LinkVoltar>
          </Grid>
        </div>
      </Grid>
      <Grid item xs={false} sm={8} md={7} className={classes.image} />
    </Grid>
  );
};
export default Register;
