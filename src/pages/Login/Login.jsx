import React from "react";
import useStyles from "./styles";
import { Box, Grid, Hidden } from "@material-ui/core";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import BgImageLogin from "../../assets/login-background.png";
import ForgotPassword from "./ForgotPassword/forgotPassword";
import SignIn from "./SignIn/SignIn";

const Login = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.baseContainerLogin}>
      <Hidden smDown>
        <Grid id="login-bg-image" item md={6}>
          <Box display="flex">
            <img src={BgImageLogin} className={classes.bgImage} />
          </Box>
        </Grid>
      </Hidden>
      <Grid
        id="login-form-container"
        container
        item
        xs={12}
        md={6}
        alignItems="center"
      >
        <SignIn />
      </Grid>
    </Grid>
  );
};

export default Login;
