import { Box, Typography } from "@material-ui/core";
import React from "react";

const PlaceHolderList = () => {
  return (
    <Box
      display="flex"
      minHeight="80px"
      justifyContent="center"
      textAlign="center"
    >
      <Typography>Sem Resultados</Typography>
    </Box>
  );
};

export default PlaceHolderList;
