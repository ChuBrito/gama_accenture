import React, { useState } from "react";
import useStyles from "./styles";
import {
  AppBar,
  Box,
  Hidden,
  Toolbar,
  Button,
  Typography,
} from "@material-ui/core";
import AccountBoxOutlinedIcon from "@material-ui/icons/AccountBoxOutlined";
import Logo from "../../components/Logo/Logo";

const Header = () => {
  const [auth, setAuth] = useState(false);
  const loginIn = () => {
    setAuth(!auth);
  };
  const classes = useStyles();
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Hidden mdUp>
          <Logo line />
          <Button
            className={classes.menuButtom}
            onClick={loginIn}
            startIcon={<AccountBoxOutlinedIcon />}
          >
            <Typography variant="body2">Login</Typography>
          </Button>
        </Hidden>
        <Hidden smDown>
          <Logo height="90px" />
          <Button
            className={classes.menuButtom}
            onClick={loginIn}
            startIcon={<AccountBoxOutlinedIcon style={{ fontSize: 30 }} />}
          >
            <Typography variant="h2">Login</Typography>
          </Button>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
