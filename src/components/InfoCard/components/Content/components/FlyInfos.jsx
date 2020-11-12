import React from "react";
import { Typography, Box, Divider, Grid } from "@material-ui/core";
import { InfoContainer } from "../../styles";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  custonFlexBasis: {
    flexBasis: "48%",
  },
});
const FlyInfos = ({ information }) => {
  const classes = useStyles();
  return (
    <Grid
      item
      container
      className={classes.custonFlexBasis}
      direction="row"
      wrap="nowrap"
      xs={6}
      justify="center"
    >
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
