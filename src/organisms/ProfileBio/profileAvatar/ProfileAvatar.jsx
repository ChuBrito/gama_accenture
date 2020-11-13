import React from "react";
import { Box } from "@material-ui/core";
import ProfilePhoto from "../../../assets/profile-avatar-placeholder.png";

const ProfileAvatar = (profileImage) => {
  return (
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
          src={ProfilePhoto}
          alt="My face at placeholder"
        />
      </Box>
    </Box>
  );
};

export default ProfileAvatar;
