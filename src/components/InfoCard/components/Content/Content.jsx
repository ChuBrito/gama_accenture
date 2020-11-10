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
  currencyBox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  infosBox: {
    textAlign: "left",
    width: "20%"
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
      <div className={classes.infosBox}>
        <div className={classes.alignLeft}>
          <Typography>
            <Box color="#617480">Por adulto</Box>
          </Typography>
          <Typography>
            <Box color="#617480">Taxas e tarifas</Box>
          </Typography>
        </div>

        <Divider />

        <div className={classes.currencyBox}>
          <Box fontSize="2em">R$ </Box>
          <Box fontSize="3em">353,47</Box>
        </div>
        <CustomButton size="large" color="secondary" text="Mais Infos" />
      </div>
    </CardContent>
  );
};

export default Content;
