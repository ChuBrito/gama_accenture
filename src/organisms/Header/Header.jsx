import React from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import {
  AppBar,
  Toolbar,
  useTheme,
  Typography,
  Button,
  Box,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import HeaderMenu from "./component/HeaderMenu";
import Logo from "../../components/Logo/Logo";
import useStyles from "./styles";

const Header = () => {
  const classes = useStyles();
  const theme = useTheme();
  const smBp = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <AppBar position="fixed">
      <Toolbar>
        {smBp ? (
          <Logo height="90px" width="300px" padding="10px 0" />
        ) : (
          <Logo line width="45%" />
        )}
        <Box
          className={classes.buttonWrapper}
          alignItems="center"
          display="flex"
          width="30%"
          justifyContent="flex-end"
        >
          <HeaderMenu />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
