import React, { useState } from "react";
import {
  Typography,
  Menu,
  MenuItem,
  Button,
  Hidden,
  Grid,
} from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { logout } from "../../../services/loginService/LoginService";
import { Link, useHistory } from "react-router-dom";

const HeaderMenu = () => {
  const history = useHistory();
  const [menuOpen, setOpenMenu] = useState(false);
  const [elemAnchor, setElemAnchor] = useState(null);
  const openMenuHandler = (e) => {
    setElemAnchor(!menuOpen ? e.currentTarget : null);
    setOpenMenu(!menuOpen);
  };

  const handleLogout = () => {
    logout();
    history.push("/");
  };

  return (
    <>
      <Hidden mdUp>
        <Button
          aria-controls="header-menu"
          aria-haspopup="true"
          onClick={openMenuHandler}
          startIcon={<AccountCircleIcon fontSize="inherit" />}
        >
          <Typography variant="h2">Profile</Typography>
        </Button>
        <Menu id="header-menu" open={menuOpen} anchorEl={elemAnchor}>
          <Link to="/profile">
            <MenuItem>Profile</MenuItem>
          </Link>
          <Link to="/search">
            <MenuItem>Search</MenuItem>
          </Link>
          <MenuItem onClick={() => handleLogout()}>Logout</MenuItem>
        </Menu>
      </Hidden>
      <Hidden smDown>
        <Grid container justify="space-around">
          <Link to="/profile">
            <Button>Profile</Button>
          </Link>
          <Link to="/">
            <Button>Search</Button>
          </Link>
          <Button onClick={() => handleLogout()}>Logout</Button>
        </Grid>
      </Hidden>
    </>
  );
};

export default HeaderMenu;
