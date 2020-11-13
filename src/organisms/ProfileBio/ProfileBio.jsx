import React from "react";
import { Box, FormLabel, Grid } from "@material-ui/core";
import useStyles from "./styles";
import ProfileAvatar from "./profileAvatar/ProfileAvatar";
import CustomInput from "../../components/CustomInput/CustomInput";
import CustomButton from "../../components/CustomButton/CustomButton";

const ProfileBio = ({ nameUser, emailUser, phoneUser, saveInputs }) => {
  const classes = useStyles();
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
          <ProfileAvatar />
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
            <FormLabel className={classes.labelsColor}>Email</FormLabel>
            <CustomInput
              name="profile-email-input"
              type="email"
              color="secondary"
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
            <FormLabel className={classes.labelsColor}>Nome</FormLabel>
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
            <FormLabel className={classes.labelsColor}>Celular</FormLabel>
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
