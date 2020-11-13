import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import CustomButton from "../../../components/CustomButton/CustomButton";
import CustomInput from "../../../components/CustomInput/CustomInput";
import Logo from "../../../components/Logo/Logo";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <Box
      display="flex"
      width="100%"
      justifyContent="center"
      alignItems="center"
    >
      <Grid
        container
        item
        direction="column"
        justify="center"
        alignItems="center"
        xs={12}
        spacing={3}
      >
        <Grid id="login-form-image" container item justify="center" xs={9}>
          <Logo large width="400px" />
        </Grid>
        <Grid id="login-form-title" item>
          <Typography variant="h1" align="center">
            Faça seu Logon
          </Typography>
        </Grid>
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
              <CustomInput color="primary" name="E-mail" type="email" />
            </Box>
            <Box display="flex" flexDirection="column" marginY="3px">
              <CustomInput color="primary" name="Senha" type="password" />
            </Box>
            <Box display="flex" flexDirection="column" marginY="3px">
              <CustomButton
                text="Entrar"
                iconName="send"
                color="secondary"
                onClick={() => {
                  console.log("clickou");
                }}
              />
            </Box>
          </Box>
        </Grid>
        <Grid id="login-form-bottom-links" item container justify="center">
          <Box
            display="flex"
            alignItems="center"
            flexDirection="column"
            paddingTop="40px"
          >
            <Typography component={Link} to="login/forgot">
              Esqueci minha senha
            </Typography>
            <Typography component={Link} to="/login/signup" color="secondary">
              Criar Conta
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SignIn;
