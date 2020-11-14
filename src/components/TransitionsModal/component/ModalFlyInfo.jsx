import React from "react";
import { Grid, Typography, Divider } from "@material-ui/core";
import useStyles, { ModalBorder } from "./styles";

const ModalFlyInfo = ({ flyInfoItens }) => {
  const classes = useStyles();
  return (
    <>
      <ModalBorder>
        <Grid className={classes.modalContent} container>
          <Grid item xs={12} sm={3} className={classes.modalContentItem}>
            <div>
              <Typography variant="h5" color="textPrimary">
                {flyInfoItens.initialDate}
              </Typography>
              <Typography
                variant="h4"
                color="textPrimary"
                className={classes.fontHour}
              >
                {flyInfoItens.initialTime}
              </Typography>
            </div>
            <div>
              <Typography
                variant="h3"
                color="textPrimary"
                className={classes.fontVoo}
              >
                {flyInfoItens.initialIataCode}
              </Typography>
            </div>
          </Grid>

          <Divider />

          <Grid className={classes.modalContentItem}>
            <div>
              <Typography
                variant="h5"
                color="textPrimary"
                className={classes.fontVoo}
              >
                Duração
              </Typography>
              <Typography color="textPrimary" className={classes.fontHour}>
                {flyInfoItens.flyDuration}
              </Typography>
              <Typography>Econômica</Typography>
            </div>
          </Grid>

          <Divider />

          <Grid className={classes.modalContentItem} item xs={12} sm={3}>
            <div>
              <Typography variant="h5" color="textPrimary">
                {flyInfoItens.arriveDate}
              </Typography>
              <Typography
                variant="h4"
                color="textPrimary"
                className={classes.fontHour}
              >
                {flyInfoItens.arriveTime}
              </Typography>
            </div>
            <div>
              <Typography
                variant="h3"
                color="textPrimary"
                className={classes.fontVoo}
              >
                {flyInfoItens.finalIataCode}
              </Typography>
            </div>
          </Grid>
        </Grid>
      </ModalBorder>
      <br />
    </>
  );
};

export default ModalFlyInfo;
