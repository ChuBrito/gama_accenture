import React from "react";
import { Typography, Box, Divider, Grid } from "@material-ui/core";
import { InfoContainer } from "../../styles";

const FlyInfos = ({ information }) => {
  return (
    <Grid item container direction="row" wrap="nowrap" xs={6} justify="center">
      <Grid item container direction="column" justify="center" xs={3}>
        <Box display="flex" justifyContent="center" fontWeight="fontWeightBold">
          <Typography>23:15</Typography>
        </Box>
        <Box display="flex" justifyContent="center" fontWeight="fontWeightBold">
          <Typography>CGH</Typography>
        </Box>
      </Grid>
      <Grid
        item
        container
        direction="column"
        justify="center"
        alignContent="center"
        xs={5}
      >
        <Box
          display="flex"
          justifyContent="center"
          color="#009688"
          fontWeight={400}
        >
          <Typography>Direto</Typography>
        </Box>
        <Divider color="#000000" />
        <Box fontWeight="fontWeightBold">
          <Typography>03h 20min</Typography>
        </Box>
      </Grid>
      <Grid item container direction="column" justify="center" xs={3}>
        <Box display="flex" justifyContent="center" fontWeight={400}>
          <Typography>23:15</Typography>
        </Box>
        <Box display="flex" justifyContent="center" fontWeight="fontWeightBold">
          <Typography>CGH</Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default FlyInfos;
