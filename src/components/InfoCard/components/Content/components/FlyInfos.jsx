import React from "react";
import { Typography, Box, Divider } from "@material-ui/core";
import { InfoContainer } from "../../styles";

const FlyInfos = ({ information }) => {
  return (
    <InfoContainer>
      <div>
        <Typography>
          <Box fontWeight="fontWeightBold">23:15</Box>
        </Typography>
        <Typography>
          <Box fontWeight="fontWeightMedium">CGH</Box>
        </Typography>
      </div>
      <div>
        <Typography>
          <Box color="#009688" fontWeight={400}>Direto</Box>
        </Typography>
        <Divider color="#000000"/>
        <Typography>
          <Box >03h 20min</Box>
        </Typography>
      </div>
      <div>
        <Typography>
          <Box fontWeight="fontWeightBold">23:15</Box>
        </Typography>
        <Typography>
          <Box fontWeight="fontWeightMedium">CGH</Box>
        </Typography>
      </div>
    </InfoContainer>
  );
};

export default FlyInfos;
