import React, { useState } from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import ProfileBio from "../../organisms/ProfileBio/ProfileBio";
import DefaultPage from "../../templates/DefaultPage/DefaultPage";

const USERDATAMOCK = {
  name: "Fedrerico Novo",
  email: "fe.novo@fed.com",
  phone: "11 986111616",
};

const Profile = () => {
  const [userData, setUserData] = useState(USERDATAMOCK);

  const saveProfileHandler = (e) => {
    console.log(e);
  };

  const shareTicketHandler = (e) => {
    console.log(e);
  };

  return (
    <DefaultPage>
      <Typography color="textSecondary" variant="subtitle2">
        testandoooo
      </Typography>
      <Box
        display="flex"
        flexDirection="column"
        bgcolor="#F5F8FA"
        borderRadius="10px"
        justifyContent="center"
        marginTop="10px"
      >
        <Grid
          id="profile-title-item"
          item
          container
          justify="center"
          alignItems="center"
        >
          <Box display="flex" height="96px" alignItems="center">
            <Typography color="primary" variant="h1">
              Perfil
            </Typography>
          </Box>
        </Grid>
        <Grid id="profile-container" container justify="center">
          <Grid id="profile-bios-container" item container>
            <Grid id="profile-bios-item" item container>
              <ProfileBio
                saveInputs={saveProfileHandler}
                nameUser={userData.name.toString()}
                emailUser={userData.email}
                phoneUser={userData.phone}
              />
            </Grid>
          </Grid>
          <Grid id="profile-reservs-list" item container justify="center">
            <Box bgcolor="blue" minHeight="50px" minWidth="90%"></Box>
          </Grid>
          <Grid
            id="profile-bougth-tickets-list"
            item
            container
            justify="center"
          >
            <Box bgcolor="red" minHeight="50px" minWidth="90%"></Box>
          </Grid>
        </Grid>
      </Box>
    </DefaultPage>
  );
};

export default Profile;
