import React from "react";
import { Box, Grid, Typography, Container } from "@material-ui/core";
import ProfileBio from "../../organisms/ProfileBio/ProfileBio";

const Profile = () => {
  const saveProfile = (e) => {
    console.log(e);
  };

  return (
    <Container>
      <Box
        display="flex"
        flexDirection="column"
        bgcolor="F5F8FA"
        borderRadius="4px"
        justifyContent="center"
      >
        <Grid
          id="profile-title-item"
          item
          container
          justify="center"
          alignItems="center"
        >
          <Typography variant="h1">Perfil</Typography>
        </Grid>
        <Grid id="profile-container" container justify="center">
          <Grid id="profile-bios-container" item container>
            <Grid id="profile-bios-item" item container>
              <ProfileBio
                saveInputs={saveProfile}
                nameUser="teste name"
                emailUser="teste email"
                phoneUser="11 98989898"
              />
            </Grid>
          </Grid>
          <Grid id="profile-reservs-list" item container>
            <Box bgcolor="blue" minHeight="50px" minWidth="90%"></Box>
          </Grid>
          <Grid id="profile-bougth-tickets-list" item container>
            <Box bgcolor="red" minHeight="50px" minWidth="90%"></Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Profile;
