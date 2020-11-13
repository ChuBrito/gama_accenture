import React from "react";
import { Divider, Box, Typography, Grid, Hidden } from "@material-ui/core";
import CustomButton from "../../../CustomButton/CustomButton";
import FlyInfos from "./components/FlyInfos";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  positionCurrency: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  custonFlexBasis: {
    flexBasis: "48%",
  },
});

const Content = ({ content }) => {
  console.log(content.flyInfos);
  const classes = useStyles();

  const twoWayComponent = !content.oneWay ? (
    <>
      <Box width="100%">
        <Divider color="#000000" />
      </Box>
      <FlyInfos
        information={{
          initialIataCode: content.initialIataCode,
          finalIataCode: content.finalIataCode,
          flyInfos: content.flyInfos[1],
        }}
      />
    </>
  ) : null;

  return (
    <Grid container item>
      <Grid
        container
        item
        direction="row"
        alignItems="center"
        justify="center"
        md={2}
      >
        <Box margin="10px" textAlign="center">
          <Typography variant="h1">{content.flyInfos[0].airline}</Typography>
        </Box>
      </Grid>
      <Grid container item justify="center" sm={7}>
        <Grid
          container
          item
          direction="column"
          alignItems="center"
          md={9}
          spacing={2}
        >
          <FlyInfos
            information={{
              initialIataCode: content.initialIataCode,
              finalIataCode: content.finalIataCode,
              flyInfos: content.flyInfos[0],
            }}
          />
          {twoWayComponent}
        </Grid>
      </Grid>
      <Grid container item sm={3}>
        <Grid container item justify="center" md={12}>
          <Grid
            item
            container
            justify="center"
            alignContent="center"
            xs={5}
            md={12}
          >
            <Box
              display="flex"
              color="#617480"
              justifyContent="center"
              flexDirection="column"
              textAlign="center"
            >
              <Typography>Por adulto </Typography>
              <Typography>Taxas e tarifas</Typography>
            </Box>
          </Grid>
          <Hidden mdUp>
            <Divider orientation="vertical" />
          </Hidden>
          <Grid
            item
            container
            justify="center"
            alignContent="center"
            xs={5}
            md={12}
          >
            <Box className={classes.positionCurrency}>
              <Typography variant="subtitle1">R$ </Typography>
            </Box>
            <Box className={classes.positionCurrency}>
              <Typography variant="subtitle2">{content.price}</Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction="column"
          justify="center"
          xs={12}
          md={12}
        >
          <Box dispplay="flex" margin="0 auto">
            <CustomButton
              size="large"
              width="400px"
              color="secondary"
              text="COMPRAR"
            />
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Content;
