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

const HeaderMenu = ({ loginHandler, authorized }) => {
  const [menuOpen, setOpenMenu] = useState(false);
  const [elemAnchor, setElemAnchor] = useState(null);
  const openMenuHandler = (e) => {
    setElemAnchor(!menuOpen ? e.currentTarget : null);
    setOpenMenu(!menuOpen);
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
          <MenuItem onClick={() => {}}>Profile</MenuItem>
          <MenuItem onClick={() => {}}>Search</MenuItem>
          <MenuItem onClick={loginHandler}>Logout</MenuItem>
        </Menu>
      </Hidden>
      <Hidden smDown>
        <Grid container justify="space-around">
          <Button>Profile</Button>
          <Button>Search</Button>
          <Button>Logout</Button>
        </Grid>
      </Hidden>
    </>
  );
};

export default HeaderMenu;
