import React from "react";
import { Divider, Box, Typography, Grid, Hidden } from "@material-ui/core";
import CustomButton from "../../../CustomButton/CustomButton";
import useStyles from "./styles";
import ContentDetails from "./components/ContentDetails";

const Content = ({
  content,
  reserv,
  bookmarked,
  data,
  ticketDetailsHandler,
}) => {
  const classes = useStyles();

  return (
    <Grid container item>
      <ContentDetails content={content} />
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
              <Typography>Valor Total</Typography>
              <Typography>(sem taxas / tarifas)</Typography>
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
            {bookmarked ? (
              <CustomButton
                size="large"
                width="400px"
                color="secondary"
                text="COMPRAR"
                onClick={() => ticketDetailsHandler(data)}
              />
            ) : (
              <CustomButton
                size="large"
                width="400px"
                color="secondary"
                text="DETALHES"
                onClick={() => ticketDetailsHandler(data)}
              />
            )}
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Content;
