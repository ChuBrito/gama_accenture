import React from "react";
import { Box, FormLabel, Grid } from "@material-ui/core";
import CustomInput from "../../components/CustomInput/CustomInput";
import CustomButton from "../../components/CustomButton/CustomButton";
import ProfilePhoto from "../../assets/profile-avatar-placeholder.png";

const ProfileBio = ({
  profileImage = ProfilePhoto,
  nameUser,
  emailUser,
  phoneUser,
  saveInputs,
}) => {
  return (
    <Box width="100%">
      <Grid
        id="profilebio-card"
        container
        item
        direction="row"
        width="100%"
        justify="center"
        alignItems="center"
      >
        <Grid id="profile-avatar-container" item xs={12} md={4}>
          <Box
            id="profile-avatar"
            display="flex"
            height="300px"
            padding="2px"
            justifyContent="center"
          >
            <Box borderRadius="50%" overflow="hidden" height="100%">
              <img
                height="100%"
                id="default-image"
                src={profileImage}
                alt="My face at placeholder"
              />
            </Box>
          </Box>
        </Grid>
        <Grid
          id="profile-form"
          container
          item
          xs={12}
          md={6}
          lg={5}
          direction="row"
          justify="center"
          spacing={1}
        >
          <Grid id="email-container" container item direction="column" xs={10}>
            <FormLabel color="primary">Email</FormLabel>
            <CustomInput
              name="profile-email-input"
              type="email"
              color="primary"
              defaultValue={emailUser}
              noPlaceholder
            />
          </Grid>
          <Grid
            id="name-container"
            container
            item
            xs={10}
            sm={5}
            direction="column"
          >
            <FormLabel color="primary">Nome</FormLabel>
            <CustomInput
              name="profile-name-input"
              defaultValue={nameUser}
              noPlaceholder
            />
          </Grid>
          <Grid
            id="phone-container"
            container
            item
            xs={10}
            sm={5}
            direction="column"
          >
            <FormLabel color="primary">Celular</FormLabel>
            <CustomInput
              name="profile-phone-input"
              defaultValue={phoneUser}
              noPlaceholder
            />
          </Grid>
          <Grid
            id="save-btn-container"
            container
            item
            xs={12}
            sm={6}
            justify="center"
          >
            <CustomButton
              text="Salvar Alterções"
              color="secondary"
              onClick={saveInputs}
            />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProfileBio;
