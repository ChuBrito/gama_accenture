import React from "react";
import { Divider, Box, Typography } from "@material-ui/core";
import CustomButton from "../../../CustomButton/CustomButton";
import FlyInfos from "./components/FlyInfos";
import { CardContent } from "../styles";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  containerInfos: {
    display: "flex",
    flexDirection: "column",
  },
});

const Content = () => {
  const classes = useStyles();

  return (
    <CardContent>
      <Typography variant="h1">GOL</Typography>
      <div className={classes.containerInfos}>
        <FlyInfos />
        <Divider />
        <FlyInfos />
      </div>
      <div>
        <div>
          <Typography>
            <Box color="#617480">Por adulto</Box>
          </Typography>
          <Typography>
            <Box color="#617480">Taxas e tarifas</Box>
          </Typography>
        </div>
        <Divider />

        <Typography>
          <Box fontSize="25px">R$ </Box> <Box fontSize="50px">353,47</Box>
        </Typography>
        <CustomButton text="Mais Infos" />
      </div>
    </CardContent>
  );
};

export default Content;
