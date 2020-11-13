import React from "react";
import FlyInfos from "./components/FlyInfos";
import { Divider, Box, Typography, Grid } from "@material-ui/core";

const ContentDetails = ({ content }) => {
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
    <>
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
    </>
  );
};

export default ContentDetails;
