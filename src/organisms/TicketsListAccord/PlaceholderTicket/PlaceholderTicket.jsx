import { Box, Typography } from "@material-ui/core";
import React from "react";

const PlaceholderTicket = ({ name }) => {
  return (
    <Box width="100%" justifyContent="center" textAlign="center">
      <Typography>{`Voçê ainda não têm ${name.toLowerCase()}`}</Typography>
    </Box>
  );
};

export default PlaceholderTicket;
