import React, { useState } from "react";
import Logo from "../../components/Logo/Logo";
import LoginService from "../../services/loginService/LoginService";
import BgImageLogin from "../../assets/login-background.png";
import CustomButton from "../../components/CustomButton/CustomButton";
import CustomInput from "../../components/CustomInput/CustomInput";
import { Box, Grid, Typography, Hidden } from "@material-ui/core";
import useStyles from "./styles";

const Login = () => {
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");
  
  const classes = useStyles();
  return (
    <Grid container className={classes.baseContainerLogin}>
      <Hidden smDown>
        <Grid id="login-bg-image" item xs="0" md="6">
          <Box display="flex">
            <img src={BgImageLogin} className={classes.bgImage} />
          </Box>
        </Grid>
      </Hidden>
      <Grid
        id="login-form-container"
        container
        item
        xs="12"
        md="6"
        alignItems="center"
      >
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
            xs="12"
            spacing={3}
          >
            <Grid id="login-form-image" container item justify="center" xs="9">
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
                  <CustomInput color="primary" name="E-mail" type="email" onChange={e => setUser(e.target.value)} />
                </Box>
                <Box display="flex" flexDirection="column" marginY="3px">
                  <CustomInput color="primary" name="Senha" type="password" onChange={e => setPassword(e.target.value)}/>
                </Box>
                <Box display="flex" flexDirection="column" marginY="3px">
                  <CustomButton
                    color="primary"
                    text="Entrar"
                    iconName="send"
                    color="secondary"
                    onClick={() => LoginService(password, user)}
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
                <a href="/">
                  <Typography component="span"> Esqueci minha senha</Typography>
                </a>
                <a href="/">
                  <Typography color="secondary" component="span">
                    Criar Conta
                  </Typography>
                </a>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Login;
